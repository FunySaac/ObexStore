import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductStatus } from './entities/product-status.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(ProductStatus)
    private productStatusRepository: Repository<ProductStatus>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productRepository.save(createProductDto);
    return product.id;
  }

  findAll() {
    return this.productRepository.find ({
      relations: ['productstatus']
    })
  }

  findOne(id: number) {
    return this.productRepository.find ({
      where: {id}
    })
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const responseUpdateProduct = await this.productRepository.update(id , updateProductDto)
    return responseUpdateProduct.affected > 0;
  }
  
  async remove(id: number) {
    const response = await this.productRepository.delete(id)
    return response.affected > 0;
  }

  getProductStatus() {
    return this.productStatusRepository.find ({
      relations: ['product']
    })
  }
}
