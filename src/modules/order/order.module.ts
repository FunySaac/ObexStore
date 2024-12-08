import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderState } from './entities/order-state.entity';

/**
 *
 */
@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderState])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
