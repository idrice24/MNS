// https://github.com/mosh-hamedani/organic-shop/blob/master/src/app/shared/models/app-user.ts

export interface AppUser {
  id: number;
  username?: string;
  fName?: string;
  lName?: string;
  email?: string;
  password?: string;
  isAdmin?: boolean;
  avatar?: string;
  description?: string;
  token?: string; // For Token Based Authentication
}
