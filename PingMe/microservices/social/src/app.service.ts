import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Repository } from 'typeorm';
import { Block } from './user/entities/block.entity';
import { Friend } from './user/entities/friend.entity';
import { Profile } from './user/entities/profile.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Block) private userBlockRepository: Repository<Block>,
    @InjectRepository(Friend) private friendRepository: Repository<Friend>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>
  ) {}

  async getUserProfile(userId: number) {
    const userProfile = await this.profileRepository.findOne({
      where: { userId: userId }
    });

    if (!userProfile) throw new NotFoundException();
    if (userProfile.isPrivate) return 
    return userProfile;
  }
}
