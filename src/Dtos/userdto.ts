import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UserDto{

    @IsNotEmpty({message:"name is required"})
    @IsString({message:"name must be string"})
    @Length(4,16,{message:"name must be long then 4 and less then 16"})
    readonly name:string;
    @IsNotEmpty({message:"email is required"})
    @IsEmail({},{message:"plesae write correct email"})
    readonly email:string;
    @IsNotEmpty({message:"password is required"})
    @IsString({message:"password must be string"})
    @Length(4,16,{message:"password must be long then 4 and less then 16"})
            password:string;
}

