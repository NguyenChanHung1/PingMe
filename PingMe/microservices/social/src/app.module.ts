import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userPGConfig } from './database/config';
import { Block } from './user/entities/block.entity';
import { Friend } from './user/entities/friend.entity';
import { User } from './user/entities/user.entity';
import { Profile } from './user/entities/profile.entity';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { HubController } from './hub/hub.controller';
import { HubModule } from './hub/hub.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(userPGConfig),
    UserModule,
    HubModule
  ],
  controllers: [AppController, UserController, HubController],
  providers: [AppService],
})
export class AppModule {}
