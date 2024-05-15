import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { MatIconModule } from '@angular/material/icon'
import { DarkModeService } from '../services/dark-mode.service';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [FontAwesomeModule,MatIconModule ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
 
  faFacebook=faFacebook

}
