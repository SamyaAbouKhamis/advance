import { Component, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MatIconModule } from '@angular/material/icon'

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [FontAwesomeModule, MatIconModule,MatMenuModule,MatButtonModule,MatProgressSpinnerModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  envelopeIcon: IconDefinition = faEnvelope;
  phoneIcon: IconDefinition = faPhone;
 

}
