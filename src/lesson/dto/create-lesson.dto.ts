import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsDateString({ strict: true }, { message: 'Expected format YYYY-MM-DD' })
  startdate: string;
  @IsNumber()
  duration: number;
}
