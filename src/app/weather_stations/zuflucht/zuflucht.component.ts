import { Component} from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { HolfuyService } from '../holfuy.service';

@Component({
    selector: 'app-zuflucht',
    imports: [],
    templateUrl: './zuflucht.component.html',
    styleUrl: './zuflucht.component.css'
})
export class ZufluchtComponent {
  stationId: string = '1593';
  iframeUrl: SafeResourceUrl = this.holfuyService.getIframeUrl(this.stationId);

  constructor(private holfuyService: HolfuyService) {}
}
