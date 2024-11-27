import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderState } from './entities/order-state.entity';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository (Order)
    private orderRepository: Repository<Order>,
    @InjectRepository (OrderState)
    private orderStateRepository: Repository<OrderState>
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = await this.orderRepository.save(createOrderDto);
    return order.id;
  }

  findAll() {
    return this.orderRepository.find ({
      relations: {
        orderState: true,
      },
    });
  }

  findOne(id: number) {
    return this.orderRepository.find ({
      where: { id },
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const response = await this.orderRepository.update(id, updateOrderDto);
    return response.affected > 0;
  }

  async remove(id: number) {
    const response = await this.orderRepository.delete(id);
    return response.affected > 0;
  }

  getOrderState() {
    return this.orderStateRepository.find ({
      relations: ['order'],
    })
  }
}
