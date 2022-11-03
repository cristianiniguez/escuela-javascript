import Joi from 'joi';

const id = Joi.number().integer().positive();
const name = Joi.string();
const description = Joi.string().min(10);
const image = Joi.string().uri();
const price = Joi.number().integer().positive();
const categoryId = Joi.number().integer().positive();
const limit = Joi.number().integer();
const offset = Joi.number().integer();

export const createProductSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  image: image.required(),
  price: price.required(),
  categoryId: categoryId.required(),
});

export const updateProductSchema = Joi.object({ name, description, image, price, categoryId });

export const getProductSchema = Joi.object({
  id: id.required(),
});

export const queryProductsSchema = Joi.object({ limit, offset });
