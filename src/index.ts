import express from 'express';
import productsRouter from './routers/products/index'

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello world');
});


app.use('/products', productsRouter);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


