import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentmethodDto } from './dto/create-paymentmethod.dto';
import { UpdatePaymentmethodDto } from './dto/update-paymentmethod.dto';
import { Paymentmethod } from './entities/paymentmethod.entity';

@Injectable()
export class PaymentmethodService {

  constructor (
    @InjectRepository(Paymentmethod)
    private readonly paymentmethodRepository: Repository<Paymentmethod>
  ) {}

  async create(createPaymentmethodDto: CreatePaymentmethodDto) {
    const paymentmethod = await this.paymentmethodRepository.save (createPaymentmethodDto)
    return paymentmethod.id;
  }

  findAll() {
    return this.paymentmethodRepository.find ({
      relations: ['paymentmethod']
    });
  }

  findOne(id: number) {
    return this.paymentmethodRepository.find ({
      where: { id }
    });
  }

  async update(id: number, updatePaymentmethodDto: UpdatePaymentmethodDto) {
    const response = await this.paymentmethodRepository.update (id , updatePaymentmethodDto)
    return response.affected > 0;
  }

  async remove(id: number) {
    const response = await this.paymentmethodRepository.delete (id)
    return response.affected > 0;
  }
}
