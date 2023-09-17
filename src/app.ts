import express from 'express';
import productRoute from './routes/product.routes';
import orderRoute from './routes/order.routes';

// commit inicial

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/orders', orderRoute);

export default app;
