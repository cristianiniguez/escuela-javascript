import jwt from 'jsonwebtoken';
import boom from '@hapi/boom';
import _ from 'lodash';
import UsersService from './users.service';
import MailService from './mail.service';
import { ROLE, User } from '../db/models/user.model';
import config from '../config';
import { verifyPassword } from '../utils';

const usersService = new UsersService();
const mailService = new MailService();

export type JWTPayload = { sub: number; role: ROLE };

class AuthService {
  public async getUser(email: string, password: string) {
    const user = await usersService.findByEmail(email);
    if (!user) throw boom.unauthorized();

    const valid = await verifyPassword(password, user.password);
    if (!valid) throw boom.unauthorized();

    return _.omit(user.toJSON(), ['password']);
  }

  public signToken(user: User) {
    return jwt.sign({ sub: user.id, role: user.role }, config.jwtSecret);
  }

  public async sendResetPasswordEmail(email: string) {
    const user = await usersService.findByEmail(email);
    if (!user) throw boom.notFound(`User not found`);

    const token = jwt.sign({ sub: user.id }, config.jwtSecret, { expiresIn: '15min' });
    const link = `${config.ui.url}/reset-password?token=${token}`;
    await usersService.update(user.id, { resetPasswordToken: token });

    await mailService.sendMail({
      to: user.email,
      subject: 'Reset your password',
      html: `<p>Go to <a href="${link}">this link</a> to reset your password.</p>`, // html body
    });
  }
}

export default AuthService;
