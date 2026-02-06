import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { UpdateProfileDto } from './dto/updateProfile.dto';
import { Block } from './entities/block.entity';
import { Friend } from './entities/friend.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
        @InjectRepository(Friend) private readonly friendRepository: Repository<Friend>,
        @InjectRepository(Block) private readonly blockRepository: Repository<Block>
    ) {}

    async getUserProfile(myId: number, userId: number) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
            relations: { profile: true }
        });

        
        if (!user || !user.profile) {
            throw new NotFoundException('User or Profile not found');
        }
        
        if (user.profile.isPrivate && myId !== userId) {
            return {
                isPrivate: true,
                isFriendListInvisible: true,
                userId: user.id,
                displayName: user.displayName,
                tagName: user.tagName
            };
        }
        
        if (user.profile.isFriendListPrivate && myId !== userId) {
            return {
                isPrivate: false,
                isFriendListInvisible: true,
                user
            };
        }
        
        const friends = await this.friendRepository.find({
            where: { userId: userId },
            relations: { friend: true },
            select: {
                friend: {
                    id: true, 
                    displayName: true,
                    tagName: true
                }
            }
        });

        return {
            isPrivate: false,
            isFriendListInvisible: false,
            user,
            friends
        };
    }

    async setProfileVisibility(userId: number, dto: UpdateProfileDto) {
        const profile = await this.profileRepository.findOne({ where: { userId: userId } });
        if (!profile) {
            throw new NotFoundException('Profile not found');
        }
        return await this.profileRepository.update({ userId: userId }, dto);
    }

    async searchForUsers(term: string) {
        const q = term.trim();

        return await this.userRepository.createQueryBuilder('User')
            .where('User.tagName ILIKE :q', { q: `%${q}%` })
            .orWhere('User.displayName ILIKE :q', { q: `%${q}%` })
            .limit(20)
            .getMany();
    }

    async getBlockList(userId: number) {
        const blockList = await this.blockRepository.find({
            where: { blockerId: userId },
            select: { blockedId: true }
        });
        return blockList.map(r => r.blockedId);
    }
}
