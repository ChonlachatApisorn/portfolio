import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UploadService } from "../upload/upload.service";
import { SkillData, SkillSchema } from "./schema/skill.schema";
import { SkillControll } from "./skill.controller";
import { SkillService } from "./skill.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SkillData.name, schema: SkillSchema }]),
  ],
  controllers: [SkillControll],
  providers: [SkillService, UploadService],
})
export class SkillModule {}
