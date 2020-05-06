import { IAddress } from '../interfaces/addres.interface';

export class CreateUserDto{
  readonly  email: string;
  readonly  avatar: string;
  readonly  avatarId: string;
  readonly  firstName: string;
  readonly  lasttName: string;
  readonly  gender: string;
  readonly  address: IAddress;
  readonly  profession: string;
  readonly  searchField: string;
  readonly  phone: string;
  readonly  role: string;
}