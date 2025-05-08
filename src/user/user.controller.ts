import { Body, Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { request } from 'express';
import { UserCreateRequest } from './user.dto';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getUser(){
    return "122";
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  createUser(@Body() createUserDto :UserCreateRequest){
    return "122";
  }

}
