import express from 'express';
import routerApi from './routes/index';

const server = express();
server.use(express.json());
server.use(routerApi)

export default server;