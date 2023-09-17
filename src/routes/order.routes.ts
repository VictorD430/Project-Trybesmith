import { Router } from 'express';
import orderCtrl from '../controllers/order.controller';

const orderRouter = Router();

orderRouter.get('/', orderCtrl.getAllOrders);

export default orderRouter;