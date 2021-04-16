import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthController } from "./auth.controller";
import { User, UserSchema } from "./auth.schema";
import { AuthServise } from "./auth.servise";
import * as dotenv from 'dotenv'
import { JwtModule } from "@nestjs/jwt";
import { APP_GUARD } from "@nestjs/core";
import { JwtGuard } from "./jwt.guard";
dotenv.config()

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET ,
            signOptions: { expiresIn: '1h' },
          }),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    controllers:[AuthController],
    providers:[
        AuthServise
    ]
})
export class AuthModule{}