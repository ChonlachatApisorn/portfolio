import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDto } from "../users/dto/user.dto";
import { UserService } from "../users/user.service";
import { JwtAuthGuard } from "./guard/jwt-auth.guard";
import { CurrentUser } from "./decorator/auth.decorator";

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @Post("login")
  async login(@Body() userData: UserDto) {
    const user = await this.userService.findOne(userData.username);
    if (!user) {
      throw new UnauthorizedException("User not found!");
    }
    const validate = await this.authService.validateUser(
      userData.username,
      userData.password
    );
    if (!validate) {
      throw new UnauthorizedException("Password is incorrect");
    }
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("checkUser")
  test() {
    return "check user";
  }
}
