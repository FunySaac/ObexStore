import { CommonEntity } from "src/common/common.entity";
import { Column, JoinColumn, OneToMany } from "typeorm";
import { Order } from "./order.entity";

export class OrderState extends CommonEntity {
    @Column()
    name: string;

    @OneToMany(() => Order, (order) => order.orderState)
    @JoinColumn({ referencedColumnName: 'id' , name: 'orderState' })
    orderStateId: OrderState[]
}