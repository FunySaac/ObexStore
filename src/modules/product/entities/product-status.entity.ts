import { CommonEntity } from 'src/common/common.entity';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { Product } from './product.entity';

/**
 *
 */
@Entity()
export class ProductStatus extends CommonEntity {
  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.productstatus)
  @JoinColumn({ referencedColumnName: 'id', name: 'productStatusId' })
  productStatusId: ProductStatus[];
}
