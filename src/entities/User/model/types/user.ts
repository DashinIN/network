export enum userRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER'
}

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: userRole[];
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
