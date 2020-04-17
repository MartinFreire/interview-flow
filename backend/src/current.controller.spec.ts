import { Test, TestingModule } from '@nestjs/testing';
import { CurrentController }  from './current.controller';
import { WheatherService }     from "./wheather.service";
import { WheatherMockService } from "./wheather.mock-service";

describe('CurrentController', () => {
  let controller: CurrentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ CurrentController ],
      providers: [ { provide: WheatherService, useClass: WheatherMockService } ],
    }).compile();

    controller = app.get<CurrentController>(CurrentController);
  });

  describe('root', () => {
    it('La escrutura debe tener los valores basicos',  async () => {
      const current = await controller.getCurrentDefault();

      expect(current.name).toBe('Buenos Aires');
      expect(current.sys.country).toBe('AR');
      expect(current.main.temp).toEqual(expect.any(Number));
      expect(current.main.feels_like).toEqual(expect.any(Number));
      expect(current.main.temp_min).toEqual(expect.any(Number));
      expect(current.main.temp_max).toEqual(expect.any(Number));
    });
  });

});

