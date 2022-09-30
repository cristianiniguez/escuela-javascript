import { Router } from 'express';
import UsersService from '../services/users.service';

const usersRouter = Router();
const usersService = new UsersService();

usersRouter.get('/', async (req, res) => {
  const users = await usersService.find();
  res.json(users);
});

usersRouter.get(':id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await usersService.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

usersRouter.post('/', async (req, res) => {
  const body = req.body;
  const newUser = await usersService.create(body);
  res.json(newUser);
});

usersRouter.patch('/:id', async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const updatedUser = await usersService.update(id, body);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

usersRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedUser = await usersService.delete(id);
  res.json(deletedUser);
});

export default usersRouter;
