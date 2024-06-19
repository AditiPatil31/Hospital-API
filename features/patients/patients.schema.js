import mongoose from "mongoose";

export const patientSchema = new mongoose.Schema({
    phoneNumber: {type: String, unique: true},
    reports:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reports',
        }
      ]
},
  {
    timestamps: true
  }
)