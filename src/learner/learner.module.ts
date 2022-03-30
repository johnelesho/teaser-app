import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Learner } from './entities/learner.entity';
import { LearnerController } from './learner.controller';
import { LearnerService } from './learner.service';

@Module({
  imports: [SequelizeModule.forFeature([Learner])],
  controllers: [LearnerController],
  providers: [LearnerService],
  exports: [LearnerService],
})
export class LearnerModule {}
