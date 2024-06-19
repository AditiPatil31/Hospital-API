import PatientModel from './patients.model.js';
import ReportModel from '../reports/report.model.js'
import PatientRepository from './patients.repository.js';


export default class PatientController {

  constructor(){
    this.patientRepository = new PatientRepository();
  }

  async register(req, res) {
    const {phoneNumber} = req.body;
    const patientDetails = new PatientModel(phoneNumber)
    const registerPatient = await this.patientRepository.register(patientDetails,phoneNumber);
    res.status(201).send(registerPatient);
  }

  async createReport(req, res) {
    const patient = req.params.id;
    const createdByDoctor= req.userID;
    const status = req.body.status;
    const date = new Date();
    const reportDetails = new ReportModel(createdByDoctor,patient,status,date);
    const createdReport = await this.patientRepository.createReport(reportDetails,patient);
    res.status(201).send(createdReport);
  }

  async listAllReports(req,res){
    const patient = req.params.id;
    const reports = await this.patientRepository.listAllReports(patient)
    res.status(201).send(reports);
  }

}

