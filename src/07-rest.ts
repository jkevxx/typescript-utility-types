import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'nicobytes',
  role: ROLES.CUSTOMER
}


export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV2', rta4);
