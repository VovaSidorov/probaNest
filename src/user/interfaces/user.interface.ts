import { Document } from 'mongoose';
import { IAddress } from './addres.interface';

export interface IUser extends Document {
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
  readonly  password: string;
}
