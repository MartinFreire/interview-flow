import { Test, TestingModule } from '@nestjs/testing';
import { AppController }       from './app.controller';
import { LocationService }     from "./location.service";
import { LocationMockService } from "./location.mock-service";


describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ AppController ],
      providers: [ { provide: LocationService, useClass: LocationMockService } ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('los valores de location deben tener la estructura correcta.', async () => {

      const location = await appController.getLocation();

      expect(location.city).toBe('Ejemplo');
      expect(location.countryCode).toBe('AR');
      expect(location.status).toBe('success');
    });
  });
});
