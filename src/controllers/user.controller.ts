import { Request, Response } from 'express';
import userService from '../services/user.service';

const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  const responseFromService = await userService.login(username, password);
  res.status(responseFromService.status).json(responseFromService.data);
};

export default {
  login,
};