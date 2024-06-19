//importing 
import mongoose from 'mongoose';
import { doctorsSchema } from "./doctors.schema.js";
import { ApplicationError } from '../../error-handler/applicationError.js';

//creating model from schema
const DoctorsModel = mongoose.model('Doctor',doctorsSchema);

export default class DoctorsRepository{

    async register(doctor){
        try{
            // create instance of model.
            const newDoctor = new DoctorsModel(doctor);
            await newDoctor.save();
            return newDoctor;
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }

    async login(userName){
        try{
           return await DoctorsModel.findOne({userName});
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }

}