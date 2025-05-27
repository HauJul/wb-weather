import { Component} from '@angular/core';
import {SafeResourceUrl } from '@angular/platform-browser';
import { HolfuyService } from '../holfuy.service';

@Component({
    selector: 'app-oppenau-ost',
    imports: [],
    templateUrl: './oppenau-ost.component.html',
    styleUrl: './oppenau-ost.component.css'
})
export class OppenauOstComponent {
  stationId: string = '1594';
  iframeUrl: SafeResourceUrl = this.holfuyService.getIframeUrl(this.stationId);

  constructor(private holfuyService: HolfuyService) {}
}
