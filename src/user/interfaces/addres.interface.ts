import { Document } from "mongoose";

export interface IAddress extends Document {
  readonly country:string,
  readonly city:string,
  readonly addresLine1:string,
  readonly addresLine2:string
}