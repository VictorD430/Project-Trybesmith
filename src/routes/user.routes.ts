import { Router } from 'express';
import userCtrl from '../controllers/user.controller';
import loginValidation from '../middlewares/loginValidation';

const userRouter = Router();

userRouter.post('/', loginValidation, userCtrl.login);

export default userRouter;