import { Injectable } from '@nestjs/common';
import { CreatePaymentmethodDto } from './dto/create-paymentmethod.dto';
import { UpdatePaymentmethodDto } from './dto/update-paymentmethod.dto';

@Injectable()
export class PaymentmethodService {
  create(createPaymentmethodDto: CreatePaymentmethodDto) {
    return 'This action adds a new paymentmethod';
  }

  findAll() {
    return `This action returns all paymentmethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentmethod`;
  }

  update(id: number, updatePaymentmethodDto: UpdatePaymentmethodDto) {
    return `This action updates a #${id} paymentmethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentmethod`;
  }
}
