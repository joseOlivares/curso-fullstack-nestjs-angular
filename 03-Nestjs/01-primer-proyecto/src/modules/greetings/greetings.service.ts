import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingsService {
  sayHello(): string {
    return 'This is the Greetings Service saying Hello!';
  }
  sayHelloWithName(name: string): string {
    return `Hello ${name}!`;
  }

  sayHelloWithFullName(name: string, lastName?: string): string {
    return `Hello ${name} ${lastName ?? ''}!`;
  }
}
