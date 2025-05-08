import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreateRequest{

  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  name: string;
}