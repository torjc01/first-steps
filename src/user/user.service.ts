import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
    private userRepository: Repository<User>
  ){}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto); 
    //return 'This action adds a new user';
  }

  findAll() {
    return this.userRepository.find(); 
    //return `This action returns all user`;
  }

  findOne(codigo: number) {
    return this.userRepository.findOneBy({codigo});
    // return `This action returns a #${id} user`;
  }

  update(codigo: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(codigo, updateUserDto);
    //return `This action updates a #${id} user`;
  }

  remove(codigo: number) {
    return this.userRepository.delete({codigo});
    //return `This action removes a #${id} user`;
  }
}
