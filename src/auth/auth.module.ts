import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [PassportModule],
  providers: [AuthService, UsersService, LocalStrategy],
  exports: [UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
