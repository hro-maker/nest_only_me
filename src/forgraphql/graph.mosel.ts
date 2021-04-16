import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/auth/auth.schema";
import { AuthorsResolver } from "./graph.resolvers";
import { Graphservise } from './graph.servise';

@Module({
    imports:[
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    GraphQLModule.forRoot({
            autoSchemaFile: true,
          })
    ],
    providers:[Graphservise,AuthorsResolver]
})
export class Graphmodule{

}