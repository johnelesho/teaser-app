import {
  BadRequestException,
  ClassSerializerInterceptor,
  Injectable,
  UseInterceptors,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { hashPassword } from 'src/config/passwordConfig';
import { ErrorResponse } from '../response';
import { LearnerDto } from './dto/create-learner.dto';
import { UpdateLearnerDto } from './dto/update-learner.dto';
import { Learner } from './entities/learner.entity';

@Injectable()
export class LearnerService {
  constructor(
    @InjectModel(Learner)
    private learnerModel: typeof Learner,
  ) {}

  update(id: number, updateLearnerDto: UpdateLearnerDto) {
    throw new Error('Method not implemented.');
  }

  @UseInterceptors(ClassSerializerInterceptor)
  async create(learnerDto: LearnerDto): Promise<Learner> {
    const hashedPassword = await hashPassword(learnerDto.password);
    learnerDto.password = hashedPassword;

    try {
      let learner = this.learnerModel.build({ ...learnerDto });
      return await learner.save();
    } catch (error: any) {
      let err = null;
      if (error instanceof Object) err = error.errors.map((er) => er.message);

      throw new BadRequestException(
        new ErrorResponse(false, err),
        error.message,
      );
    }
  }

  async findAll(): Promise<Learner[]> {
    return this.learnerModel.findAll();
  }

  findOneByEmail(email: string): Promise<Learner> {
    return this.learnerModel.findOne({
      where: {
        email,
      },
    });
  }
  findOneByPassword(password: string): Promise<Learner> {
    return this.learnerModel.findOne({
      where: {
        password,
      },
    });
  }
  findOne(id: number): Promise<Learner> {
    return this.learnerModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    const learner = await this.findOne(id);
    await learner.destroy();
  }
}
