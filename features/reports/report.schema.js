import mongoose from "mongoose";

export const reportSchema = new mongoose.Schema({
    createdByDoctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
    status: {
      type:String,
      require:true,
      enum:[
        'Negative', 
        'Travelled-Quarantine', 
        'Symptoms-Quarantine',
        'Positive-Admit'
      ]
    },
    date:{
      type: Date,
      required: true,
    }
  }, {
    timestamps: true
  }
  )
  