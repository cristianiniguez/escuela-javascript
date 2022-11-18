import { Router } from 'express';
import passport from 'passport';
import OrdersService from '../services/orders.service';
import validationHandler from '../middlewares/validation.handler';
import {
  addOrderItemSchema,
  createOrderSchema,
  getOrderSchema,
  updateOrderSchema,
} from '../schemas/order.schema';

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
    const { id } = req.params;
    const order = await ordersService.findOne(+id);
    res.json(order);
  } catch (error) {
    next(error);
  }
});

ordersRouter.post(
  '/',
  passport.authenticate('jwt', { session: false }),
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
  validationHandler(getOrderSchema, 'params'),
  validationHandler(updateOrderSchema),
  async (req, res, next) => {
    const {
      body,
      params: { id },
    } = req;

    try {
      const updatedOrder = await ordersService.update(+id, body);
      res.json(updatedOrder);
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
    const { id } = req.params;

    try {
      const deletedOrder = await ordersService.delete(+id);
      res.json(deletedOrder);
    } catch (error) {
      next(error);
    }
  },
);

export default ordersRouter;
