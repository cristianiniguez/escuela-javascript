import { Router } from 'express';
import passport from 'passport';
import UsersService from '../services/users.service';
import { roleCheckHandler } from '../middlewares/auth.handler';
import validationHandler from '../middlewares/validation.handler';
import { createUserSchema, getUserSchema, updateUserSchema } from '../schemas/user.schema';
import { ROLE } from '../db/models/user.model';

const usersRouter = Router();
const usersService = new UsersService();

usersRouter.get('/', async (req, res, next) => {
  try {
    const users = await usersService.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

usersRouter.get('/:id', validationHandler(getUserSchema, 'params'), async (req, res, next) => {
  try {
    const user = await usersService.findOne(+req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

usersRouter.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(createUserSchema),
  async (req, res, next) => {
    try {
      const newUser = await usersService.create(req.body);
      res.json(newUser);
    } catch (error) {
      next(error);
    }
  },
);

usersRouter.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(getUserSchema, 'params'),
  validationHandler(updateUserSchema),
  async (req, res, next) => {
    try {
      const updatedUser = await usersService.update(+req.params.id, req.body);
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  },
);

usersRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const deletedUser = await usersService.delete(+req.params.id);
      res.json(deletedUser);
    } catch (error) {
      next(error);
    }
  },
);

export default usersRouter;
