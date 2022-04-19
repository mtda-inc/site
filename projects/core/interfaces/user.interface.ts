import { UserRoleOptions } from './user-role-options.interface';

export type UserFeatures = 'careplan' | 'exerciseProgram' | 'workout' | 'chatRoom';
export interface User extends _User {
    _id?: any;
    id?: any;
}

export interface _User {
    email?: string;
    status?: boolean;

    //
    // Profile
    name?: string;
    shortname?: string;
    firstname?: string;
    lastname?: string;
    picture?: string;
    birthday?: string;

    //
    // Social media login
    facebook?: any;
    google?: any;

    //
    // Social media ids
    facebookId?: string;
    googleId?: string;

    //
    // Roles
    roles?: UserRoleOptions[];

    //
    // Gravatar
    gravatar?: string;
    gravatarLarge?: string;

    //
    // Password
    password?: string;
    passwordResetToken?: string;
    passwordResetExpires?: Date;

    createdAt?: any;
    updatedAt?: any;
    onlineAt?: any;
    isOnline?: any;

    //
    // Diet
    dietID?: any;
    dietName?: string;
    dietCarbValue?: number;
    dietProteinValue?: number;
    dietFatValue?: number;
    pregnant?: boolean;

    //
    // Search
    search?: string;

    //
    // Gender
    gender?: 'male' | 'female' | 'other';

    //
    // Weight
    weight?: number;

    //
    // Height
    height?: number;

    //
    // Completed
    completedDiet?: boolean;
    completedPassword?: boolean;
    completedProfile?: boolean;

    //
    // Delete
    deleted?: boolean;
    deletedAt?: any;
}
