import { Router } from 'express';
import CategoriesService from '../services/categories.service';
import validationHandler from '../middlewares/validation.handler';
import {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
} from '../schemas/category.schema';

const categoriesRouter = Router();
const categoriesService = new CategoriesService();

categoriesRouter.get('/', async (req, res, next) => {
  try {
    const categories = await categoriesService.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

categoriesRouter.get(
  '/:id',
  validationHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;

    try {
      const user = await categoriesService.findOne(+id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  },
);

categoriesRouter.post('/', validationHandler(createCategorySchema), async (req, res, next) => {
  const body = req.body;

  try {
    const newCategory = await categoriesService.create(body);
    res.json(newCategory);
  } catch (error) {
    next(error);
  }
});

categoriesRouter.patch(
  '/:id',
  validationHandler(getCategorySchema, 'params'),
  validationHandler(updateCategorySchema),
  async (req, res, next) => {
    const {
      body,
      params: { id },
    } = req;

    try {
      const updatedCategory = await categoriesService.update(+id, body);
      res.json(updatedCategory);
    } catch (error) {
      next(error);
    }
  },
);

categoriesRouter.delete(
  '/:id',
  validationHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;

    try {
      const deletedCategory = await categoriesService.delete(+id);
      res.json(deletedCategory);
    } catch (error) {
      next(error);
    }
  },
);

export default categoriesRouter;
