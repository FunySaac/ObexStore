import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor (
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryRepository.save(createCategoryDto);
    return category.id;
  }

  findAll() {
    return this.categoryRepository.find ({
      relations: {
        products: true
      },
    });
  }

  findOne(id: number) {
    return this.categoryRepository.find ({
      where: { id },
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const responseUpdate = await this.categoryRepository.update(id , updateCategoryDto)
    return responseUpdate.affected > 0;
  }

  async remove(id: number) {
    const response = await this.categoryRepository.delete(id);
    return response.affected > 0;
  }
}
