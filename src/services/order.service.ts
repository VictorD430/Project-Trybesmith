import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderResponse } from '../types/responseType';

const getAllOrders = async (): OrderResponse => {
  const allOrders = await OrderModel.findAll({
    include: [
      {
        model: ProductModel,
        as: 'productIds',
        attributes: ['id'],
      },
    ],
  });
  const orderRes = allOrders.map((order) => order.toJSON())
    .map((order) => ({
      ...order,
      productIds: order.productIds?.map(({ id }) => id),
    }));
  return { status: 200, data: orderRes };
};

export default {
  getAllOrders,
};