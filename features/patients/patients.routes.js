// 1. Import express.
import express from 'express';
import PatientController from './patients.controller.js'

// 2. Initialize Express router.
const patientRouter = express.Router();

const patientController = new PatientController();

// All the paths to controller methods.

patientRouter.post('/register', (req, res)=>{
    patientController.register(req, res)
});

patientRouter.post('/:id/create_report', (req, res)=>{
    patientController.createReport(req, res)
});

patientRouter.get('/:id/all_reports', (req, res)=>{
    patientController.listAllReports(req, res)
});







export default patientRouter;