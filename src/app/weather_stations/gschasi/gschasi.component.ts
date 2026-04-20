import { Component } from '@angular/core';

@Component({
    selector: 'app-gschasi',
    imports: [],
    templateUrl: './gschasi.component.html',
    styleUrl: './gschasi.component.css'
})
export class GschasiComponent {

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
