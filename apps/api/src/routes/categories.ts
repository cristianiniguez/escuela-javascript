import { Router } from 'express';
import passport from 'passport';
import CategoriesService from '../services/categories.service';
import { roleCheckHandler } from '../middlewares/auth.handler';
import validationHandler from '../middlewares/validation.handler';
import {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
} from '../schemas/category.schema';
import { ROLE } from '../db/models/user.model';

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
    try {
      const user = await categoriesService.findOne(+req.params.id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  },
);

categoriesRouter.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(createCategorySchema),
  async (req, res, next) => {
    try {
      const newCategory = await categoriesService.create(req.body);
      res.json(newCategory);
    } catch (error) {
      next(error);
    }
  },
);

categoriesRouter.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(getCategorySchema, 'params'),
  validationHandler(updateCategorySchema),
  async (req, res, next) => {
    try {
      const updatedCategory = await categoriesService.update(+req.params.id, req.body);
      res.json(updatedCategory);
    } catch (error) {
      next(error);
    }
  },
);

categoriesRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const deletedCategory = await categoriesService.delete(+req.params.id);
      res.json(deletedCategory);
    } catch (error) {
      next(error);
    }
  },
);

export default categoriesRouter;
