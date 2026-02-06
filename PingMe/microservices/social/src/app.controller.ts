import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern("view-profile")
  getUserProfile(userId: number) {
    return this.appService.getUserProfile(userId);
  }
}
