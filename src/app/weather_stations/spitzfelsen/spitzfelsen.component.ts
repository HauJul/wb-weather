import { Component, OnInit } from '@angular/core';
import { ParaglidableForecast, ParaglidableService } from '../paraglidable.service';
import { CommonModule } from '@angular/common';
import { StationParaglidableHeaderComponent } from '../station-paraglidable-header/station-paraglidable-header.component';

@Component({
    selector: 'app-spitzfelsen',
  imports: [CommonModule, StationParaglidableHeaderComponent],
    templateUrl: './spitzfelsen.component.html',
    styleUrl: './spitzfelsen.component.css'
})
export class SpitzfelsenComponent implements OnInit{

  readonly stationName = 'Spitzfelsen';
  readonly weatherCharts = [
    {
      title: 'Temperatur',
      icon: 'bi-thermometer-half',
      src: 'https://fly2cloud.de/ws/wsSpitz/diagrams/temperaturDay.png'
    },
    {
      title: 'Luftdruck',
      icon: 'bi-speedometer2',
      src: 'https://fly2cloud.de/ws/wsSpitz/diagrams/druckDay.png'
    },
    {
      title: 'Luftfeuchtigkeit und Batterieladezustand',
      icon: 'bi-droplet-half',
      src: 'https://fly2cloud.de/ws/wsSpitz/diagrams/feuchteDay.png'
    }
  ];

  flyValue: ParaglidableForecast | null = null;
  isLoading = true;
  hasError = false;

  constructor(private paraglidableService: ParaglidableService){}

  ngOnInit(): void {
    this.paraglidableService.getFlyValues(this.stationName).subscribe({
      next: (value) => 
      {
        this.flyValue = value;
        this.isLoading = false;
      },
      error: (error) => {
        this.hasError = true;
        this.isLoading = false;
        console.error('Fehler beim Abrufen der Paraglidable-Werte', error);
      }
  });
  }
}
