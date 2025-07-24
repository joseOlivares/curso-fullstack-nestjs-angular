import { Controller, Get, Post, Body } from '@nestjs/common';
import { GreetingsCliService } from './greetings-cli.service';

@Controller('greetings-cli') // http://localhost:3000/greetings-cli
export class GreetingsCliController {
  //inyectamos el servicio
  constructor(private greetingsService: GreetingsCliService) {}
  @Get()
  getGretting(): string {
    return this.greetingsService.sayHello();
  }

  @Post()
  postGretting(@Body() body: { name: string }): string {
    return this.greetingsService.sayHelloWithName(body.name);
  }

  //con multiples parámetros en el body
  @Post('/full-name') // http://localhost:3000/greetings-cli/full-name
  postGretting2(@Body() body: { name: string; sureName?: string }): string {
    return this.greetingsService.sayHelloWithFullName(body.name, body.sureName);
  }
}
