import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule, TranslateModule],

  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('1s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AboutComponent implements OnInit, OnDestroy {
  simpleIcon = faSmile;
  images: string[] = [
    '../../assets/about.jpg',
    '../../assets/camera1.jpg',
    '../../assets/about.jpg',
    // Add more image paths here
  ];
  currentImage: string = this.images[0];
  private currentIndex: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.startImageLoop();
  }

  ngOnDestroy() {
    this.stopImageLoop();
  }

  startImageLoop() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 3000); // Change image every 3 seconds
  }

  stopImageLoop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
