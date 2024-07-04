import { Injectable} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class HolfuyService {
  baseUrl: string = 'https://widget.holfuy.com/';
  params: any = {station: '', su: 'km/h', t: 'C', lang: 'de', mode: 'detailed'};

  constructor(private sanitizer: DomSanitizer) { }

  getIframeUrl(stationId : string): SafeResourceUrl {
    this.params.station = stationId;
    const queryParams = new URLSearchParams(this.params).toString();

    return this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseUrl}?${queryParams}`);
  }
}
