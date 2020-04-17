import axios from 'axios';
import {Controller, Get, Param} from '@nestjs/common';
import {WheatherService} from "./wheather.service";


@Controller('forecast')
export class ForecastController {

  constructor(private readonly service: WheatherService) {}

  @Get('')
  async getForecastDefault(): Promise<any> {
    const respLoc = await axios.get('http://ip-api.com/json');
    if ( respLoc.data.city ) {
      const { city, countryCode } = respLoc.data;
      const wheather = await this.service.getForecast(`${city},${countryCode}`);
      return wheather;
    }
    return respLoc.data;
  }

  @Get(':city')
  async getForecastByCity(@Param('city') city): Promise<any> {
    console.log('city', city);
    return await this.service.getForecast(city);
  }

}
