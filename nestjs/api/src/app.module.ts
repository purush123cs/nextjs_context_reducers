import { Module } from '@nestjs/common';
import { RegistrationController } from './registration/registration.controller';
import { RegistrationService } from './registration/registration.service';

@Module({
  imports: [],
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class AppModule {}
