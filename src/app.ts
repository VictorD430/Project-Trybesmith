import express from 'express';
import productRoute from './routes/product.routes';

// commit inicial

const app = express();

app.use(express.json());

app.use('/products', productRoute);

export default app;
