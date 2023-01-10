import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { SkillModule } from "./skill/skill.module";
import { UserModule } from "./users/user.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get("DATABASE_URI"),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    SkillModule,
    AuthModule,
  ],
})
export class AppModule {}
