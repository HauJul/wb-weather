import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParaglidableService {
  private http = inject(HttpClient);
  private url = 'https://api.paraglidable.com/';

  getFlyValue(): Observable<ParaglidableData[]> {
    const headers = {
      Accept: 'application/json',
    };
    const key = "e23e4661ed402378";
    const format = "JSON";
    const version = 1;

    const params = { key , format, version };
    return this.http.get<ParaglidableData[]>(this.url, { headers, params });
  }
}

export interface ParaglidableData{
  date: string;
  location: string;
}
