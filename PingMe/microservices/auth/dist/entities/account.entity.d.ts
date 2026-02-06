import { CredentialType } from "src/enum/credentialType.enum";
export declare class Account {
    accountId: number;
    credentialType: CredentialType;
    email: string;
    passwordHash: string;
    verified: boolean;
    disable: boolean;
}
