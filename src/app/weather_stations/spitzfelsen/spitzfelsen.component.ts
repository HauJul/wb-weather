import { Component, inject, OnInit } from '@angular/core';
import { ParaglidableForecast, ParaglidableService } from '../paraglidable.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-spitzfelsen',
    imports: [CommonModule],
    templateUrl: './spitzfelsen.component.html',
    styleUrl: './spitzfelsen.component.css'
})
export class SpitzfelsenComponent implements OnInit{

  constructor(private paraglidableService: ParaglidableService){}

  flyValue!: ParaglidableForecast | undefined

  ngOnInit(): void {
    this.paraglidableService.getFlyValues("Spitzfelsen").subscribe({
      next: (value) => 
      {
        this.flyValue = value;
      },
      error: (error) => console.error('Fehler beim Abrufen des fly-Wertes', error)
  });
  }

  

}
