import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faWebAwesome } from '@fortawesome/free-brands-svg-icons';
import { faVideo, faWifi, faSignal,faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  phoneIcon: IconDefinition = faPhone;
  networkChartIcon: IconDefinition = faSignal;
}
