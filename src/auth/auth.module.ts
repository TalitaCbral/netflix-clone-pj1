import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'kEGfrekjfRRR98TGRu39ERG8ur3k',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [PrismaService, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
