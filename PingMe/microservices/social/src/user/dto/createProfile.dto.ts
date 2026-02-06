import { IsBoolean, IsDate } from "class-validator";

export class CreateProfileDto {
    @IsBoolean()
    isPrivate: boolean;

    @IsBoolean()
    isFriendListPrivate: boolean;

    @IsDate()
    createdAt: Date;
};