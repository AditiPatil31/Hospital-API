//import necessary modules
import mongoose from 'mongoose';

//schema for doctors

export const doctorsSchema = new mongoose.Schema({
    userName: {type:String,required:true},
    password:{type:String,required:true}
})
