// 1. Import express.
import express from 'express';
import ReportController from './report.controller.js'

// 2. Initialize Express router.
const reportRouter = express.Router();

const reportController = new ReportController();

// All the paths to controller methods.

reportRouter.get('/:status', (req, res)=>{
    reportController.filterByStatus(req, res)
});

export default reportRouter;