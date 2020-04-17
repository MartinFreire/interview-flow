import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class LocationMockService {

  async getLocation( ): Promise<any> {
    return {
      status: "success",
      country: "Argentina",
      countryCode: "AR",
      region: "B",
      regionName: "Buenos Aires",
      city: "Ejemplo",
      zip: "9999",
      lat: -50,
      lon: -50,
      timezone: "America/Argentina/Buenos_Aires",
      isp: "Telecom Argentina S.A.",
      org: "Telecom Argentina S.A",
      "as": "AS10481 Telecom Argentina S.A.",
      query: "9.9.9.9"
    };
  }

}
