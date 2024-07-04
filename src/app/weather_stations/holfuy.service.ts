import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HolfuyWeather } from '../model/holfuyWeather';

@Injectable({
  providedIn: 'root'
})

export class HolfuyService {

  private http = inject(HttpClient);
  
  getData(stationId: string): Observable<HolfuyWeather> {
    const URL = '/api/live/';
    const PASSWORD = 'vkuhlTL91Hx7ial';

    const finalUrl:string = `${URL}?s=${stationId}&pw=${PASSWORD}&m=JSON&su=km/h`;
    
    const headers = {
      Accept: 'application/json',
    };

    return this.http.get<HolfuyWeather>(finalUrl, {headers});
  }
}
