import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Opendata {
  private http = inject(HttpClient);
  private apiUrl = "https://api.euskadi.eus/air-quality/stations";
  data = null;
  page = 1;
  elements = 62;
  private typeMap: Record<string, number> = {
    point: 1,
    erakusketa: 3,
    dantza: 4,
  };

 stations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  station_info(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/'+id);
  }
}
