import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { HolfuyService } from '../holfuy.service';
import { ParaglidableForecast, ParaglidableService } from '../paraglidable.service';
import { StationParaglidableHeaderComponent } from '../station-paraglidable-header/station-paraglidable-header.component';

@Component({
    selector: 'app-zuflucht',
  imports: [StationParaglidableHeaderComponent],
    templateUrl: './zuflucht.component.html',
    styleUrl: './zuflucht.component.css'
})
export class ZufluchtComponent implements OnInit {
  readonly webcamPageUrl = 'https://www.foto-webcam.eu/webcam/buchkopfturm/';
  readonly webcamImageUrl = `https://www.foto-webcam.eu/webcam/buchkopfturm/current/1200.jpg?ts=${Date.now()}`;
  stationId: string = '1593';
  iframeUrl: SafeResourceUrl = this.holfuyService.getIframeUrl(this.stationId);
  readonly paraglidableStationName = 'Oppenau West (Zuflucht) Rossbühl';
  flyValue: ParaglidableForecast | null = null;

  constructor(private holfuyService: HolfuyService, private paraglidableService: ParaglidableService) {}

  ngOnInit(): void {
    this.paraglidableService.getFlyValues(this.paraglidableStationName).subscribe((value) => {
      this.flyValue = value;
    });
  }
}
