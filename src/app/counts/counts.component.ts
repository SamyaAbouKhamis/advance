import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSimplybuilt } from '@fortawesome/free-brands-svg-icons';
import { faSmile, faFolder, faUserFriends, faHeadset } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counts',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './counts.component.html',
  styleUrl: './counts.component.css'
})
export class CountsComponent {
  simpleIcon = faSmile;
  documentFolderIcon = faFolder;
  liveSupportIcon = faHeadset;
  usersAlt5Icon = faUserFriends;
}
