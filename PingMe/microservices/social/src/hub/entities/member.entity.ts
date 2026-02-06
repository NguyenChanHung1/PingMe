import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { HubMemberRoleEnum } from "../const/const";

@Entity()
export class Member {
    @PrimaryColumn()
    hubId: number;

    @PrimaryColumn()
    userId: number;

    @Column()
    invitedBy: number;

    @Column({
        type: 'enum',
        enum: HubMemberRoleEnum
    })
    role: HubMemberRoleEnum;

    @CreateDateColumn()
    joinedAt: Date;
};