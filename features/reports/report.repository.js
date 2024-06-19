//importing 
import mongoose from 'mongoose';
import { reportSchema } from "./report.schema.js";
import { ApplicationError } from '../../error-handler/applicationError.js';

//creating model from schema
const ReportModel = mongoose.model('Report',reportSchema);

export default class ReportRepository{

    async filterByStatus(status){
        try{
            // create instance of model.
            const reports = await ReportModel.find({status:status})
            
            return reports;
               
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }
}
