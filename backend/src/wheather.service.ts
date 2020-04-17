import { Injectable } from '@nestjs/common';
import axios from "axios";

// TODO: Use encripted secret
const TOKEN = 'a091fa5f3d27937d2bd8df4c59f4c4b3';
const API_URL = 'http://api.openweathermap.org/data/2.5';

@Injectable()
export class WheatherService {

  async getCurrent( city: string ): Promise<any> {
    const resp = await axios.get(`${API_URL}/weather?q=${city}&appid=${TOKEN}&units=metric`);
    return resp.data;
  }

  async getForecast( city: string ): Promise<any> {
    const resp = await axios.get(`${API_URL}/forecast?q=${city}&appid=${TOKEN}&units=metric`);
    return resp.data;
  }

}
