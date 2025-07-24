import { Module } from '@nestjs/common';
import { GreetingsController } from './greeting.controller';
import { GreetingsService } from './greetings.service';

@Module({
  controllers: [GreetingsController],
  providers: [GreetingsService],
  exports: [],
})
export class GreetingsModule {}
