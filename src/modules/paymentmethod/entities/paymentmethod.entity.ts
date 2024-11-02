import { CommonEntity } from "src/common/common.entity";
import { Order } from "src/modules/order/entities/order.entity";
import { Column, JoinColumn, ManyToOne } from "typeorm";

export class Paymentmethod extends CommonEntity {
    @Column()
    name: string;

    @ManyToOne(() => Order, (order) => order.paymentMethodId)
    @JoinColumn({ referencedColumnName: 'id' , name: 'order' })
    order: Order;

}
