import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1000ms ease-in', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('1000ms ease-out', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class HeroComponent {
  @Input() showAnimation = true;
}
