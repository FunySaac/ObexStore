import { Module } from '@nestjs/common';
import { PaymentmethodService } from './paymentmethod.service';
import { PaymentmethodController } from './paymentmethod.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paymentmethod } from './entities/paymentmethod.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paymentmethod])],
  controllers: [PaymentmethodController],
  providers: [PaymentmethodService],
})
export class PaymentmethodModule {}
