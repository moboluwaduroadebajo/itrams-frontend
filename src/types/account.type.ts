import { UserRolesEnum } from "@/enums/user.enums";

export type UserRoleEntityType = {
  roleId: UserRolesEnum;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UserEntityType = {
  id: string;
  email: string;
  username: string;
  roleId: UserRolesEnum;
  type: string;
  lastLoginDate: Date | null;
  status: string;
  accessToken: string;
  message: string;
  errors: string[];
};

export interface RoleData {
  _id: string;
  name: string;
  roleDesc: string;
  createdAt: Date | string;
}

export type LoginPayloadType = {
  username: string;
  password: string;
};

export type LoginResponseType = {
  user: UserEntityType;
};

export type ResetAccountPasswordPayload = {
  newPassword: string;
};

export type ResetAuthPasswordPayload = {
  email: string | null;
  token: string | null;
  password: string | null;
};
