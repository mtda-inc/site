import { UserRoleOptions } from '../interfaces/user-role-options.interface';

/**
 * Has roles
 * @description check if user has any of the given roles
 * @param {UserRoleOptions[]} checkRoles
 * @param {UserRoleOptions[]} userRoles
 * @returns boolean
 */
export function hasRoles(checkRoles: UserRoleOptions[] | undefined = [], userRoles: UserRoleOptions[] | undefined = []): boolean {
    return checkRoles.some((role) => userRoles.includes(role));
}

/**
 * Has all roles
 * @description check if user has all of the given roles
 * @param {UserRoleOptions[]} checkRoles
 * @param {UserRoleOptions[]} userRoles
 * @returns boolean
 */
export function hasAllRoles(checkRoles: UserRoleOptions[] | undefined = [], userRoles: UserRoleOptions[] | undefined = []): boolean {
    return checkRoles.every((role) => userRoles.includes(role));
}

/**
 * Has only given role
 * @description check if user has only the given role
 * @param {UserRoleOptions} checkRole
 * @param {UserRoleOptions[]} userRoles
 * @returns boolean
 */
export function hasOnlyGivenRole(
    checkRole: UserRoleOptions | undefined = undefined,
    userRoles: UserRoleOptions[] | undefined = []
): boolean {
    return userRoles.length === 1 && userRoles[0] === checkRole;
}
