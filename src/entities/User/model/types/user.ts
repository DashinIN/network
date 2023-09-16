import { userRole } from '../consts/consts';

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
