import { RegistrationService } from './registration.service';
import { RegistrationDto } from '../dto/registration.dto';
import { GenericResponse } from './../interfaces/genericResponse.interface';
export declare class RegistrationController {
    private readonly registrationService;
    constructor(registrationService: RegistrationService);
    getHello(): string;
    submitRegistration(registrationDto: RegistrationDto): GenericResponse;
}
