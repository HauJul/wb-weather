import { Component, OnInit } from '@angular/core';
import { ParaglidableForecast, ParaglidableService } from '../paraglidable.service';
import { StationParaglidableHeaderComponent } from '../station-paraglidable-header/station-paraglidable-header.component';

@Component({
    selector: 'app-dohlenbacher',
    imports: [StationParaglidableHeaderComponent],
    templateUrl: './dohlenbacher.component.html',
    styleUrl: './dohlenbacher.component.css'
})
export class DohlenbacherComponent implements OnInit {
    readonly paraglidableStationName = 'Spitzfelsen';
    readonly weatherCharts = [
        {
            title: 'Temperatur',
            icon: 'bi-thermometer-half',
            src: 'https://fly2cloud.de/ws/wsDohli/diagrams/temperaturDay.png'
        },
        {
            title: 'Luftdruck',
            icon: 'bi-speedometer2',
            src: 'https://fly2cloud.de/ws/wsDohli/diagrams/druckDay.png'
        },
        {
            title: 'Luftfeuchtigkeit und Batterieladezustand',
            icon: 'bi-droplet-half',
            src: 'https://fly2cloud.de/ws/wsDohli/diagrams/feuchteDay.png'
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
