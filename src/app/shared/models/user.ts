export type UserRole = 'ADMIN' | 'INSTRUTOR' |'STUDENT';

export interface User {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    role: UserRole;
}
