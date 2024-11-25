import { CommonEntity } from "src/common/common.entity";
import { Product } from "src/modules/product/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Category extends CommonEntity {
    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => Product, (pruduct) => pruduct.categoryId)
    @JoinColumn({ referencedColumnName: 'id' , name: 'product' })
    product: Product;
}
