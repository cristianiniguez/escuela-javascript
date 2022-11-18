import { ExtractJwt, Strategy } from 'passport-jwt';
import config from '../../config';

export default new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret,
  },
  (payload, done) => done(null, payload),
);
