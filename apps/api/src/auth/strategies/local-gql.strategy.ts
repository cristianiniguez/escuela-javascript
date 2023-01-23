import { GraphQLLocalStrategy as Strategy } from 'graphql-passport';
import AuthService from '../../services/auth.service';

const authService = new AuthService();

export default new Strategy(async (username, password, done) => {
  try {
    if (typeof username !== 'string' || typeof password !== 'string')
      throw new Error('Username or Password is not a string');

    const user = await authService.getUser(username, password);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
