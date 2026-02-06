import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserBlock } from './entities/user-block.entity';
import { Friend } from './entities/friend.entity';
import { Profile } from './entities/profile.entity';
export declare class AppService {
    private userRepository;
    private userBlockRepository;
    private friendRepository;
    private profileRepository;
    constructor(userRepository: Repository<User>, userBlockRepository: Repository<UserBlock>, friendRepository: Repository<Friend>, profileRepository: Repository<Profile>);
    getUserProfile(userId: number): Promise<Profile | undefined>;
}
