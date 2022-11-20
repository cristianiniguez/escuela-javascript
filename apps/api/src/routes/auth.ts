import { Router } from 'express';
import passport from 'passport';
import AuthService from '../services/auth.service';
import { User } from '../db/models/user.model';
import validationHandler from '../middlewares/validation.handler';
import { resetPasswordSchema } from '../schemas/auth.schema';

const authRouter = Router();
const authService = new AuthService();

authRouter.post('/login', passport.authenticate('local', { session: false }), (req, res, next) => {
  try {
    const user = req.user as User;
    const token = authService.signToken(user);
    res.json({ token, user });
  } catch (error) {
    next(error);
  }
});

authRouter.post(
  '/reset-password',
  validationHandler(resetPasswordSchema),
  async (req, res, next) => {
    try {
      await authService.sendResetPasswordEmail(req.body.email);
      res.json({ message: 'Mail sent' });
    } catch (error) {
      next(error);
    }
  },
);

export default authRouter;
