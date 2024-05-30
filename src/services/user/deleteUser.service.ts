import { User } from "@/interfaces/user"

const users: User[] = []

export const deleteUserService = async (id: string): Promise<void> => {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
        users.splice(index, 1)
    }
}