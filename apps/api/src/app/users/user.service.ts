import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserData, UserDocument } from "./schema/user.schema";
import * as bcrypt from "bcryptjs";
import { UserDto } from "./dto/user.dto";
import { createTransport } from "nodemailer";
import * as path from "path";
import * as fs from "fs";
import * as handlebars from "handlebars";

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
      email_verify: false,
    });
  }

  update(id: string, dto: UserDto) {
    return this.model.findByIdAndUpdate(id, dto, { new: true });
  }

  uploadImage(id: string, imageUrl: string) {
    return this.model.findByIdAndUpdate(
      id,
      { profile_image: imageUrl },
      { new: true }
    );
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

  confirmEmail(id: string) {
    return this.model.findByIdAndUpdate(
      id,
      { $set: { email_verify: true } },
      { new: true }
    );
  }

  updateEmail(id: string, email: string) {
    return this.model.findByIdAndUpdate(
      id,
      { $set: { email: email } },
      { new: true }
    );
  }

  async verifyEmail(email: string, id: string) {
    const srcPath = path.resolve(
      __dirname,
      "assets/template/email-verify.template.hbs"
    );
    const readHtmlFile = fs.readFileSync(srcPath, "utf-8");
    const template = handlebars.compile(readHtmlFile);
    const username = (await this.findById(id)).username;
    const api = `http://localhost:3000/api/user/confirm-email/${id}`;
    const htmlToSend = template({ api, username });

    const transporter = createTransport({
      host: process.env.HOST,
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
      html: htmlToSend,
    };

    try {
      await transporter.sendMail(option);
    } catch (err) {
      throw new err();
    }
    return;
  }
}
