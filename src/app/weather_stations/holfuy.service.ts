import { Injectable} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class HolfuyService {
  baseUrl: string = 'https://widget.holfuy.com/';

  constructor(private sanitizer: DomSanitizer) { }

  getIframeUrl(stationId : string): SafeResourceUrl {
    const params = {
      station: stationId,
      su: 'km/h',
      t: 'C',
      lang: 'de',
      mode: 'vertical',
      refresh: '300'
    };
    const queryParams = new URLSearchParams(params).toString();

    return this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseUrl}?${queryParams}`);
  }
}
