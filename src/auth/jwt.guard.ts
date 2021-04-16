import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtGuard implements CanActivate{
    constructor(private Jwtservice:JwtService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req=context.switchToHttp().getRequest()
           const   eclude= async()=>{
               try {
                if(!req.headers.authorization ){
                    throw new UnauthorizedException("you must login")
             }
             const tokenn=req.headers.authorization.split(" ")[1]
                    const token=await this.Jwtservice.verify(tokenn)
                    req.userId=token.id
                    return true
               } catch (error) {
                   throw new HttpException(error.message,HttpStatus.BAD_REQUEST)
               }
            }
            return eclude()
    }
    
}