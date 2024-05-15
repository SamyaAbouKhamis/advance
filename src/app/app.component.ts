import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { CountsComponent } from './counts/counts.component';
import { ClientsComponent } from './clients/clients.component';
import { FeaturedComponent } from './featured/featured.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TopbarComponent } from './topbar/topbar.component';

import { GoogleMapsModule } from '@angular/google-maps'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HeroComponent,NgbModule,ServicesComponent,AboutComponent,CountsComponent
  ,ClientsComponent,FeaturedComponent,PortfolioComponent,ContactComponent,FooterComponent,SplashScreenComponent,MatProgressBarModule
,FormsModule,CommonModule,MatProgressSpinnerModule,TopbarComponent,GoogleMapsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent   {
  title = 'Advance-solution';
  loading: boolean = true;
 


  ngOnInit() {
      this.initMap();
    // Simulating data loading delay
    setTimeout(() => {
      this.loading = false;
    }, 2000); // Replace 2000 with your actual data loading time

   
  }
  map!: google.maps.Map;

 


  initMap(): void {
    const mapElement = document.getElementById('map');
    if (mapElement) {
      this.map = new google.maps.Map(mapElement, {
        center: { lat: 51.678418, lng: 7.809007 },
        zoom: 8
      });
    } else {
      console.error('Map element not found');
    }
  
  

}}
