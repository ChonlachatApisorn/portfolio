import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt-user") {
  constructor() {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<any> {
    const req = context.switchToHttp().getRequest();
    const token = req.headers.access_token;
    if (!token) {
      throw new UnauthorizedException("eiei");
    }
    return super.canActivate(context);
  }
}
