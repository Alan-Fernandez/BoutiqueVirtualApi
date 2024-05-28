import server from './server';
import dotenv from 'dotenv';
dotenv.config();

const ENVIRONMENT = process.env.ENVIRONMENT;
const PORT = ENVIRONMENT !== 'development'? process.env.PORT : 3001;

server.get('/', (_req, res) => {
    console.log('GET /');
    res.send('Hello World!');
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});