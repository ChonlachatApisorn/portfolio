import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { SkillDto } from "./dto/skill.dto";
import { SkillService } from "./skill.service";
import { UploadService } from "../upload/upload.service";

@Controller("skill")
export class SkillControll {
  constructor(
    private service: SkillService,
    private uploadService: UploadService
  ) {}

  @Post("create")
  create(@Body() dto: SkillDto) {
    return this.service.create(dto);
  }

  @Get("list")
  list() {
    return this.service.list();
  }

  @Put("update/:id")
  update(@Param("id") id: string, @Body() dto: SkillDto) {
    return this.service.update(id, dto);
  }

  @Put("upload-image/:id")
  @UseInterceptors(FileInterceptor("file"))
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Param("id") id: string
  ) {
    const imageUrl = await this.uploadService.upload(file);
    return this.service.updateImage(id, imageUrl.url);
  }

  @Delete("delete/:id")
  delete(@Param("id") id: string) {
    return this.service.delete(id);
  }

  @Get("list/:user_id")
  findByUserId(@Param("user_id") user_id: string) {
    return this.service.findByUserId(user_id);
  }
}
