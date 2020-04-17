import { Injectable } from '@nestjs/common';

/*eslint-disable @typescript-eslint/camelcase*/

@Injectable()
export class WheatherMockService {

  async getCurrent( city: string ): Promise<any> {
    return {
      coord: { lon: -58.38, lat: -34.61 },
      weather: [ { id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" } ],
      base: "stations",
      main: {
        temp: 17.47,
        feels_like: 17.04,
        temp_min: 16.67,
        temp_max: 18.33,
        pressure: 1027,
        humidity: 82
      },
      visibility: 10000,
      wind: { speed: 2.6, deg: 20 },
      clouds: { all: 40 },
      dt: 1587128234,
      sys: { type: 1, id: 8224, country: "AR", sunrise: 1587118714, sunset: 1587158816 },
      timezone: -10800,
      id: 3435910,
      name: "Buenos Aires",
      cod: 200
    };
  }

  async getForecast( city: string ): Promise<any> {
    return {
      cod: "200",
      message: 0,
      cnt: 40,
      list: [ {
        dt: 1587135600,
        main: {
          temp: 20.44,
          feels_like: 18.9,
          temp_min: 18.59,
          temp_max: 20.44,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1022,
          humidity: 54,
          temp_kf: 1.85
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 0 },
        wind: { speed: 2.58, deg: 14 },
        sys: { pod: "d" },
        dt_txt: "2020-04-17 15:00:00"
      }, {
        dt: 1587146400,
        main: {
          temp: 21.63,
          feels_like: 20.31,
          temp_min: 20.24,
          temp_max: 21.63,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1020,
          humidity: 44,
          temp_kf: 1.39
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 0 },
        wind: { speed: 1.52, deg: 59 },
        sys: { pod: "d" },
        dt_txt: "2020-04-17 18:00:00"
      }, {
        dt: 1587157200,
        main: {
          temp: 20.3,
          feels_like: 18.29,
          temp_min: 19.38,
          temp_max: 20.3,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1019,
          humidity: 50,
          temp_kf: 0.92
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 0 },
        wind: { speed: 2.76, deg: 70 },
        sys: { pod: "d" },
        dt_txt: "2020-04-17 21:00:00"
      }, {
        dt: 1587168000,
        main: {
          temp: 18.09,
          feels_like: 15.82,
          temp_min: 17.63,
          temp_max: 18.09,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1020,
          humidity: 68,
          temp_kf: 0.46
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01n" } ],
        clouds: { all: 0 },
        wind: { speed: 4.16, deg: 62 },
        sys: { pod: "n" },
        dt_txt: "2020-04-18 00:00:00"
      }, {
        dt: 1587178800,
        main: {
          temp: 17.13,
          feels_like: 15.57,
          temp_min: 17.13,
          temp_max: 17.13,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1020,
          humidity: 73,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01n" } ],
        clouds: { all: 0 },
        wind: { speed: 3.22, deg: 33 },
        sys: { pod: "n" },
        dt_txt: "2020-04-18 03:00:00"
      }, {
        dt: 1587189600,
        main: {
          temp: 16.49,
          feels_like: 14.31,
          temp_min: 16.49,
          temp_max: 16.49,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1019,
          humidity: 71,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01n" } ],
        clouds: { all: 0 },
        wind: { speed: 3.67, deg: 16 },
        sys: { pod: "n" },
        dt_txt: "2020-04-18 06:00:00"
      }, {
        dt: 1587200400,
        main: {
          temp: 15.72,
          feels_like: 13.39,
          temp_min: 15.72,
          temp_max: 15.72,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1019,
          humidity: 75,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01n" } ],
        clouds: { all: 0 },
        wind: { speed: 3.91, deg: 12 },
        sys: { pod: "n" },
        dt_txt: "2020-04-18 09:00:00"
      }, {
        dt: 1587211200,
        main: {
          temp: 16.42,
          feels_like: 13.61,
          temp_min: 16.42,
          temp_max: 16.42,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1020,
          humidity: 72,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 0 },
        wind: { speed: 4.63, deg: 8 },
        sys: { pod: "d" },
        dt_txt: "2020-04-18 12:00:00"
      }, {
        dt: 1587222000,
        main: {
          temp: 20.48,
          feels_like: 18.08,
          temp_min: 20.48,
          temp_max: 20.48,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1019,
          humidity: 58,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 0 },
        wind: { speed: 4.28, deg: 14 },
        sys: { pod: "d" },
        dt_txt: "2020-04-18 15:00:00"
      }, {
        dt: 1587232800,
        main: {
          temp: 22.28,
          feels_like: 20.45,
          temp_min: 22.28,
          temp_max: 22.28,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1016,
          humidity: 52,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 0 },
        wind: { speed: 3.48, deg: 30 },
        sys: { pod: "d" },
        dt_txt: "2020-04-18 18:00:00"
      }, {
        dt: 1587243600,
        main: {
          temp: 21.44,
          feels_like: 19.76,
          temp_min: 21.44,
          temp_max: 21.44,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1015,
          humidity: 56,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 0 },
        wind: { speed: 3.41, deg: 52 },
        sys: { pod: "d" },
        dt_txt: "2020-04-18 21:00:00"
      }, {
        dt: 1587254400,
        main: {
          temp: 19.71,
          feels_like: 17.01,
          temp_min: 19.71,
          temp_max: 19.71,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1015,
          humidity: 67,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01n" } ],
        clouds: { all: 0 },
        wind: { speed: 5.38, deg: 37 },
        sys: { pod: "n" },
        dt_txt: "2020-04-19 00:00:00"
      }, {
        dt: 1587265200,
        main: {
          temp: 18.83,
          feels_like: 15.5,
          temp_min: 18.83,
          temp_max: 18.83,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1015,
          humidity: 66,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01n" } ],
        clouds: { all: 0 },
        wind: { speed: 5.79, deg: 24 },
        sys: { pod: "n" },
        dt_txt: "2020-04-19 03:00:00"
      }, {
        dt: 1587276000,
        main: {
          temp: 18.18,
          feels_like: 14.56,
          temp_min: 18.18,
          temp_max: 18.18,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1014,
          humidity: 61,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01n" } ],
        clouds: { all: 0 },
        wind: { speed: 5.44, deg: 13 },
        sys: { pod: "n" },
        dt_txt: "2020-04-19 06:00:00"
      }, {
        dt: 1587286800,
        main: {
          temp: 17.16,
          feels_like: 13.52,
          temp_min: 17.16,
          temp_max: 17.16,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1014,
          humidity: 65,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01n" } ],
        clouds: { all: 0 },
        wind: { speed: 5.47, deg: 10 },
        sys: { pod: "n" },
        dt_txt: "2020-04-19 09:00:00"
      }, {
        dt: 1587297600,
        main: {
          temp: 17.42,
          feels_like: 14.17,
          temp_min: 17.42,
          temp_max: 17.42,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1014,
          humidity: 66,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 1 },
        wind: { speed: 5.1, deg: 1 },
        sys: { pod: "d" },
        dt_txt: "2020-04-19 12:00:00"
      }, {
        dt: 1587308400,
        main: {
          temp: 21.46,
          feels_like: 19.75,
          temp_min: 21.46,
          temp_max: 21.46,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1014,
          humidity: 56,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 0 },
        wind: { speed: 3.47, deg: 358 },
        sys: { pod: "d" },
        dt_txt: "2020-04-19 15:00:00"
      }, {
        dt: 1587319200,
        main: {
          temp: 23.25,
          feels_like: 22.07,
          temp_min: 23.25,
          temp_max: 23.25,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1011,
          humidity: 51,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 0 },
        wind: { speed: 2.81, deg: 27 },
        sys: { pod: "d" },
        dt_txt: "2020-04-19 18:00:00"
      }, {
        dt: 1587330000,
        main: {
          temp: 22.36,
          feels_like: 21.45,
          temp_min: 22.36,
          temp_max: 22.36,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1011,
          humidity: 55,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 0 },
        wind: { speed: 2.57, deg: 50 },
        sys: { pod: "d" },
        dt_txt: "2020-04-19 21:00:00"
      }, {
        dt: 1587340800,
        main: {
          temp: 20.32,
          feels_like: 18.99,
          temp_min: 20.32,
          temp_max: 20.32,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1011,
          humidity: 65,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01n" } ],
        clouds: { all: 0 },
        wind: { speed: 3.48, deg: 67 },
        sys: { pod: "n" },
        dt_txt: "2020-04-20 00:00:00"
      }, {
        dt: 1587351600,
        main: {
          temp: 19.53,
          feels_like: 17.69,
          temp_min: 19.53,
          temp_max: 19.53,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1011,
          humidity: 70,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01n" } ],
        clouds: { all: 0 },
        wind: { speed: 4.39, deg: 23 },
        sys: { pod: "n" },
        dt_txt: "2020-04-20 03:00:00"
      }, {
        dt: 1587362400,
        main: {
          temp: 18.5,
          feels_like: 17.46,
          temp_min: 18.5,
          temp_max: 18.5,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1010,
          humidity: 72,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01n" } ],
        clouds: { all: 0 },
        wind: { speed: 2.99, deg: 357 },
        sys: { pod: "n" },
        dt_txt: "2020-04-20 06:00:00"
      }, {
        dt: 1587373200,
        main: {
          temp: 17.73,
          feels_like: 16.49,
          temp_min: 17.73,
          temp_max: 17.73,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1011,
          humidity: 73,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01n" } ],
        clouds: { all: 0 },
        wind: { speed: 3.02, deg: 346 },
        sys: { pod: "n" },
        dt_txt: "2020-04-20 09:00:00"
      }, {
        dt: 1587384000,
        main: {
          temp: 18.54,
          feels_like: 16.86,
          temp_min: 18.54,
          temp_max: 18.54,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1011,
          humidity: 66,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 3 },
        wind: { speed: 3.31, deg: 338 },
        sys: { pod: "d" },
        dt_txt: "2020-04-20 12:00:00"
      }, {
        dt: 1587394800,
        main: {
          temp: 22.92,
          feels_like: 21.55,
          temp_min: 22.92,
          temp_max: 22.92,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1010,
          humidity: 50,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 0 },
        wind: { speed: 2.82, deg: 340 },
        sys: { pod: "d" },
        dt_txt: "2020-04-20 15:00:00"
      }, {
        dt: 1587405600,
        main: {
          temp: 25.23,
          feels_like: 24.66,
          temp_min: 25.23,
          temp_max: 25.23,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1007,
          humidity: 45,
          temp_kf: 0
        },
        weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
        clouds: { all: 0 },
        wind: { speed: 1.89, deg: 341 },
        sys: { pod: "d" },
        dt_txt: "2020-04-20 18:00:00"
      }, {
        dt: 1587416400,
        main: {
          temp: 23.55,
          feels_like: 23.66,
          temp_min: 23.55,
          temp_max: 23.55,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1007,
          humidity: 52,
          temp_kf: 0
        },
        weather: [ { id: 801, main: "Clouds", description: "few clouds", icon: "02d" } ],
        clouds: { all: 24 },
        wind: { speed: 1.23, deg: 42 },
        sys: { pod: "d" },
        dt_txt: "2020-04-20 21:00:00"
      }, {
        dt: 1587427200,
        main: {
          temp: 22.66,
          feels_like: 21.72,
          temp_min: 22.66,
          temp_max: 22.66,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1008,
          humidity: 51,
          temp_kf: 0
        },
        weather: [ { id: 801, main: "Clouds", description: "few clouds", icon: "02n" } ],
        clouds: { all: 15 },
        wind: { speed: 2.22, deg: 8 },
        sys: { pod: "n" },
        dt_txt: "2020-04-21 00:00:00"
      }, {
        dt: 1587438000,
        main: {
          temp: 21.33,
          feels_like: 20.44,
          temp_min: 21.33,
          temp_max: 21.33,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1010,
          humidity: 57,
          temp_kf: 0
        },
        weather: [ { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" } ],
        clouds: { all: 88 },
        wind: { speed: 2.36, deg: 249 },
        sys: { pod: "n" },
        dt_txt: "2020-04-21 03:00:00"
      }, {
        dt: 1587448800,
        main: {
          temp: 17.58,
          feels_like: 13.03,
          temp_min: 17.58,
          temp_max: 17.58,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1012,
          humidity: 71,
          temp_kf: 0
        },
        weather: [ { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" } ],
        clouds: { all: 76 },
        wind: { speed: 7.5, deg: 164 },
        sys: { pod: "n" },
        dt_txt: "2020-04-21 06:00:00"
      }, {
        dt: 1587459600,
        main: {
          temp: 16.45,
          feels_like: 11.45,
          temp_min: 16.45,
          temp_max: 16.45,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1014,
          humidity: 58,
          temp_kf: 0
        },
        weather: [ { id: 801, main: "Clouds", description: "few clouds", icon: "02n" } ],
        clouds: { all: 12 },
        wind: { speed: 6.54, deg: 161 },
        sys: { pod: "n" },
        dt_txt: "2020-04-21 09:00:00"
      }, {
        dt: 1587470400,
        main: {
          temp: 16.18,
          feels_like: 10.63,
          temp_min: 16.18,
          temp_max: 16.18,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1016,
          humidity: 53,
          temp_kf: 0
        },
        weather: [ { id: 801, main: "Clouds", description: "few clouds", icon: "02d" } ],
        clouds: { all: 17 },
        wind: { speed: 6.8, deg: 155 },
        sys: { pod: "d" },
        dt_txt: "2020-04-21 12:00:00"
      }, {
        dt: 1587481200,
        main: {
          temp: 17.92,
          feels_like: 13.42,
          temp_min: 17.92,
          temp_max: 17.92,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1017,
          humidity: 47,
          temp_kf: 0
        },
        weather: [ { id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" } ],
        clouds: { all: 35 },
        wind: { speed: 5.25, deg: 143 },
        sys: { pod: "d" },
        dt_txt: "2020-04-21 15:00:00"
      }, {
        dt: 1587492000,
        main: {
          temp: 18.75,
          feels_like: 14.74,
          temp_min: 18.75,
          temp_max: 18.75,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1016,
          humidity: 46,
          temp_kf: 0
        },
        weather: [ { id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" } ],
        clouds: { all: 48 },
        wind: { speed: 4.7, deg: 118 },
        sys: { pod: "d" },
        dt_txt: "2020-04-21 18:00:00"
      }, {
        dt: 1587502800,
        main: {
          temp: 16.49,
          feels_like: 12.04,
          temp_min: 16.49,
          temp_max: 16.49,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1016,
          humidity: 61,
          temp_kf: 0
        },
        weather: [ { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" } ],
        clouds: { all: 90 },
        wind: { speed: 6.03, deg: 107 },
        sys: { pod: "d" },
        dt_txt: "2020-04-21 21:00:00"
      }, {
        dt: 1587513600,
        main: {
          temp: 15.18,
          feels_like: 10.5,
          temp_min: 15.18,
          temp_max: 15.18,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1017,
          humidity: 67,
          temp_kf: 0
        },
        weather: [ { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" } ],
        clouds: { all: 89 },
        wind: { speed: 6.41, deg: 112 },        sys: { pod: "n" },
        dt_txt: "2020-04-22 00:00:00"
      }, {
        dt: 1587524400,
        main: {
          temp: 14.58,
          feels_like: 10.09,
          temp_min: 14.58,
          temp_max: 14.58,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1018,
          humidity: 70,
          temp_kf: 0
        },
        weather: [ { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" } ],
        clouds: { all: 97 },
        wind: { speed: 6.17, deg: 112 },
        sys: { pod: "n" },
        dt_txt: "2020-04-22 03:00:00"
      }, {
        dt: 1587535200,
        main: {
          temp: 13.86,
          feels_like: 9.79,
          temp_min: 13.86,
          temp_max: 13.86,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1019,
          humidity: 72,
          temp_kf: 0
        },
        weather: [ { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" } ],
        clouds: { all: 87 },
        wind: { speed: 5.46, deg: 117 },
        sys: { pod: "n" },
        dt_txt: "2020-04-22 06:00:00"
      }, {
        dt: 1587546000,
        main: {
          temp: 13.4,
          feels_like: 9.9,
          temp_min: 13.4,
          temp_max: 13.4,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1019,
          humidity: 72,
          temp_kf: 0
        },
        weather: [ { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" } ],
        clouds: { all: 100 },
        wind: { speed: 4.49, deg: 113 },
        sys: { pod: "n" },
        dt_txt: "2020-04-22 09:00:00"
      }, {
        dt: 1587556800,
        main: {
          temp: 14.21,
          feels_like: 10.7,
          temp_min: 14.21,
          temp_max: 14.21,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1019,
          humidity: 65,
          temp_kf: 0
        },
        weather: [ { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" } ],
        clouds: { all: 96 },
        wind: { speed: 4.25, deg: 91 },
        sys: { pod: "d" },
        dt_txt: "2020-04-22 12:00:00"
      } ],
      city: {
        id: 3435910,
        name: "Buenos Aires",
        coord: { lat: -34.6132, lon: -58.3772 },
        country: "AR",
        population: 1000000,
        timezone: -10800,
        sunrise: 1587118714,
        sunset: 1587158815
      }
    };
  }

}
