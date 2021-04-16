import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { Graphmodule } from './forgraphql/graph.mosel';
import * as dotenv from 'dotenv'
dotenv.config()
@Module({
    imports:[
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.3l6j1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
        Graphmodule,
        ConfigModule.forRoot({
            envFilePath:'.env'
        })
    ],
  
})
export class AppModule{

}