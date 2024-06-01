import { RegistrationDto } from '../dto/registration.dto';
import { GenericResponse } from './../interfaces/genericResponse.interface';
export declare class RegistrationService {
    getHello(): string;
    submitRegistration(registrationDto: RegistrationDto): GenericResponse;
}
