import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
    @Field()
  _id: string;
  @Field()
  name: string;
  @Field(type => String, { nullable: true })
  email?: string;
  @Field()
  password: string;
}