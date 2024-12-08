import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

/**
 *
 */
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  /**
   *
   * @param createProductDto
   */
  @Post('create')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  /**
   *
   */
  @Get('getAll')
  findAll() {
    return this.productService.findAll();
  }

  /**
   *
   * @param id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  /**
   *
   * @param id
   * @param updateProductDto
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  /**
   *
   * @param id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  /**
   *
   */
  @Get('status')
  getStatus() {
    return this.productService.getProductStatus();
  }
}
