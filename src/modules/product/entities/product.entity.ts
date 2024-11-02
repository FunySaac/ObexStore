import { Category } from "src/modules/category/entities/category.entity";
import { Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { ProductEstatus } from "./product-status.entity";

export class Product {
    @Column()
    name: string;
  
    @Column()
    description: Text;
  
    @Column()
    price: number;
  
    @ManyToOne(() => ProductEstatus, (productstatus) => productstatus.productStatusId)
    @JoinColumn({ referencedColumnName: 'id', name: 'productStatus' })
    productstatus: ProductEstatus;
  
    @OneToMany(() => Category, (category) => category.product)
    @JoinColumn({ referencedColumnName: 'id' , name: 'product' })
    categoryId: Category[];
}
             