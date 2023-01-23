import passport from 'passport';
import localStrategy from './strategies/local.strategy';
import localGqlStrategy from './strategies/local-gql.strategy';
import jwtStrategy from './strategies/jwt.strategy';

passport.use(localStrategy);
passport.use(localGqlStrategy);
passport.use(jwtStrategy);
