import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LogUploadData, LogUploadSchema } from "./log.upload.schema";
import { LogUploadService } from "./log.upload.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LogUploadData.name, schema: LogUploadSchema },
    ]),
  ],
  providers: [LogUploadService],
  exports: [LogUploadService],
})
export class LogUploadModule {}
