import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Opendata } from '../opendata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-station',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './station.html',
  styleUrl: './station.css',
})
export class Station implements OnInit {
  private route = inject(ActivatedRoute);
  private api = inject(Opendata);

  station = signal<any | null>(null);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    const id = params.get('id');

    if (!id) return;

    this.station.set(null);

    this.api.station_info(id).subscribe(data => {
  this.station.set(data);
});
  });
  }
}

