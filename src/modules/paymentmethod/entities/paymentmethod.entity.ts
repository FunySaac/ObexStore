import { CommonEntity } from 'src/common/common.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { Column, Entity, OneToMany } from 'typeorm';

/**
 *
 */
@Entity()
export class Paymentmethod extends CommonEntity {
  @Column()
  name: string;

  @OneToMany(() => Order, (order) => order.paymentmethod)
  orders: Order[];
}
