import { IsBoolean, IsDate } from "class-validator";
import { CreateProfileDto } from "./createProfile.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateProfileDto extends PartialType(CreateProfileDto) {}