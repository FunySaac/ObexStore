import { CommonEntity } from "src/common/common.entity";
import { Product } from "src/modules/product/entities/product.entity";
import { Column, JoinColumn, ManyToOne } from "typeorm";

export class Category extends CommonEntity {
    @Column()
    name: string;

    @Column()
    description: Text;

    @ManyToOne(() => Product, (pruduct) => pruduct.categoryId)
    @JoinColumn({ referencedColumnName: 'id' , name: 'product' })
    product: Product;
}
