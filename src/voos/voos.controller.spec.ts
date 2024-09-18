import { Test, TestingModule } from '@nestjs/testing';
import { VoosController } from './voos.controller';

describe('VoosController', () => {
  let controller: VoosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoosController],
    }).compile();

    controller = module.get<VoosController>(VoosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
