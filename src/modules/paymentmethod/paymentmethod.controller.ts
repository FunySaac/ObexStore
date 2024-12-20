import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { CreatePaymentmethodDto } from './dto/create-paymentmethod.dto';
import { UpdatePaymentmethodDto } from './dto/update-paymentmethod.dto';
import { PaymentmethodService } from './paymentmethod.service';

/**
 *
 */
@Controller('paymentmethod')
export class PaymentmethodController {
  constructor(private readonly paymentmethodService: PaymentmethodService) {}

  /**
   *
   * @param createPaymentmethodDto
   */
  @Post('create')
  create(@Body() createPaymentmethodDto: CreatePaymentmethodDto) {
    return this.paymentmethodService.create(createPaymentmethodDto);
  }

  /**
   *
   */
  @Get('getAll')
  findAll() {
    return this.paymentmethodService.findAll();
  }

  /**
   *
   * @param id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentmethodService.findOne(+id);
  }

  /**
   *
   * @param id
   * @param updatePaymentmethodDto
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentmethodDto: UpdatePaymentmethodDto
  ) {
    return this.paymentmethodService.update(+id, updatePaymentmethodDto);
  }

  /**
   *
   * @param id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentmethodService.remove(+id);
  }
}
