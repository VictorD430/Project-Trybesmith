import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { NewProdResponse } from '../types/responseType';

const newProduct = async (product: ProductInputtableTypes): NewProdResponse => {
  const { dataValues: { orderId, ...createdProduct } } = await ProductModel.create(product);
  return { status: 201, data: createdProduct };
};

const getAllProducts = async (): NewProdResponse => {
  const allProducts = await ProductModel.findAll();
  return { status: 200, data: allProducts };
};

export default {
  newProduct,
  getAllProducts,
};