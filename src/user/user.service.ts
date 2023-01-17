import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
    private usersRepository: Repository<User>
  ){}

  async signup(user: User): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);
    const reqBody = {
        nome: user.nome,
        sobrenome: user.sobrenome,
        email: user.email,
        password: hash
    }
    /*const newUser = new this.userModel(reqBody);
    return newUser.save(); */
    return this.usersRepository.save(reqBody); 
  }

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
    //return 'This action adds a new user';
  }

  findAll() {
    return this.usersRepository.find(); 
    //return `This action returns all user`;
  }

  findOne(codigo: number) {
    return this.usersRepository.findOneBy({codigo}); 
    //return `This action returns a #${id} user`;
  }

  update(codigo: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(codigo, updateUserDto);
    //return `This action updates a #${id} user`;
  }

  remove(codigo: number) {
    return this.usersRepository.delete(codigo); 
    //return `This action removes a #${id} user`;
  }
}
