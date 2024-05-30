import { User, UserUpdateRequest } from "@/interfaces/user"

const users: User[] = []

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