import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";


@Injectable()
export class UserValidation implements PipeTransform<any>{
   async transform(value: any, {metatype}: ArgumentMetadata) {
        const object = plainToClass(metatype, value);
            const errors =await validate(object)
           if(errors.length){
               const message=errors.map(el=>{
                   return `${el.property}-${Object.values(el.constraints).join(", ")}`
               })
               throw new HttpException(message,HttpStatus.BAD_REQUEST)
           }
            return value
    }
}