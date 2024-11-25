import { CommonEntity } from "src/common/common.entity";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class OrderState extends CommonEntity {
    @Column()
    name: string;

    @OneToMany(() => Order, (order) => order.orderState)
    @JoinColumn({ referencedColumnName: 'id' , name: 'orderState' })
    orderStateId: OrderState[]
}