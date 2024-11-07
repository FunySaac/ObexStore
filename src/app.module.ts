import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { PaymentmethodModule } from './modules/paymentmethod/paymentmethod.module';
import { OrderModule } from './modules/order/order.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username:'root',
      password: '',
      database: 'datastore',
      autoLoadEntities: true,
    }),
    UserModule,
    ProductModule,
    PaymentmethodModule,
    OrderModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
