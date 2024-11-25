import { CommonEntity } from "src/common/common.entity";
import { Order } from "src/modules/order/entities/order.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Paymentmethod extends CommonEntity {
    @Column()
    name: string;

    @ManyToOne(() => Order, (order) => order.paymentMethodId)
    @JoinColumn({ referencedColumnName: 'id' , name: 'order' })
    order: Order;

}
