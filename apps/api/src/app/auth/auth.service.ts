import { Injectable } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { UserData } from "../users/schema/user.schema";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  }

  login(user: UserData) {
    const playload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(playload, {
        secret: "secret",
      }),
    };
  }
}
