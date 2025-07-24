import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingsModule } from './modules/greetings/greetings.module';
import { GreetingsCliModule } from './modules/greetings-cli/greetings-cli.module';

@Module({
  imports: [GreetingsModule, GreetingsCliModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
