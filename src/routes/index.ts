import express from 'express';
import { createUser, deleteUser, getUser, getUsers } from "../controllers/users.controller";
import { Router } from "express";

function routerApi(app: express.Application) {
    const router: Router = Router();
    app.use('/api/v1', router);
    
    router.get('/', (req, res) => {
        res.send('Hello World');
    });
    router.post('/user', createUser);
    router.get('/user', getUsers);
    router.get('/user/:id', getUser);
    router.delete('/user/:id', deleteUser);
}

export default routerApi;