import { Category } from "src/modules/category/entities/category.entity";
import { Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { ProductStatus } from "./product-status.entity";
import { CommonEntity } from "src/common/common.entity";

export class Product extends CommonEntity {
    @Column()
    name: string;
  
    @Column()
    description: Text;
  
    @Column()
    price: number;
  
    @ManyToOne(() => ProductStatus, (productstatus) => productstatus.productStatusId)
    @JoinColumn({ referencedColumnName: 'id', name: 'productStatus' })
    productstatus: ProductStatus;
  
    @OneToMany(() => Category, (category) => category.product)
    @JoinColumn({ referencedColumnName: 'id' , name: 'product' })
    categoryId: Category[];
}
             