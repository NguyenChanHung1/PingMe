import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Block {
    @PrimaryColumn()
    blockerId: number;

    @PrimaryColumn()
    blockedId: number;

    @CreateDateColumn()
    createdAt: Date;
};