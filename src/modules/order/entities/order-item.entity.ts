import { CommonEntity } from "src/common/common.entity";
import { Column } from "typeorm";

export class OrderItem extends CommonEntity {
    @Column()
    orderId: string;

    @Column()
    productId: string;

    @Column()
    productQuantity: number;

    @Column()
    unitPrice: number;

    @Column()
    productTotalPrice: number;
}