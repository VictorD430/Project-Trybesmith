import { Request, Response } from 'express';
import productService from '../services/product.service';

const newProduct = async (req: Request, res: Response) => {
  const responseFromService = await productService.newProduct(req.body);
  return res.status(responseFromService.status).json(responseFromService.data);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const responseFromService = await productService.getAllProducts();
  return res.status(responseFromService.status).json(responseFromService.data);
};

export default {
  newProduct,
  getAllProducts,
};