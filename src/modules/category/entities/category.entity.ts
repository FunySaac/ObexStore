import { CommonEntity } from 'src/common/common.entity';
import { Product } from 'src/modules/product/entities/product.entity';
import { Column, Entity, OneToMany } from 'typeorm';

/**
 *
 */
@Entity()
export class Category extends CommonEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Product, (pruduct) => pruduct.category)
  products: Product[];
}
