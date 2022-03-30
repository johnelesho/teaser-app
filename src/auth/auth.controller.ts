import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from 'src/public.decorator';
import { SignInResponse, SignUpResponse } from 'src/response';
import { LearnerDto } from '../learner/dto/create-learner.dto';
import { LearnerService } from '../learner/learner.service';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/create-auth.dto';

@Public()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly learnerService: LearnerService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  async create(@Body() signupDto: LearnerDto) {
    await this.learnerService.create(signupDto);
    return new SignUpResponse(true, 'learner created successfully');
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async login(@Body() signinDto: SignInDto) {
    const token = await this.authService.signIn(signinDto);
    return new SignInResponse(true, ' login successful', token);
  }
}
