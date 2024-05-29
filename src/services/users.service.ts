import { User, UserCreationRequest, UserUpdateRequest } from "@/interfaces/user"

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

export const getAllUsersService = async ():  Promise<User[]> => {
    return users;
}
export const deleteUserService = async (id: string): Promise<void> => {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
        users.splice(index, 1)
    }
}

export const getUserService = async (id: string): Promise<User | undefined> => {
    return users.find(user => user.id === id);
}

export const updateUserService = async (id: string, userData: UserUpdateRequest): Promise<User | undefined> => {
    const user = users.find(user => user.id === id)
    if (user) {
        user.email = userData.email ?? user.email
        user.name = userData.name ?? user.name
        user.password = userData.password ?? user.password
        user.avatar = userData.avatar ?? user.avatar
        user.role = userData.role ?? user.role
    }
    return user
}