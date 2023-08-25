import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class AuthDto {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @Length(3, 20, {
    message: 'Password has to be at between 3 and 20 characters',
  })
  public password: string;
}
