import { Test, TestingModule } from '@nestjs/testing';
import { GreetingsCliController } from './greetings-cli.controller';

describe('GreetingsCliController', () => {
  let controller: GreetingsCliController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GreetingsCliController],
    }).compile();

    controller = module.get<GreetingsCliController>(GreetingsCliController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
