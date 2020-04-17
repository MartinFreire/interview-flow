import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class LocationService {

  async getLocation( ): Promise<any> {
    const resp = await axios.get('http://ip-api.com/json');
    return resp.data;
  }

}
