import { Router } from 'express';
import UsersService from '../services/users.service';
import validationHandler from '../middlewares/validation.handler';
import { createUserSchema, getUserSchema, updateUserSchema } from '../schemas/user.schema';

const usersRouter = Router();
const usersService = new UsersService();

usersRouter.get('/', async (req, res) => {
  const users = await usersService.find();
  res.json(users);
});

usersRouter.get('/:id', validationHandler(getUserSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await usersService.findOne(+id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

usersRouter.post('/', validationHandler(createUserSchema), async (req, res) => {
  const body = req.body;
  const newUser = await usersService.create(body);
  res.json(newUser);
});

usersRouter.patch(
  '/:id',
  validationHandler(getUserSchema, 'params'),
  validationHandler(updateUserSchema),
  async (req, res, next) => {
    const {
      body,
      params: { id },
    } = req;

    try {
      const updatedUser = await usersService.update(+id, body);
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  },
);

usersRouter.delete('/:id', validationHandler(getUserSchema, 'params'), async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedUser = await usersService.delete(+id);
    res.json(deletedUser);
  } catch (error) {
    next(error);
  }
});

export default usersRouter;
