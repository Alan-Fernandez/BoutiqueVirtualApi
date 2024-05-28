export type UserRole = 'customer' | 'admin';

export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: UserRole;
    avatar: string;
}


// UserCredentials define las credenciales de un usuario, que incluyen un correo electrónico y una contraseña.
export interface UserCredentials {
    email: string;
    password: string;
}

// UserCreationRequest define el cuerpo de la solicitud para crear un nuevo usuario.
export interface UserCreationRequest {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

// UserUpdateRequest define el cuerpo de la solicitud para actualizar un usuario existente.
// Todos los campos son opcionales, ya que no es necesario enviar todos los atributos del usuario al actualizar.
export interface UserUpdateRequest {
    email?: string;
    name?: string;
    password?: string;
    avatar?: string;
    role?: UserRole;
}

// EmailAvailabilityResponse define la respuesta de la API al verificar la disponibilidad de un correo electrónico.
export interface EmailAvailabilityResponse {
    isAvailable: boolean;
}