import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { StatusEnum } from "../const/const";

@Entity()
export class Invitation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hubId: number;

    @Column()
    inviterId: number;

    @Column()
    inviteeId: number;

    @Column({
        type: 'enum',
        enum: StatusEnum
    })
    status: StatusEnum;

    @CreateDateColumn()
    createdAt: Date;
};