import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParaglidableService {
  private readonly apiUrl = 'https://paraglidable.com/apps/api/get.php?key=a2fdf18c73ec57b4&format=JSON&version=1';
  private http = inject(HttpClient);

  getFlyValues(stationName: string): Observable<ParaglidableForecast | null> {
    const normalizedStationName = stationName.trim();

    return this.http.get<ParaglidableApiResponse>(this.apiUrl).pipe(
      map((data) => {
        const today = this.getTodayKey();
        const todayData = data[today] ?? [];

        return todayData.find((location) => location.name === normalizedStationName)?.forecast ?? null;
      })
    );
  }

  private getTodayKey(): string {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Berlin'
    }).format(new Date());
  }
}

export interface ParaglidableForecast {
  fly: number;
  XC: number;
  takeoff?: number;
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
