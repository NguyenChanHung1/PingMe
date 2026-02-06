import { ActionTokenType } from "src/enum/actionTokenType.enum";
export declare class ActionToken {
    token: string;
    accountId: number;
    tokenType: ActionTokenType;
    expiresAt: Date;
}
