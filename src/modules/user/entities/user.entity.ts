import { CommonEntity } from 'src/common/common.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { UserType } from './user-type.entity';

/**
 *
 */
@Entity()
export class User extends CommonEntity {
  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  postalCode: string;

  @Column({ nullable: true })
  birthday: Date | null;

  @Column({ nullable: false })
  phone: string;

  @ManyToOne(() => UserType, (usertype) => usertype.users)
  @JoinColumn({ name: 'userTypeId' })
  userType: UserType;

  @Column({ default: 2 })
  userTypeId: number;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
