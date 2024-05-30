import { User } from "@/interfaces/user"

const users: User[] = []

export const getUserService = async (id: string): Promise<User | undefined> => {
    return users.find(user => user.id === id);
}