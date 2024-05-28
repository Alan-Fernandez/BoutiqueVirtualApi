
import server from './server';
import dotenv from 'dotenv';
dotenv.config();

const ENVIRONMENT = process.env.ENVIRONMENT;
const PORT = ENVIRONMENT !== 'development'? process.env.PORT : 3001;

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.get('/products', (req, res) => {
  res.send({
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
      },
    ],
  })
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
