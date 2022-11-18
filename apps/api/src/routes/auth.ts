import { Router } from 'express';
import passport from 'passport';
import { User } from '../db/models/user.model';
import { signToken } from '../utils';

const authRouter = Router();

authRouter.post('/login', passport.authenticate('local', { session: false }), (req, res, next) => {
  try {
    const user = req.user as User;
    const token = signToken({ sub: user.id, role: user.role });
    res.json({ token, user });
  } catch (error) {
    next(error);
  }
});

export default authRouter;
