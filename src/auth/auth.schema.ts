import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsEmpty, IsString, Length } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  _id: string;
  @Prop({type:String,unique:true})
  email
  @Prop()
  password: string;
  @Prop()
  timestamps: true;
}

export const UserSchema = SchemaFactory.createForClass(User);