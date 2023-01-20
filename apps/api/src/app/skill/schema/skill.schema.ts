import { Prop, Schema } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { BaseSchema } from "../../common/base.schema";
import { UserData } from "../../users/schema/user.schema";
import { SchemaFactory } from "@nestjs/mongoose";

export type SkillDocument = SkillData & Document;

@Schema({ timestamps: true })
export class SkillData extends BaseSchema {
  @Prop()
  skill_name: string;

  @Prop()
  skill_image: string;

  @Prop({ type: Types.ObjectId, ref: "UserData" })
  user_id: UserData | Types.ObjectId;
}
export const SkillSchema = SchemaFactory.createForClass(SkillData);
