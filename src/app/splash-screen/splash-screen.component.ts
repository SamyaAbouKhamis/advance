import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TopbarComponent } from '../topbar/topbar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [MatProgressSpinnerModule,TopbarComponent,MatProgressBarModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})
export class SplashScreenComponent  {
  progressValue: number = 50;

  constructor() {
    // Simulate progress
    this.simulateProgress();
  }

  simulateProgress(): void {
    const interval = setInterval(() => {
      this.progressValue += 10;
      if (this.progressValue >= 100) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
