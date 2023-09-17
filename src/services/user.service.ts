import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { LoginResponse } from '../types/responseType';

const secret = process.env.JWT_SECRET || 'secret';

const login = async (username: string, password: string): Promise<LoginResponse> => {
  const findUser = await UserModel.findOne({ where: { username } });
  if (!findUser
    || !bcryptjs.compareSync(password, findUser.dataValues.password)
    || findUser.dataValues.username !== username) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }
  const token = jwt.sign({
    id: findUser.dataValues.id,
    username: findUser.dataValues.username,
  }, secret);
  return { status: 200, data: { token } };
};

export default {
  login,
};