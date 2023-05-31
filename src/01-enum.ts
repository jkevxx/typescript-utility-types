export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

export type User = {
  username: string;
  role: ROLES;
}

const kevinUser: User = {
  username: 'kevinpaez',
  role: ROLES.ADMIN
}


type Password = string | number;

const newPass: Password = 2;
