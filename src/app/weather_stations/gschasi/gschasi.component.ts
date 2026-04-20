import { Component, OnInit } from '@angular/core';
import { ParaglidableForecast, ParaglidableService } from '../paraglidable.service';
import { StationParaglidableHeaderComponent } from '../station-paraglidable-header/station-paraglidable-header.component';

@Component({
    selector: 'app-gschasi',
    imports: [StationParaglidableHeaderComponent],
    templateUrl: './gschasi.component.html',
    styleUrl: './gschasi.component.css'
})
export class GschasiComponent implements OnInit {
    readonly paraglidableStationName = 'Gschasi';
    flyValue: ParaglidableForecast | null = null;

    constructor(private paraglidableService: ParaglidableService) {}

    ngOnInit(): void {
        this.paraglidableService.getFlyValues(this.paraglidableStationName).subscribe((value) => {
            this.flyValue = value;
        });
    }

    ngAfterViewInit() {
        const existingScript = document.getElementById('openwindmap-widget-script');

        if (existingScript) {
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.id = 'openwindmap-widget-script';
        script.src = 'https://www.openwindmap.org/js/widget-v1.js';
        script.defer = true;
        document.body.appendChild(script);
    }

}
