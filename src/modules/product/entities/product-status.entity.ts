import { CommonEntity } from "src/common/common.entity";
import { Column, JoinColumn, OneToMany } from "typeorm";
import { Product } from "./product.entity";

export class ProductEstatus extends CommonEntity {
    @Column()
    name: string;

    @OneToMany(() => Product, (product) => product.productstatus)
    @JoinColumn({ referencedColumnName: 'id', name: 'productStatus' })
    productStatusId: ProductEstatus[];
}