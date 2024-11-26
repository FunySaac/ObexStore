import { CommonEntity } from "src/common/common.entity";
import { Category } from "src/modules/category/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { ProductStatus } from "./product-status.entity";

@Entity()
export class Product extends CommonEntity {
    @Column()
    name: string;
  
    @Column()
    description: string;
  
    @Column()
    price: number;
  
    @ManyToOne(() => ProductStatus, (productstatus) => productstatus.productStatusId)
    @JoinColumn({ referencedColumnName: 'id', name: 'productStatusId' })
    productstatus: ProductStatus;
  
    @OneToMany(() => Category, (category) => category.product)
    @JoinColumn({ referencedColumnName: 'id' , name: 'product' })
    categoryId: Category[];
}
             