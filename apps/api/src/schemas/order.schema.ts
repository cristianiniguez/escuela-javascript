import Joi from 'joi';

const id = Joi.number().integer().positive();
const customerId = Joi.number().integer().positive();

export const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

export const updateOrderSchema = Joi.object({
  customerId,
});

export const getOrderSchema = Joi.object({
  id: id.required(),
});
