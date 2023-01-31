import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UploadService } from "../upload/upload.service";
import { UserData, UserSchema } from "./schema/user.schema";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { LogUploadModule } from "../log/upload/log.upload.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserData.name, schema: UserSchema }]),
    LogUploadModule,
  ],
  controllers: [UserController],
  providers: [UserService, UploadService],
  exports: [UserService],
})
export class UserModule {}
