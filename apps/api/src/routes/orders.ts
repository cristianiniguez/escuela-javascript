import { Router } from 'express';
import passport from 'passport';
import OrdersService from '../services/orders.service';
import validationHandler from '../middlewares/validation.handler';
import { addOrderItemSchema, getOrderSchema } from '../schemas/order.schema';
import { JWTPayload } from '../services/auth.service';

const ordersRouter = Router();
const ordersService = new OrdersService();

ordersRouter.get('/', async (req, res, next) => {
  try {
    const orders = await ordersService.find();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

ordersRouter.get('/:id', validationHandler(getOrderSchema, 'params'), async (req, res, next) => {
  try {
    const order = await ordersService.findOne(+req.params.id);
    res.json(order);
  } catch (error) {
    next(error);
  }
});

ordersRouter.post('/', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  const user = req.user as JWTPayload;

  try {
    const newOrder = await ordersService.create(user.sub);
    res.json(newOrder);
  } catch (error) {
    next(error);
  }
});

ordersRouter.post(
  '/add-item',
  passport.authenticate('jwt', { session: false }),
  validationHandler(addOrderItemSchema),
  async (req, res, next) => {
    try {
      const newOrderItem = await ordersService.addOrderItem(req.body);
      res.json(newOrderItem);
    } catch (error) {
      next(error);
    }
  },
);

ordersRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validationHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const deletedOrder = await ordersService.delete(+req.params.id);
      res.json(deletedOrder);
    } catch (error) {
      next(error);
    }
  },
);

export default ordersRouter;
