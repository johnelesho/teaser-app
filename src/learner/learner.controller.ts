import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UpdateLearnerDto } from './dto/update-learner.dto';
import { LearnerService } from './learner.service';

@Controller('learner')
export class LearnerController {
  constructor(private readonly learnerService: LearnerService) {}

  // @HttpCode(HttpStatus.CREATED)
  // @Post()
  // async create(@Body() createLearnerDto: LearnerDto): Promise<SignUpResponse> {
  //   await this.learnerService.create(createLearnerDto);
  //   return new SignUpResponse(true, 'Created');
  // }

  @Get()
  findAll() {
    return this.learnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.learnerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateLearnerDto: UpdateLearnerDto) {
    return this.learnerService.update(id, updateLearnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.learnerService.remove(+id);
  }
}
