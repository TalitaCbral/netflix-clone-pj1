import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  login(@Body() data: LoginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }
}
