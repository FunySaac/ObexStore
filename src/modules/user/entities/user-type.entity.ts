import { CommonEntity } from "src/common/common.entity";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserType extends CommonEntity {
    @Column()
    name: string

    @OneToMany(() => User, (user) => user.usertype)
    @JoinColumn({ referencedColumnName: 'id', name: 'usertype' })
    users: User[];
}