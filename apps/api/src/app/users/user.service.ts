import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserData, UserDocument } from "./schema/user.schema";
import * as bcrypt from "bcryptjs";
import { UserDto } from "./dto/user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserData.name)
    private model: Model<UserDocument>
  ) {}

  async create(dto: UserDto) {
    const salt = await bcrypt.genSalt();
    return this.model.create({
      ...dto,
      username: dto.username,
      password: bcrypt.hashSync(dto.password, salt),
    });
  }

  update(id: string, dto: UserDto) {
    return this.model.findByIdAndUpdate(id, dto, { new: true });
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }

  list() {
    return this.model.find().exec();
  }

  findOne(username: string) {
    return this.model.findOne({ username: username }).exec();
  }
}
