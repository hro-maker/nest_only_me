
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserValidation } from './auth/pipe.valitadion';


async function start(){
    try {
        const PORT= process.env.PORT || 5000;
    const app =await NestFactory.create(AppModule)
    app.useGlobalPipes(new UserValidation())
    await app.listen(PORT,()=>{
        console.log(`server startdet on port ${PORT}`)
    })
    } catch (error) {
        console.log(error)
    }
    
}
start()