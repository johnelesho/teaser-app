import { Test, TestingModule } from '@nestjs/testing';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';

describe('LessonController', () => {
  let controller: LessonController;
  let service: LessonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonController],
      providers: [LessonService],
    }).compile();

    controller = module.get<LessonController>(LessonController);
    service = module.get<LessonService>(LessonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // describe('findOne', () => {
  //   it('should return an instance of the Custom Response Class', async () => {
  //     const result = new CustomResponse();
  //     jest.spyOn(service, 'findAll').mockImplementation(() => result);

  //     expect(await controller.findOne(1)).toBeInstanceOf(CustomResponse);
  //   });
  // });

  // describe('findAll', () => {
  //   it('should return an array of Lesson Model', async () => {
  //     const result = [Lesson];
  //     jest.spyOn(service, 'findAll').mockImplementation(() => result);

  //     expect(await controller.findAll()).toBe(result);
  //   });
  // });
});
