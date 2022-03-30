import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/config/passwordConfig';
import { Learner } from 'src/learner/entities/learner.entity';
import { LearnerService } from 'src/learner/learner.service';
import { ErrorResponse } from 'src/response';
import { SignInDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly learnerService: LearnerService,
  ) {}

  async validateLearner(password: string, email: string): Promise<Learner> {
    const learner = await this.learnerService.findOneByEmail(email);
    if (learner) {
      const isPasswordMatch = comparePassword(password, learner.password);
      if (isPasswordMatch) {
        const { password, ...result } = learner;
        return learner;
      }
      throw new BadRequestException(
        new ErrorResponse(false, 'Record not Found'),
      );
    } else {
      throw new NotFoundException(new ErrorResponse(false, 'Record not Found'));
    }
  }
  // const learner = await this.learnerService.findOneByPassword(password);
  // const hashedPassword = await hashPassword(password);
  // const learner = this.learnerService.findOneByPassword(hashedPassword);

  async signIn(signInPayload: SignInDto) {
    const learner = await this.validateLearner(
      signInPayload.password,
      signInPayload.email,
    );
    // const learner = await this.validateLearner(
    //   signInPayload.password,
    //   signInPayload.confirmPassword,
    // );

    const payload = {
      username: learner.email,
      sub: learner.id,
    };
    return this.jwtService.sign(payload);
  }
}
