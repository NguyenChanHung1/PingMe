import { Friend } from "src/user/entities/friend.entity";
import { Profile } from "src/user/entities/profile.entity";
import { Block } from "src/user/entities/block.entity";
import { User } from "src/user/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";

export const userPGConfig: PostgresConnectionOptions = {
    type: "postgres",
    username: "pgsocial",
    password: "pgsocial",
    database: "social-db",
    host: "social-db",
    port: 5432,
    entities: [Friend, User, Block, Profile],
    synchronize: true
};