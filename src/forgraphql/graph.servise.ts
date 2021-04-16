import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/auth/auth.schema";
import { User as Userr } from './model';

@Injectable()
export class Graphservise{
    constructor( @InjectModel(User.name)private Usermodel:Model<UserDocument>){}
        async helloworrld():Promise<Userr[]>{
            const users=await this.Usermodel.find()
            return users
        }
        
 async getuserbyId(email):Promise<Userr | null> {
     try {
        
        const user=await this.Usermodel.findOne({email:email})
        console.log(user)
        return user
     } catch (error) {
         console.log(error)
     }
        
  }
}