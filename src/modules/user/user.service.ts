import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserType } from './entities/user-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>,
  ) {} 

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.save(createUserDto);
    return user.id;
  }

  findAll() {
    return this.userRepository.find({
      relations: ['usertype'],
    });
  }

  findOne(id: number) {
    return this.userRepository.find ({
      where: {id}
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const response = await this.userRepository.update(id , updateUserDto)
    return response.affected > 0;
  }

  async remove(id: number) {
    const response = await this.userRepository.delete(id)
    return response.affected > 0;
  }

  getUserTypes () {
    return this.userTypeRepository.find({
      relations: ['user']
    })
  }
}
