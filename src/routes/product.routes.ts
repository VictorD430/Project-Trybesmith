import { Router } from 'express';
import productCtrl from '../controllers/product.controller';

const prodRouter = Router();

prodRouter.post('/', productCtrl.newProduct);
prodRouter.get('/', productCtrl.getAllProducts);

export default prodRouter;