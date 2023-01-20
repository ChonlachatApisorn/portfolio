import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SkillDto } from "./dto/skill.dto";
import { SkillData, SkillDocument } from "./schema/skill.schema";

@Injectable()
export class SkillService {
  constructor(
    @InjectModel(SkillData.name)
    private model: Model<SkillDocument>
  ) {}

  create(dto: SkillDto) {
    return this.model.create(dto);
  }

  update(id: string, dto: SkillDto) {
    return this.model.findByIdAndUpdate(id, dto, { new: true });
  }

  updateImage(id: string, imageUrl: string) {
    return this.model.findByIdAndUpdate(
      id,
      { skill_image: imageUrl },
      { new: true }
    );
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }

  list() {
    return this.model.find().exec();
  }

  findByUserId(user_id: string) {
    return this.model.find({ user_id: user_id });
  }
}
