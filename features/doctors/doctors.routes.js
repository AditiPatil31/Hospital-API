
// 1. Import express.
import express from 'express';
import DoctorsController from './doctors.controller.js'

// 2. Initialize Express router.
const doctorRouter = express.Router();

const doctorController = new DoctorsController();

// All the paths to controller methods.

doctorRouter.post('/register', (req, res)=>{
    doctorController.register(req, res)
});
doctorRouter.post('/login', (req, res)=>{
    doctorController.login(req, res)
});


export default doctorRouter;
