import type { User } from './user.interface';

export interface UserForgotPassword extends _UserForgotPassword {
    _id?: any;
    id?: any;
}

export interface _UserForgotPassword {
    token: string;
    expires: Date;
    used: boolean;
    user: User;
}
