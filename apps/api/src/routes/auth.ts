import { Router } from 'express';
import passport from 'passport';

const authRouter = Router();

authRouter.post('/login', passport.authenticate('local', { session: false }), (req, res, next) => {
  try {
    res.json(req.user);
  } catch (error) {
    next(error);
  }
});

export default authRouter;
