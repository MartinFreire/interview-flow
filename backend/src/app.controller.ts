import axios               from 'axios';
import { Controller, Get } from '@nestjs/common';
import { LocationService } from "./location.service";

@Controller()
export class AppController {
  constructor(private location: LocationService) {}

  @Get('')
  getServerRunning(): string {
    return 'OK';
  }

  @Get('location')
  async getLocation(): Promise<any> {
    return this.location.getLocation();
  }

}
