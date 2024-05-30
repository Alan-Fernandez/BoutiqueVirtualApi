import { User, UserCreationRequest } from "@/interfaces/user"

const users: User[] = []

export const createUserService = async (userData: UserCreationRequest): Promise<User> => {
    const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: userData.name,
        email: userData.email,
        password: userData.password,
        avatar: userData.avatar,
        role: 'customer',
        active: true
    }
    users.push(newUser)
    return newUser
}