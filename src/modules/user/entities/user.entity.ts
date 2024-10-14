import { CommonEntity } from "src/common/common.entity";
import { Column } from "typeorm";

export class User extends CommonEntity {

    @Column()
    name: string

    @Column()
    lastName: string

    @Column({ unique: true})
    email: string

    @Column()
    password: string

    @Column()
    address: string 

    @Column({ nullable: true })
    birthday: Date | null

    @Column()
    phone: Number
}
