import { Router } from 'express';
import CustomersService from '../services/customers.service';
import validationHandler from '../middlewares/validation.handler';
import {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema,
} from '../schemas/customer.schema';

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

customersRouter.post('/', validationHandler(createCustomerSchema), async (req, res, next) => {
  const body = req.body;

  try {
    const newCustomer = await customersService.create(body);
    res.json(newCustomer);
  } catch (error) {
    next(error);
  }
});

customersRouter.patch(
  '/:id',
  validationHandler(getCustomerSchema, 'params'),
  validationHandler(updateCustomerSchema),
  async (req, res, next) => {
    const {
      body,
      params: { id },
    } = req;

    try {
      const updatedCustomer = await customersService.update(+id, body);
      res.json(updatedCustomer);
    } catch (error) {
      next(error);
    }
  },
);

customersRouter.delete(
  '/:id',
  validationHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;

    try {
      const deletedCustomer = await customersService.delete(+id);
      res.json(deletedCustomer);
    } catch (error) {
      next(error);
    }
  },
);

export default customersRouter;
