import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CustomResponse } from '../response';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(
    @Body() createLessonDto: CreateLessonDto,
  ): Promise<CustomResponse> {
    const data = await this.lessonService.create(createLessonDto);
    return new CustomResponse(true, 'Success', data);
  }

  @Get()
  async findAll(): Promise<CustomResponse> {
    const data = await this.lessonService.findAll();
    return new CustomResponse(true, 'Success', data);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CustomResponse> {
    const data = await this.lessonService.findOne(id);
    return new CustomResponse(true, 'Success', data);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateLessonDto: UpdateLessonDto,
  ): Promise<CustomResponse> {
    const data = await this.lessonService.update(id, updateLessonDto);
    return new CustomResponse(true, 'Success', data);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.lessonService.remove(id);
  }
}
