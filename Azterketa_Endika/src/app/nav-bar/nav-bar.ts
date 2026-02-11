import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  @Input() navParametro =true;
  @Output() modeChanged = new EventEmitter<number>();

  nav_items = [
    {id:1, izena:'Air quality', route: '/air_stations'},
    {id:2, izena:'Cultural events', route: '/cultural_events'},
    {id:3, izena:'Euskalmet', route: '/euskalmet'}
  ]

  setMode(id: number) {
    this.modeChanged.emit(id);
  }
}