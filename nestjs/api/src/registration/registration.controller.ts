import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationDto } from '../dto/registration.dto';
import { GenericResponse } from './../interfaces/genericResponse.interface';

@Controller()
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Get()
  getHello(): string {
    return this.registrationService.getHello();
  }

  @Post()
  submitRegistration(@Body() registrationDto: RegistrationDto): GenericResponse {
    return this.registrationService.submitRegistration(registrationDto);
  }
}
