import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profile } from "./profile.entity";
import { Friend } from "./friend.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    email: string;

    @Column()
    displayName: string;

    @Column()
    tagName: string;

    @Column({ 
        type: 'text' 
    })
    introduction: string;

    @Column({ 
        type: 'smallint' 
    })
    age: number;

    @Column({
        type: 'enum',
        enum: ['Male', 'Female']
    })
    gender: string;

    @Column({ 
        type: 'text', 
        array: true
    })
    preferences: string[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Profile)
    profile: Profile;

    @OneToMany(() => Friend, (friend) => friend.user)
    friends: Friend[];
};
