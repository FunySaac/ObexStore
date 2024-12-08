import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderService } from './order.service';

/**
 *
 */
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  /**
   *
   * @param createOrderDto
   */
  @Post('create')
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  /**
   *
   */
  @Get('getAll')
  findAll() {
    return this.orderService.findAll();
  }

  /**
   *
   * @param id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  /**
   *
   * @param id
   * @param updateOrderDto
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  /**
   *
   * @param id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }

  /**
   *
   */
  @Get('state')
  getState() {
    return this.orderService.getOrderState();
  }
}
