import Joi from 'joi';

const id = Joi.string().uuid();
const name = Joi.string();
const image = Joi.string().uri();
const price = Joi.number().integer().positive();

export const createProductSchema = Joi.object({
  name: name.required(),
  image: image.required(),
  price: price.required(),
});

export const updateProductSchema = Joi.object({
  name: name,
  image: image,
  price: price,
});

export const getProductSchema = Joi.object({
  id: id.required(),
});
