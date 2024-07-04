import { Component, inject } from '@angular/core';
import { HolfuyWeather, HolfuyWind } from '../../model/holfuyWeather';
import { HolfuyService } from '../holfuy.service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-oppenau-ost',
  standalone: true,
  imports: [ JsonPipe, CommonModule],
  templateUrl: './oppenau-ost.component.html',
  styleUrl: './oppenau-ost.component.css'
})
export class OppenauOstComponent {
  idOppenauOst = '1594';

  windOppenauOst: HolfuyWind = {
    speed: 0,
    gust: 0,
    min: 0,
    unit: '',
    direction: 0
  };

  weatherOppenauOst: HolfuyWeather = {
    stationId: 0,
    stationName: '',
    dateTime: '',
    wind: this.windOppenauOst,
    humidity: 0,
    pressure: 0,
    temperature: 0
  };

  private holfuyService =inject(HolfuyService);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.holfuyService.getData(this.idOppenauOst).subscribe({
      next: (holfuyWeather) => {
        this.weatherOppenauOst = holfuyWeather;
      },
      error: (errResp) => {
        console.error('Error loading weather data', errResp);
      },
    })
  }
}
