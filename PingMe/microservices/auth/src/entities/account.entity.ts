import { CredentialType } from "src/enum/credentialType.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    accountId: number;

    @Column({
        type: 'enum',
        enum: CredentialType
    })
    credentialType: CredentialType;

    @Column({ unique: true })
    email: string;

    @Column()
    passwordHash: string;

    @Column({ default: false })
    verified: boolean;

    @Column({ default: false })
    disable: boolean;
}