import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}

  async login(credential: AuthDto) {
    const payload = {
      sub: "123",
      username: credential.username,
      role: "user"
    };

    const token = this.jwtService.sign(payload);
    return token;
  }

  async validateToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      return {
        valid: true,
        userId: decoded.sub,
        role: decoded.role
      }
    }
    catch (e) {
      return {
        valid: false,
        userId: null,
        role: null
      }
    }
  }
}
