export interface IUser {
  username: string;
  bio: string;
  profile_image: string;
}

export interface IAuthContext {
  user: boolean;
  setUser: (user: boolean) => void;
}
