import { Module } from '@nestjs/common';
import { GreetingsController } from './greeting.controller';

@Module({
  controllers: [GreetingsController],
  providers: [],
  exports: [],
})
export class GreetingsModule {}
