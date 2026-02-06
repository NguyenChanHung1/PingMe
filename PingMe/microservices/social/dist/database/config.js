"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPGConfig = void 0;
const friend_entity_1 = require("../entities/friend.entity");
const profile_entity_1 = require("../entities/profile.entity");
const user_block_entity_1 = require("../entities/user-block.entity");
const user_entity_1 = require("../entities/user.entity");
exports.userPGConfig = {
    type: "postgres",
    username: "pguser",
    password: "pguser",
    database: "user-db",
    host: "user-db",
    port: 5432,
    entities: [friend_entity_1.Friend, user_entity_1.User, user_block_entity_1.UserBlock, profile_entity_1.Profile],
    synchronize: true
};
//# sourceMappingURL=config.js.map