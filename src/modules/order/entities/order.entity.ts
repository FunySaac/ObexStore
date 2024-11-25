import { CommonEntity } from "src/common/common.entity";
import { Paymentmethod } from "src/modules/paymentmethod/entities/paymentmethod.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { OrderState } from "./order-state.entity";

@Entity()
export class Order extends CommonEntity {
    @ManyToOne(() => User, (user) => user.orders)
    user: User;
  
    @Column()
    totalPrice: number;
  
    @Column()
    totalProducts: number;

    @ManyToOne(() => OrderState, (orderState) => orderState.orderStateId)
    @JoinColumn({ referencedColumnName: 'id' , name: 'orderState' })
    orderState: OrderState;
  
    @Column()
    address: string;
  
    @OneToMany(() =>Paymentmethod, (paymentMethod) => paymentMethod.order)
    @JoinColumn({ referencedColumnName: 'id' , name: 'order' })
    paymentMethodId: Paymentmethod[];

    @Column()
    shippingDate: Date;
}
