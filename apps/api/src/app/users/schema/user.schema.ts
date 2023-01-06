import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { BaseSchema } from "../../common/base.schema";

export type UserDocument = UserData & Document;

@Schema({ timestamps: true })
export class UserData extends BaseSchema {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  bio: string;

  @Prop()
  email: string;

  @Prop()
  email_verify: boolean;
}
export const UserSchema = SchemaFactory.createForClass(UserData);
