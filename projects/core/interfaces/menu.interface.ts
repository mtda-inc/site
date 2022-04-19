import { UserRoleOptions } from './user-role-options.interface';

export interface Menu {
    name: string;
    placeholder: string;
    icon: string;
    route?: string | string[];
    children?: Menu[];
    roles?: UserRoleOptions[] | '*';
}
