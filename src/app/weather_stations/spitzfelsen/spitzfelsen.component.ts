import { Component, inject, OnInit } from '@angular/core';
import { ParaglidableData, ParaglidableService } from '../paraglidable.service';

@Component({
  selector: 'app-spitzfelsen',
  standalone: true,
  imports: [],
  templateUrl: './spitzfelsen.component.html',
  styleUrl: './spitzfelsen.component.css'
})
export class SpitzfelsenComponent implements OnInit{

  constructor(private paraglidableService: ParaglidableService){}

  flyValue!: ParaglidableData[];

  ngOnInit(): void {
    this.paraglidableService.getFlyValue().subscribe({
      next: (value) => this.flyValue = value,
      error: (error) => console.error('Fehler beim Abrufen des fly-Wertes', error)
  });
  }

  

}
