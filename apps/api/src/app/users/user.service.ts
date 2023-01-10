import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserData, UserDocument } from "./schema/user.schema";
import * as bcrypt from "bcryptjs";
import { UserDto } from "./dto/user.dto";
import * as nodemailer from "nodemailer";

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

  findById(id: string) {
    return this.model.findById(id).exec();
  }

  async verifyEmail(email: string) {
    const transporter = nodemailer.createTransport({
      host: process.env.SERVICE,
      service: process.env.SERVICE,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    const option = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Verify Your Email",
      html: "<b>testing verify email<b>",
    };
    console.log("service = ", option);

    try {
      await transporter.sendMail(option);
    } catch (err) {
      console.log(err);
    }
    return;
  }
}
