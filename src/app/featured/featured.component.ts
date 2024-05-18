import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoins, faMeteor, faTachometerAlt, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {
  coinStackIcon = faCoins;
  meteorIcon = faMeteor;
  tachometerIcon = faTachometerAlt;
  messageErrorIcon = faExclamationCircle;
}
