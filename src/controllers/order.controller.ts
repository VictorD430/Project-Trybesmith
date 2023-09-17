import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAllOrders = async (req: Request, res: Response): Promise<void> => {
  const responseFromService = await orderService.getAllOrders();
  res.status(responseFromService.status).json(responseFromService.data);
};

export default {
  getAllOrders,
};