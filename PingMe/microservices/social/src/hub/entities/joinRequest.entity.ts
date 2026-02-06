import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { StatusEnum } from "../const/const";

@Entity()
export class JoinRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hubId: number;

    @Column()
    requesterId: number;

    @Column({
        type: 'enum',
        enum: StatusEnum
    })
    status: StatusEnum;

    @CreateDateColumn()
    createdAt: Date;
};