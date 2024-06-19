//importing 
import mongoose from 'mongoose';
import { patientSchema } from "./patients.schema.js";
import { ApplicationError } from '../../error-handler/applicationError.js';
import {reportSchema} from '../reports/report.schema.js';

//creating model from schema
const PatientModel = mongoose.model('Patient',patientSchema);
const ReportModel = mongoose.model('Report',reportSchema)


export default class PatientRepository{

    async register(patientDetails,phoneNumber){
        try{
            // create instance of model.
            const patient = await PatientModel.findOne({phoneNumber})
            if(!patient){
            const newPatient = new PatientModel(patientDetails);
            await newPatient.save();
            return newPatient;
            }
            else{
                return patient
            }
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }

    async createReport(reportDetails,patient){

        try{

            const user = await PatientModel.findById(patient) 
            // create instance of model.
            const newReport = new ReportModel(reportDetails);
            await newReport.save();
            user.reports.push(newReport)
            return newReport;
            
            }
            
        catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }

    async listAllReports(patient){

        try{

            const reports = await ReportModel.find({patient:patient}).populate('createdByDoctor').sort('date')

        const reportData = reports.map(report => {
            const originalDate = report.date;
            const dateObj = new Date(originalDate);

            const formattedDate = dateObj.toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            });

            return {
              createdByDoctor: report.createdByDoctor.userName,
              status: report.status,
              date: formattedDate
            };
          });

        return reportData  
            }
            
        catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }
}