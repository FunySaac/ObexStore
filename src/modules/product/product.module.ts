import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductStatus } from './entities/product-status.entity';

/**
 *
 */
@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductStatus])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
