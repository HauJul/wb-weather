import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpitzfelsenComponent } from './weather_stations/spitzfelsen/spitzfelsen.component';
import { GschasiComponent } from './weather_stations/gschasi/gschasi.component';
import { ZufluchtComponent } from './weather_stations/zuflucht/zuflucht.component';
import { OppenauOstComponent } from './weather_stations/oppenau-ost/oppenau-ost.component';
import { DohlenbacherComponent } from './weather_stations/dohlenbacher/dohlenbacher.component';
import { HoernlebergComponent } from './weather_stations/hoernleberg/hoernleberg.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: SpitzfelsenComponent
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'spitzfelsen',
        component: SpitzfelsenComponent,
    },
    {
        path: 'gschasi',
        component: GschasiComponent,
    },
    {
        path: 'zuflucht',
        component: ZufluchtComponent,
    },
    {
        path: 'oppenau-ost',
        component: OppenauOstComponent,
    },
    {
        path: 'dohlenbacher',
        component: DohlenbacherComponent,
    },
    {
        path: 'hoernleberg',
        component: HoernlebergComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
