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

    await mailService.sendMail({
      to: user.email,
      subject: 'This is a new mail ✔', // Subject line
      text: 'This is a new mail world?', // plain text body
      html: '<b>This is a new mail world?</b>', // html body
    });
  }
}

export default AuthService;
