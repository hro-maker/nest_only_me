import { Body, Controller, Get, Post, UseGuards, UsePipes } from "@nestjs/common";
import { UserDto } from "src/Dtos/userdto";
import { AuthServise } from "./auth.servise";
import { JwtGuard } from './jwt.guard';
import { UserValidation } from "./pipe.valitadion";


@Controller()
export class AuthController{
    constructor(private authservise:AuthServise){}
    @Post('/register')
    register(@Body()dto:UserDto){
            return this.authservise.register(dto)
    }
    @Post('/login')
    login(@Body()dto:UserDto){
            return this.authservise.login(dto)
    }
    @Get()
    @UseGuards(JwtGuard)
    hello(){
        return "hello"
    }
}