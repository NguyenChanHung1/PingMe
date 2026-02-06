import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    isPrivate: boolean;

    @Column()
    isFriendListPrivate: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @OneToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;
};