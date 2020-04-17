import axios from 'axios';
import {Controller, Get, Param} from '@nestjs/common';
import {WheatherService} from "./wheather.service";


@Controller('current')
export class CurrentController {

  constructor(private readonly service: WheatherService) {}

  @Get('')
  async getCurrentDefault(): Promise<any> {
    const respLoc = await axios.get('http://ip-api.com/json');
    if ( respLoc.data.city ) {
      const { city } = respLoc.data;
      const wheather = await this.service.getCurrent(city);
      return wheather;
    }
    return respLoc.data;
  }

  @Get(':city')
  async getCurrentByCity(@Param('city') city): Promise<any> {
    console.log('city', city);
    return await this.service.getCurrent(city);
  }

}
