import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Block } from './entities/block.entity';
import { Friend } from './entities/friend.entity';
import { Profile } from './entities/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User, 
      Block, 
      Friend, 
      Profile
    ]),
  ],
  providers: [UserService]
})
export class UserModule {}
