export default class ReportModel {
    constructor(createdByDoctor,patient,status,date,id) {
      this.createdByDoctor = createdByDoctor;
      this.patient=patient;
      this.status=status;
      this.date=date;
      this._id = id;
    }
    
  }