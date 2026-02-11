import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Opendata } from '../opendata';

@Component({
  selector: 'app-air-stations',
  imports: [],
  templateUrl: './air-stations.html',
  styleUrl: './air-stations.css',
})
export class AirStations {
  private route = inject(ActivatedRoute);
  private router = inject(Router); 
  private api = inject(Opendata);

  stations: any = signal(null);

  constructor() {
    this.api.stations().subscribe((response) => {
      this.stations.set(response);
      console.log(this.stations());
    });
}

  public goToStation(id: any) {
    this.router.navigate(['/air_stations/', this.stations.id]);
}
}