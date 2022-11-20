import { Router } from 'express';
import passport from 'passport';
import OrdersService from '../services/orders.service';
import { roleCheckHandler } from '../middlewares/auth.handler';
import validationHandler from '../middlewares/validation.handler';
import {
  addOrderItemSchema,
  createOrderSchema,
  getOrderSchema,
  updateOrderSchema,
} from '../schemas/order.schema';
import { ROLE } from '../db/models/user.model';

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

ordersRouter.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(createOrderSchema),
  async (req, res, next) => {
    try {
      const newOrder = await ordersService.create(req.body);
      res.json(newOrder);
    } catch (error) {
      next(error);
    }
  },
);

ordersRouter.post(
  '/add-item',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
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

ordersRouter.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(getOrderSchema, 'params'),
  validationHandler(updateOrderSchema),
  async (req, res, next) => {
    try {
      const updatedOrder = await ordersService.update(+req.params.id, req.body);
      res.json(updatedOrder);
    } catch (error) {
      next(error);
    }
  },
);

ordersRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
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
