import express from 'express';
import productRoute from './routes/product.routes';
import orderRoute from './routes/order.routes';
import userRoute from './routes/user.routes';

// commit inicial

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/orders', orderRoute);
app.use('/login', userRoute);

export default app;
