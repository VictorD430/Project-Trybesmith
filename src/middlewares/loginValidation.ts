import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const validate = req.body;
  if (!validate.username || !validate.password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  next();
};