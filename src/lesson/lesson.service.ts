import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ErrorResponse } from 'src/response';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson)
    private lessonModel: typeof Lesson,
  ) {}

  async create(createLessonDto: CreateLessonDto) {
    try {
      return await this.lessonModel.create({ ...createLessonDto });
    } catch (error: any) {
      let err = null;
      if (error instanceof Object) err = error.errors.map((er) => er.message);

      throw new BadRequestException(
        new ErrorResponse(false, err),
        error.message,
      );
    }
  }

  findAll() {
    return this.lessonModel.findAll();
  }

  async findOne(id: number) {
    const lesson = await this.lessonModel.findOne({
      where: {
        id,
      },
    });
    if (!lesson) {
      throw new NotFoundException(new ErrorResponse(false, 'Record Not Found'));
    }
    return lesson;
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    const lesson = await this.findOne(id);
    Object.assign(lesson, updateLessonDto);
    return lesson.save();
  }

  async remove(id: number) {
    const lesson = await this.findOne(id);
    lesson.destroy();
    return true;
  }
}
