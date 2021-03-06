import * as mongoose from 'mongoose';
import { genderEnum } from '../enums/gender.enum';
import { roleEnum } from '../enums/role.enum';

export const UserSchema = new mongoose.Schema({
  email :{type: String, required: true},
  avatar: {type: String, default:null},
  avatarId:{type:String, default: null},
  firstName:{type:String, required: true},
  lasttName:{type:String, required: true},
  gender:{type:String,required:true, enum: Object.values(genderEnum)},
  address:{
    country:{type:String, default: null},
    city:{type:String, default: null},
    addresLine1:{type:String, default: null},
    addresLine2:{type:String, default: null},
  },
  profession:{type:String, default: null},
  phone:{type:String, default: null},
  role:{type:[String],required:true, enum: Object.values(roleEnum)},
  password:{type:String, required: true}
});

UserSchema.index({email:1},{unique:true})