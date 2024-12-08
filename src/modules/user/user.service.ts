import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserType } from './entities/user-type.entity';
import { User } from './entities/user.entity';

/**
 *
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>
  ) {}

  /**
   *
   * @param createUserDto
   */
  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  /**
   *
   * @param email
   */
  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  //findAll() {
  //  return this.userRepository.find({
  //    relations: {
  //      userType: true
  //    },
  //  });
  //}

  //findOne(id: number) {
  //  return this.userRepository.find ({
  //    where: {id}
  //  });
  //}

  /**
   *
   * @param id
   * @param updateUserDto
   */
  async update(id: number, updateUserDto: UpdateUserDto) {
    const response = await this.userRepository.update(id, updateUserDto);
    return response.affected > 0;
  }

  /**
   *
   * @param id
   */
  async remove(id: number) {
    const response = await this.userRepository.delete(id);
    return response.affected > 0;
  }

  /**
   *
   */
  getUserTypes() {
    return this.userTypeRepository.find({
      relations: ['user']
    });
  }
}
