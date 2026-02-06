import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthDto } from './dto/auth.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern("login")
  async login(@Payload() credential: AuthDto) {
    return await this.appService.login(credential);
  } 

  @MessagePattern("validate-token")
  async validateToken(@Payload() token: string) {
    return this.appService.validateToken(token);
  }
}
