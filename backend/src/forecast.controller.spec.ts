import { Test, TestingModule } from '@nestjs/testing';
import { ForecastController }  from './forecast.controller';
import { WheatherService }     from "./wheather.service";
import { WheatherMockService } from "./wheather.mock-service";

describe('ForecastController', () => {
  let controller: ForecastController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ ForecastController ],
      providers: [ { provide: WheatherService, useClass: WheatherMockService } ],
    }).compile();

    controller = app.get<ForecastController>(ForecastController);
  });

  describe('root', () => {
    it('La escrutura debe tener los valores basicos',  async () => {
      const forecast = await controller.getForecastDefault();

      expect(forecast.city.name).toBe('Buenos Aires');
      expect(forecast.city.country).toBe('AR');
      expect(forecast.list).toHaveLength(40);
      expect(forecast.list[0].main.temp).toEqual(expect.any(Number));
      expect(forecast.list[0].main.feels_like).toEqual(expect.any(Number));
      expect(forecast.list[0].main.temp_min).toEqual(expect.any(Number));
      expect(forecast.list[0].main.temp_max).toEqual(expect.any(Number));
    });
  });
});
