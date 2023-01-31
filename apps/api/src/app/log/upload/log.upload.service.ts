import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { LogUploadData, LogUploadDocument } from "./log.upload.schema";

@Injectable()
export class LogUploadService {
  constructor(
    @InjectModel(LogUploadData.name)
    private model: Model<LogUploadDocument>
  ) {}

  logUpload(userId: string, fileName: string) {
    return this.model.create({ user_id: userId, file_name: fileName });
  }
}
