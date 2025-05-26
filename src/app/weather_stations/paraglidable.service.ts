import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParaglidableService {
  private http = inject(HttpClient);

  getFlyValues(name: string): Observable<ParaglidableForecast | undefined> {
    return this.http.get<ParaglidableApiResponse>("https://paraglidable.com/apps/api/get.php?key=a2fdf18c73ec57b4&format=JSON&version=1").pipe(
      map((data) => {
        const today = new Date().toISOString().split('T')[0]; // z. B. "2025-05-26"
        const todayData = data[today];
        if (!todayData) return undefined;

        const spot = todayData.find(location => location.name === name);
        return spot?.forecast;
      })
    );
  }
}

export interface ParaglidableForecast {
  fly: number;
  XC: number;
  takeoff?: number; // optional, weil nicht immer vorhanden
}

export interface ParaglidableLocation {
  lat: number;
  lon: number;
  name: string;
  forecast: ParaglidableForecast;
}

export interface ParaglidableApiResponse {
  [date: string]: ParaglidableLocation[];
}
