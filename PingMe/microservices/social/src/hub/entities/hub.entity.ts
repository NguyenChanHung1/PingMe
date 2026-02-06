import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { InvitePolicyEnum } from "../const/const";

@Entity()
export class Hub {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ 
        type: 'text' 
    })
    description: string;

    @Column()
    creatorId: number;

    @Column({
        type: 'text',
        array: true
    })
    categories: string[];

    @Column({ 
        default: false 
    })
    isPrivate: boolean;

    @Column({ 
        default: true 
    })
    isOpen: boolean;

    @Column({
        type: 'enum',
        enum: InvitePolicyEnum
    })
    invitePolicy: InvitePolicyEnum;

    @CreateDateColumn()
    createdAt: Date;
};