import { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from './Product';

export type NewProdResponse = Promise<{
  status: number,
  data: Product | Product[] | ProductSequelizeModel | ProductSequelizeModel[],
}>;

export type OrderResponse = Promise<{
  status: number,
  data: object | object[],
}>;

export type LoginResponse = {
  status: number,
  data: {
    token?: string;
    message?: string;
  };
};