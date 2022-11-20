import { Router } from 'express';
import passport from 'passport';
import CustomersService from '../services/customers.service';
import { roleCheckHandler } from '../middlewares/auth.handler';
import validationHandler from '../middlewares/validation.handler';
import {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema,
} from '../schemas/customer.schema';
import { ROLE } from '../db/models/user.model';

const customersRouter = Router();
const customersService = new CustomersService();

customersRouter.get('/', async (req, res) => {
  const customers = await customersService.find();
  res.json(customers);
});

customersRouter.get(
  '/:id',
  validationHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await customersService.findOne(+id);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  },
);

customersRouter.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(createCustomerSchema),
  async (req, res, next) => {
    try {
      const newCustomer = await customersService.create(req.body);
      res.json(newCustomer);
    } catch (error) {
      next(error);
    }
  },
);

customersRouter.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(getCustomerSchema, 'params'),
  validationHandler(updateCustomerSchema),
  async (req, res, next) => {
    try {
      const updatedCustomer = await customersService.update(+req.params.id, req.body);
      res.json(updatedCustomer);
    } catch (error) {
      next(error);
    }
  },
);

customersRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const deletedCustomer = await customersService.delete(+req.params.id);
      res.json(deletedCustomer);
    } catch (error) {
      next(error);
    }
  },
);

export default customersRouter;
