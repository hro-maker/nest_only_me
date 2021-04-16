import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./auth.schema";
import { Model } from "mongoose";
import { UserDto } from "src/Dtos/userdto";
import * as bcrypt from "bcrypt"
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthServise{
    constructor(
        @InjectModel(User.name)private Usermodel:Model<UserDocument>,
        private jwtservise:JwtService
        ){}
            async register(dto:UserDto):Promise<UserDto>{
               try {
                    const canditat=await this.Usermodel.findOne({email:dto.email})
                    if(canditat){
                        throw new HttpException("user already registred",HttpStatus.BAD_REQUEST)
                    }
                    const hashPassword=await bcrypt.hash(dto.password,10)
                    dto.password=hashPassword
                    const user=  await this.Usermodel.create(dto)
                    return user
               } catch (error) {
                    throw new HttpException(error.message,HttpStatus.BAD_REQUEST)
               }
            }
            async login(dto:UserDto):Promise<UserDto | Object>{
                try {
                    const user=await this.Usermodel.findOne({email:dto.email})
                            if(!user){
                                throw new HttpException(`user ${dto.email} dont found`,HttpStatus.BAD_REQUEST)
                            }
                      const password =await bcrypt.compare(dto.password,user.password) 
                      if(!password){
                        throw new HttpException(`password is incorrect`,HttpStatus.BAD_REQUEST)
                      }     
                        const token=this.jwtservise.sign({id:user._id})

                    return {user,token}
                } catch (error) {
                    throw new HttpException(error.message,HttpStatus.BAD_REQUEST)
                }
            }
}