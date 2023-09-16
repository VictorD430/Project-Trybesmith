import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { NewProdResponse } from '../types/newProduct';

const newProduct = async (product: ProductInputtableTypes): NewProdResponse => {
  const { dataValues: { orderId, ...createdProduct } } = await ProductModel.create(product);
  return { status: 201, data: createdProduct };
};

const getAllProducts = async (): NewProdResponse => {
  const allproducts = await ProductModel.findAll();
  return { status: 201, data: allproducts };
};

export default {
  newProduct,
  getAllProducts,
};