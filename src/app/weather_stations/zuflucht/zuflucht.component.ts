import { Component, inject } from '@angular/core';
import { HolfuyService } from '../holfuy.service';
import { HolfuyWeather, HolfuyWind } from '../../model/holfuyWeather';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-zuflucht',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './zuflucht.component.html',
  styleUrl: './zuflucht.component.css'
})
export class ZufluchtComponent {
  holfuyWind: HolfuyWind = {
    speed: 0,
    gust: 0,
    min: 0,
    unit: '',
    direction: 0
  };

  holfuyWeather: HolfuyWeather = {
    stationId: 0,
    stationName: '',
    dateTime: '',
    wind: this.holfuyWind,
    humidity: 0,
    pressure: 0,
    temperature: 0
  };

  private holfuyService =inject(HolfuyService);

  load(): void {
    this.holfuyService.find().subscribe({
      next: (holfuyWeather) => {
        this.holfuyWeather = holfuyWeather;
      },
      error: (errResp) => {
        console.error('Error loading weather data', errResp);
      },
    })
  }
}
