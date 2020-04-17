import * as request            from 'supertest';
import { Test }                from '@nestjs/testing';
import { INestApplication }    from '@nestjs/common';
import { AppModule }           from '../src/app.module';
import { WheatherService }     from '../src/wheather.service';
import { WheatherMockService } from '../src/wheather.mock-service';
import { LocationService }     from '../src/location.service';
import { LocationMockService } from '../src/location.mock-service';


describe('App (e2e)', () => {
  let app: INestApplication;
  let locationSvc: LocationService;
  let wheatherSvc: WheatherService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ AppModule ],
    }).overrideProvider(WheatherService)
      .useClass(WheatherMockService)
      .overrideProvider(LocationService)
      .useClass(LocationMockService)
      .compile();

    app = moduleRef.createNestApplication();

    locationSvc = moduleRef.get<LocationService>(LocationService);
    wheatherSvc = moduleRef.get<WheatherService>(WheatherService);

    await app.init();
  });

  it(`/GET /location`, async () => {
    return request(app.getHttpServer())
      .get('/location')
      .expect(200)
      .expect(await locationSvc.getLocation())
  });

  it(`/GET /current`, async () => {
    return request(app.getHttpServer())
      .get('/current')
      .expect(200)
      .expect( async (res) => {
        console.log(res);
        return res === await wheatherSvc.getCurrent('test');
      })
  });

  it(`/GET /forecast`, async () => {
    return request(app.getHttpServer())
      .get('/forecast')
      .expect(200)
      .expect( async (res) => {
        return res === await wheatherSvc.getForecast('test');
      })
  });

  afterAll(async () => {
    await app.close();
  });

});
