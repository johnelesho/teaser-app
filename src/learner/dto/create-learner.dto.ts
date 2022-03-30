import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Match } from 'src/match.decorator';

export class LearnerDto {
  @IsNotEmpty()
  @IsString()
  childName: string;

  @IsEmail()
  email: string;

  @IsNumber()
  phoneNumber: number;

  @IsNumber()
  countryCode: number;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @Match(LearnerDto, (l) => l.password)
  confirmPassword: string;

  @IsNotEmpty()
  @IsString()
  grade: string;
}
