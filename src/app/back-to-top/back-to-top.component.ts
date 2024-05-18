import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.css'
})
export class BackToTopComponent {
  arrowUpIcon = faArrowUp;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    const scrollTopThreshold = 200; // Adjust as needed
    const button = document.querySelector('.back-to-top');

    if (button) {
      if (yOffset > scrollTopThreshold) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}



