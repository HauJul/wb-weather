import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpitzfelsenComponent } from './weather_stations/spitzfelsen/spitzfelsen.component';
import { GschasiComponent } from './weather_stations/gschasi/gschasi.component';
import { ZufluchtComponent } from './weather_stations/zuflucht/zuflucht.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
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
        path: '**',
        redirectTo: 'home',
    },
];
