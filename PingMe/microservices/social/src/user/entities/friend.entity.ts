import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { FriendStatusEnum } from "../const/const";
import { User } from "./user.entity";

@Entity()
export class Friend {
    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    friendId: number;

    @Column({
        type: 'enum',
        enum: FriendStatusEnum
    })
    status: FriendStatusEnum;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.friends, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'friendId' })
    friend: User;
};