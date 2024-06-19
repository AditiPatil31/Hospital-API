
import ReportRepository from './report.repository.js';

export default class ReportController {

  constructor(){
    this.reportRepository = new ReportRepository();
  }

  async filterByStatus(req, res) {
    const status = req.params.status;
    const reports = await this.reportRepository.filterByStatus(status);
    res.status(200).json({
        message: `List of Reports with status ${req.params.status}`,
        reports: reports
    });
  }
}

