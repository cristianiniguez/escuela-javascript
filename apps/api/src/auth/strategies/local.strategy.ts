import { Strategy } from 'passport-local';
import AuthService from '../../services/auth.service';

const authService = new AuthService();

export default new Strategy(
  { usernameField: 'email', passwordField: 'password' },
  async (username, password, done) => {
    try {
      const user = await authService.getUser(username, password);
      done(null, user);
    } catch (error) {
      done(error);
    }
  },
);
