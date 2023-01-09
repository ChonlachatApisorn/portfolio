import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { SkillDto } from "./dto/skill.dto";
import { SkillService } from "./skill.service";

@Controller("skill")
export class SkillControll {
  constructor(private service: SkillService) {}

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

  @Delete("delete/:id")
  delete(@Param("id") id: string) {
    return this.service.delete(id);
  }

  @Get("list/:user_id")
  findByUserId(@Param("user_id") user_id: string) {
    return this.service.findByUserId(user_id);
  }
}
