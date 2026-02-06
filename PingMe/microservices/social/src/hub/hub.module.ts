import { Module } from '@nestjs/common';
import { HubService } from './hub.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hub } from './entities/hub.entity';
import { Invitation } from './entities/invitation.entity';
import { Member } from './entities/member.entity';
import { JoinRequest } from './entities/joinRequest.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Hub,
      Invitation,
      Member,
      JoinRequest
    ])
  ],
  providers: [HubService]
})
export class HubModule {}
