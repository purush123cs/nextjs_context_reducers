import { Injectable } from '@nestjs/common';
import { RegistrationDto } from '../dto/registration.dto';
import { GenericResponse } from './../interfaces/genericResponse.interface';

@Injectable()
export class RegistrationService {
  getHello(): string {
    return 'Hello World!';
  }

  submitRegistration(registrationDto: RegistrationDto): GenericResponse {
    console.log(JSON.stringify(registrationDto));
    return {"message":"success"};
  }
}
