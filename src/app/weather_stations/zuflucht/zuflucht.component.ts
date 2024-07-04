import { Component, inject } from '@angular/core';
import { HolfuyService } from '../holfuy.service';
import { HolfuyWeather, HolfuyWind } from '../../model/holfuyWeather';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-zuflucht',
  standalone: true,
  imports: [JsonPipe, CommonModule],
  templateUrl: './zuflucht.component.html',
  styleUrl: './zuflucht.component.css'
})
export class ZufluchtComponent {
  idZuflucht = '1593';

  windZuflucht: HolfuyWind = {
    speed: 0,
    gust: 0,
    min: 0,
    unit: '',
    direction: 0
  };

  weatherZuflucht: HolfuyWeather = {
    stationId: 0,
    stationName: '',
    dateTime: '',
    wind: this.windZuflucht,
    humidity: 0,
    pressure: 0,
    temperature: 0
  };

  private holfuyService =inject(HolfuyService);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.holfuyService.getData(this.idZuflucht).subscribe({
      next: (holfuyWeather) => {
        this.weatherZuflucht = holfuyWeather;
      },
      error: (errResp) => {
        console.error('Error loading weather data', errResp);
      },
    })
  }
}
