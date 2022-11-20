import { Router } from 'express';
import passport from 'passport';
import OrdersService from '../services/orders.service';
import { JWTPayload } from '../utils';

const profileRouter = Router();
const ordersService = new OrdersService();

profileRouter.get(
  '/my-orders',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    const user = req.user as JWTPayload;

    try {
      const orders = await ordersService.findByUser(user.sub);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  },
);

export default profileRouter;
