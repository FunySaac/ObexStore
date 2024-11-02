import { CommonEntity } from "src/common/common.entity";
import { Order } from "src/modules/order/entities/order.entity";
import { Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { UserType } from "./user-type.entity";

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

    @ManyToOne(() => UserType, (usertype) => usertype.users)
    @JoinColumn({ referencedColumnName: 'id', name: 'usertype' })
    usertype: UserType;

    @OneToMany(() => Order, (order) => order.user)
    @JoinColumn({ referencedColumnName: 'id' , name: 'user' })
    userId: User[]
}
