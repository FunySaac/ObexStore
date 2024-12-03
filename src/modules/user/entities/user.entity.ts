import { CommonEntity } from "src/common/common.entity";
import { Order } from "src/modules/order/entities/order.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { UserType } from "./user-type.entity";

@Entity()
export class User extends CommonEntity {

    @Column()
    name: string

    @Column()
    lastName: string

    @Column({ unique: true})
    email: string

    @Column({nullable: false})
    password: string

    @Column()
    address: string 

    @Column({ nullable: true })
    birthday: Date | null

    @Column({nullable: false})
    phone: Number

    @ManyToOne(() => UserType, (usertype) => usertype.users)
    @JoinColumn({ name: 'userTypeId' })
    userType: UserType;

    @Column()
    userTypeId: number;

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]
}
