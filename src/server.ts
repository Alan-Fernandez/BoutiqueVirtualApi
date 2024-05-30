import express from 'express';
import routerApi from './routes/index';

const server = express();
server.use(express.json());
routerApi(server);

export default server;