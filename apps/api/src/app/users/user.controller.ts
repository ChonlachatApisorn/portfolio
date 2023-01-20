import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { CurrentUser } from "../auth/decorator/auth.decorator";
import { UserData } from "./schema/user.schema";
import { JwtAuthGuard } from "../auth/guard/jwt-auth.guard";
import { UploadService } from "../upload/upload.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("user")
export class UserController {
  constructor(
    private service: UserService,
    private uploadService: UploadService
  ) {}

  @Post("create")
  create(@Body() dto: UserDto) {
    return this.service.create(dto);
  }

  @Get("list")
  list() {
    return this.service.list();
  }

  @UseGuards(JwtAuthGuard)
  @Put("update-email")
  async updateEmail(
    @Body("email") email: string,
    @CurrentUser() user: UserData
  ) {
    const userId = user._id.toString();
    const update = await this.service.updateEmail(userId, email);
    await this.service.verifyEmail(email, userId);
    return update;
  }

  @Put("update/:id")
  update(@Param("id") id: string, @Body() dto: UserDto) {
    return this.service.update(id, dto);
  }

  @Delete("delete/:id")
  delete(@Param("id") id: string) {
    return this.service.delete(id);
  }

  @Get("confirm-email/:userId")
  async confirmEmail(@Param("userId") userId: string) {
    return this.service.confirmEmail(userId);
  }

  @Post("upload-image/:id")
  @UseInterceptors(FileInterceptor("file"))
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Param("id") id: string
  ) {
    const imageUrl = await this.uploadService.upload(file);
    return this.service.updateImage(id, imageUrl.url);
  }
}
