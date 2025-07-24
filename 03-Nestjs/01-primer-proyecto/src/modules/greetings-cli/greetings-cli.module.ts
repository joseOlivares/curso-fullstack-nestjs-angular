import { Module } from '@nestjs/common';
import { GreetingsCliController } from './greetings-cli.controller';
import { GreetingsCliService } from './greetings-cli.service';

@Module({
  controllers: [GreetingsCliController],
  providers: [GreetingsCliService]
})
export class GreetingsCliModule {}
