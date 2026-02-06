import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RefreshToken {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    sessionId: number;

    @Column({ nullable: false })
    tokenHash: string;

    @Column()
    expiresAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    revokedAt: Date;

    
};