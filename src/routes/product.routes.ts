import { Router } from 'express';
import productCtrl from '../controllers/product.controller';

const prodRouter = Router();

prodRouter.post('/', productCtrl.newProduct);

export default prodRouter;