import { Component, Inject, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MatIconModule } from '@angular/material/icon'
import { DarkModeService } from '../services/dark-mode.service';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';



@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [FontAwesomeModule, MatIconModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  envelopeIcon: IconDefinition = faEnvelope;
  phoneIcon: IconDefinition = faPhone;
 
}
