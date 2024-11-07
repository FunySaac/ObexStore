import { CommonEntity } from "src/common/common.entity";
import { Column, JoinColumn, OneToMany } from "typeorm";
import { Product } from "./product.entity";

export class ProductStatus extends CommonEntity {
    @Column()
    name: string;

    @OneToMany(() => Product, (product) => product.productstatus)
    @JoinColumn({ referencedColumnName: 'id', name: 'productStatus' })
    productStatusId: ProductStatus[];
}