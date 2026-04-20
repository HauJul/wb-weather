import { Component, OnInit } from '@angular/core';
import { ParaglidableForecast, ParaglidableService } from '../paraglidable.service';
import { StationParaglidableHeaderComponent } from '../station-paraglidable-header/station-paraglidable-header.component';

@Component({
    selector: 'app-hoernleberg',
    imports: [StationParaglidableHeaderComponent],
    templateUrl: './hoernleberg.component.html',
    styleUrl: './hoernleberg.component.css'
})
export class HoernlebergComponent implements OnInit {
    readonly paraglidableStationName = 'Hörnleberg';
    readonly weatherCharts = [
        {
            title: 'Temperatur',
            icon: 'bi-thermometer-half',
            src: 'https://fly2cloud.de/ws/wsHoernle/diagrams/temperaturDay.png'
        },
        {
            title: 'Luftdruck',
            icon: 'bi-speedometer2',
            src: 'https://fly2cloud.de/ws/wsHoernle/diagrams/druckDay.png'
        },
        {
            title: 'Luftfeuchtigkeit und Batterieladezustand',
            icon: 'bi-droplet-half',
            src: 'https://fly2cloud.de/ws/wsHoernle/diagrams/feuchteDay.png'
        }
    ];
    flyValue: ParaglidableForecast | null = null;

    constructor(private paraglidableService: ParaglidableService) {}

    ngOnInit(): void {
        this.paraglidableService.getFlyValues(this.paraglidableStationName).subscribe((value) => {
            this.flyValue = value;
        });
    }
}
