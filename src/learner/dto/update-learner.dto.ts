import { PartialType } from '@nestjs/mapped-types';
import { LearnerDto } from './create-learner.dto';

export class UpdateLearnerDto extends PartialType(LearnerDto) {}
