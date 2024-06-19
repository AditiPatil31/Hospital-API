import DoctorsModel from './doctors.model.js';
import jwt from 'jsonwebtoken';
import DoctorsRepository from './doctors.repository.js';
import bcrypt from 'bcrypt';

export default class DoctorsController {

  constructor(){
    this.doctorsRepository = new DoctorsRepository();
  }

  async register(req, res) {
    const {
      userName,
      password,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12)
    const doctor = new DoctorsModel(
      userName,
      hashedPassword,
    );
    await this.doctorsRepository.register(doctor);
    res.status(201).send(doctor);
  }

  async login(req, res, next) {
    try{
      // 1. Find user by email.
    const doctor = await this.doctorsRepository.login(req.body.userName);
    if(!doctor){
      return res
        .status(400)
        .send('Incorrect Credentials');
    }else{
      // 2. Compare password with hashed password.
      const result = await bcrypt.compare(req.body.password, doctor.password);
      if(result){
 // 3. Create token.
 const token = jwt.sign(
  {
    doctorID: doctor._id,
    userName: doctor.userName,
  },
  'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
  {
    expiresIn: '1h',
  }
);
// 4. Send token.
return res.status(200).send(token);
      }else{
        return res
        .status(400)
        .send('Incorrect Credentials');
      }
    }
    }catch(err){
      console.log(err);
      return res.status(200).send("Something went wrong");
    }
  }

}