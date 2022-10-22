import Joi from 'joi';

const id = Joi.string().uuid();
const name = Joi.string();
const description = Joi.string().min(10);
const image = Joi.string().uri();
const price = Joi.number().integer().positive();

export const createProductSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  image: image.required(),
  price: price.required(),
});

export const updateProductSchema = Joi.object({ name, description, image, price });

export const getProductSchema = Joi.object({
  id: id.required(),
});
