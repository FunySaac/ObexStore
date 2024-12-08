import { CommonEntity } from 'src/common/common.entity';
import { Paymentmethod } from 'src/modules/paymentmethod/entities/paymentmethod.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { OrderState } from './order-state.entity';

/**
 *
 */
@Entity()
export class Order extends CommonEntity {
  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Column()
  totalPrice: number;

  @Column()
  totalProducts: number;

  @Column()
  orderStateId: number;

  @ManyToOne(() => OrderState, (orderState) => orderState.orders)
  orderState: OrderState;

  @Column()
  address: string;

  @ManyToOne(() => Paymentmethod, (paymentmethod) => paymentmethod.orders)
  paymentmethod: Paymentmethod[];

  @Column()
  paymentMethodId: number;

  @Column()
  shippingDate: Date;
}
