import { ActionTokenType } from "src/enum/actionTokenType.enum";
import { Column, Entity } from "typeorm";

@Entity()
export class ActionToken {
    @Column({ nullable: false })
    token: string;

    @Column({ nullable: false })
    accountId: number;

    @Column({
        type: 'enum',
        enum: ActionTokenType
    })
    tokenType: ActionTokenType

    @Column()
    expiresAt: Date;
};