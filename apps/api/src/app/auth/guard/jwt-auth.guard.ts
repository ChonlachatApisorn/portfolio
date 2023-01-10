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
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const token = req.headers.access_token;
    if (!token) {
      throw new UnauthorizedException();
    }
    return super.canActivate(context);
  }
}
