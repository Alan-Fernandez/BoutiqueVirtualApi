import { User } from "@/interfaces/user"

const users: User[] = []

export const getAllUsersService = async ():  Promise<User[]> => {
    return users;
}