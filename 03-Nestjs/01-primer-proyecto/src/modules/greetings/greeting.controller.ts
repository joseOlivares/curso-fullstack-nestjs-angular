import { Controller, Get, Post, Body } from '@nestjs/common';
import { GreetingsService } from './greetings.service';

@Controller('greetings')
export class GreetingsController {
  //inyectamos el servicio
  constructor(private greetingsService: GreetingsService) {}
  @Get()
  getGretting(): string {
    return this.greetingsService.sayHello();
  }

  @Post()
  postGretting(@Body() body: { name: string }): string {
    return this.greetingsService.sayHelloWithName(body.name);
  }

  //con multiples parámetros en el body
  @Post('/full-name') // http://localhost:3000/greetings/full-name
  postGretting2(@Body() body: { name: string; sureName?: string }): string {
    return this.greetingsService.sayHelloWithFullName(body.name, body.sureName);
  }
}
