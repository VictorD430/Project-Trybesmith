import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { NewProdResponse } from '../types/newProduct';

const newProduct = async (product: ProductInputtableTypes): NewProdResponse => {
  const { dataValues: { orderId, ...createdProduct } } = await ProductModel.create(product);
  return { status: 201, data: createdProduct };
};

export default {
  newProduct,
};