import Joi from 'joi';

const id = Joi.number().integer().positive();
const customerId = Joi.number().integer().positive();

const orderId = Joi.number().integer().positive();
const productId = Joi.number().integer().positive();
const quantity = Joi.number().integer().positive();

export const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

export const updateOrderSchema = Joi.object({
  customerId,
});

export const getOrderSchema = Joi.object({
  id: id.required(),
});

export const addOrderItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  quantity: quantity.required(),
});
