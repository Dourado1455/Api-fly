import { Test, TestingModule } from '@nestjs/testing';
import { VoosService } from './voos.service';

describe('VoosService', () => {
  let service: VoosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoosService],
    }).compile();

    service = module.get<VoosService>(VoosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
