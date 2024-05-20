import { Component, ElementRef, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
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
import { CommonModule, DOCUMENT } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TopbarComponent } from './topbar/topbar.component';

import { GoogleMapsModule } from '@angular/google-maps'
import { BrowserModule } from '@angular/platform-browser';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ThemeService } from './theme.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    NgbModule,
    ServicesComponent,
    AboutComponent,
    CountsComponent,
    ClientsComponent,
    FeaturedComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    SplashScreenComponent,
    MatProgressBarModule,
    FormsModule,
    CommonModule,
    MatProgressSpinnerModule,
    TopbarComponent,
    GoogleMapsModule,
    BackToTopComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Advance-solution';
  loading: boolean = true;

  ngOnInit() {
    this.themeService.applyTheme();
    // Simulating data loading delay
    setTimeout(() => {
      this.loading = false;
    }, 2000); // Replace 2000 with your actual data loading time
  }


 
  constructor(private themeService: ThemeService) {}



  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  

}
