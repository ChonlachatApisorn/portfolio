import { MinLength } from "class-validator";

export class UserDto {
  @MinLength(4, {
    message: "Username must be more than 4 characters",
  })
  username: string;

  @MinLength(8, {
    message: "Password must be more than 8 characters",
  })
  password: string;

  bio?: string;

  email?: string;
}

export class EmailVerifyDto {
  email_verify: boolean;
}

export class UserLogin {
  username: string;
  password: string;
}
