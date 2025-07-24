import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('greetings')
export class GreetingsController {
  constructor() {}
  @Get()
  getGretting(): string {
    return 'Hello this is the Greetings Controller!';
  }

  @Post()
  postGretting(@Body() body: { name: string }): string {
    return `Hello ${body.name}!`;
  }

  //con multiples parámetros en el body
  // @Post()
  // postGretting2(@Body() body: { name: string; sureName?: string }): string {
  //   return `Hello ${body.name} ${body.sureName ?? ''}!`;
  // }
}
