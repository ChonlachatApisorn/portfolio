import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { BaseSchema } from "../../common/base.schema";

export type LogUploadDocument = LogUploadData & Document;

@Schema({ timestamps: true })
export class LogUploadData extends BaseSchema {
  @Prop()
  user_id: string;

  @Prop()
  file_name: string;
}
export const LogUploadSchema = SchemaFactory.createForClass(LogUploadData);
