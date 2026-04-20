import { Component, OnInit } from '@angular/core';
import {SafeResourceUrl } from '@angular/platform-browser';
import { HolfuyService } from '../holfuy.service';
import { ParaglidableForecast, ParaglidableService } from '../paraglidable.service';
import { StationParaglidableHeaderComponent } from '../station-paraglidable-header/station-paraglidable-header.component';

@Component({
    selector: 'app-oppenau-ost',
  imports: [StationParaglidableHeaderComponent],
    templateUrl: './oppenau-ost.component.html',
    styleUrl: './oppenau-ost.component.css'
})
export class OppenauOstComponent implements OnInit {
  stationId: string = '1594';
  iframeUrl: SafeResourceUrl = this.holfuyService.getIframeUrl(this.stationId);
  readonly paraglidableStationName = 'Oppenau Ost Schäfersfeld';
  flyValue: ParaglidableForecast | null = null;

  constructor(private holfuyService: HolfuyService, private paraglidableService: ParaglidableService) {}

  ngOnInit(): void {
    this.paraglidableService.getFlyValues(this.paraglidableStationName).subscribe((value) => {
      this.flyValue = value;
    });
  }
}
