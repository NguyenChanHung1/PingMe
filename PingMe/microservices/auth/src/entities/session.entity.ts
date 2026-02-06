import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    sessionId: number;

    @Column({ nullable: false })
    accountId: number;

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    userAgent: string; // for display: Browser+OS+Version

    @Column()
    clientDeviceId: string; // client-generated device id

    @Column()
    revokedAt: Date;
};