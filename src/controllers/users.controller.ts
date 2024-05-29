import { Request, Response } from 'express';
import {
    createUserService,
    getAllUsersService,
    deleteUserService,
    getUserService
}   from '../services/users.service';
import { User, UserCreationRequest } from '@/interfaces/user';


export const createUser = async (req: Request, res: Response) => {
    const userData: UserCreationRequest = req.body;
    const newUser: User = await createUserService(userData);
    res.status(201).json(newUser);
}
export const getUsers = async (req:Request, res: Response) => {
    const users: User[] = await getAllUsersService();
    res.status(200).json(users);
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserService(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await deleteUserService(id);
    res.status(200).json({ message: 'User deleted successfully' });
}