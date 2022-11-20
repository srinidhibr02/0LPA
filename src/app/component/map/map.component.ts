import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { google } from "google-maps";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  constructor() { }

  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;
  map!: google.maps.Map;
  lat = 14.4644;
  lng = 75.9218;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map:this.map,
  });

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
      this.marker.setMap(this.map);
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }
}
