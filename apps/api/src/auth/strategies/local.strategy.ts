import boom from '@hapi/boom';
import { Strategy } from 'passport-local';
import UsersService from '../../services/users.service';
// utils
import _ from 'lodash';
import { verifyPassword } from '../../utils';

const usersService = new UsersService();

export default new Strategy(
  { usernameField: 'email', passwordField: 'password' },
  async (username, password, done) => {
    try {
      const user = await usersService.findByEmail(username);
      if (!user) return done(boom.unauthorized());

      const valid = await verifyPassword(password, user.password);
      if (!valid) return done(boom.unauthorized());

      done(null, _.omit(user.toJSON(), ['password']));
    } catch (error) {
      done(error);
    }
  },
);
