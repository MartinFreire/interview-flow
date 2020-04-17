import { Module }             from '@nestjs/common';
import { AppController }      from './app.controller';
import { CurrentController }  from './current.controller';
import { ForecastController } from './forecast.controller';
import { WheatherService }    from './wheather.service';
import { LocationService }    from './location.service';


@Module({
  imports: [],
  controllers: [
    AppController,
    CurrentController,
    ForecastController,
  ],
  providers: [
    LocationService,
    WheatherService,
  ],
})
export class AppModule {
}
