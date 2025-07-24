import { Test, TestingModule } from '@nestjs/testing';
import { GreetingsCliService } from './greetings-cli.service';

describe('GreetingsCliService', () => {
  let service: GreetingsCliService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GreetingsCliService],
    }).compile();

    service = module.get<GreetingsCliService>(GreetingsCliService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
