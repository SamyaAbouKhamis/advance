import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [GoogleMap,GoogleMapsModule,FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  envelopeIcon: IconDefinition = faEnvelope;
  mapMarkerIcon: IconDefinition = faMapMarkerAlt;
  phoneIcon: IconDefinition = faPhone;
  
  // center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  // zoom = 4;
  // display!: google.maps.LatLngLiteral;

  // moveMap(event: google.maps.MapMouseEvent) {
  //   this.center = (event.latLng?.toJSON() || { lat: 24, lng: 12 });
  // }

  // move(event: google.maps.MapMouseEvent) {
  //   this.display = event.latLng?.toJSON() || { lat: 0, lng: 0 };
  // }
  map!: google.maps.Map;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    const mapDiv = document.getElementById('map') as HTMLElement;
    if (mapDiv) {
      const mapOptions: google.maps.MapOptions = {
        center: new google.maps.LatLng(37.7749, -122.4194),
        zoom: 8
      };
      this.map = new google.maps.Map(mapDiv, mapOptions);
    }
  }
}