import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { faGlobe, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DOCUMENT, CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {
  animate,
  sequence,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    TranslateModule,
    FontAwesomeModule,
    MatToolbarModule, 
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('linkAnimation', [
      state(
        'inactive',
        style({
          transform: 'scale(1)',
          opacity: 1,
        })
      ),
      state(
        'active',
        style({
          transform: 'scale(1.1)',
          opacity: 0.5,
        })
      ),
      transition('inactive => active', [
        sequence([
          animate('0ms', style({ opacity: 1 })), // Initial state with no delay
          animate('100ms', style({ opacity: 1 })), // Delay of 100ms
          animate('300ms ease-in'),
        ]),
      ]),
      transition('active => inactive', [animate('300ms ease-out')]),
    ]),
  ],
})
export class HeaderComponent {
  globeIcon = faGlobe;

  currentLang: string = 'en';
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.activatedRoute.snapshot.fragment;
        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100); 
        }
        const urlSegments = this.router.url.split('/');
        this.currentLang = urlSegments[1] || 'en'; 
      }
    });
  }

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

    @Inject(DOCUMENT) private document: Document
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  changeLanguage(lang: string) {
    const htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.currentLang = lang;
    this.router.navigate(['/', this.currentLang]);
    this.changeCssFile(lang);
  }
  changeCssFile(lang: string) {
    const headTag = this.document.getElementsByTagName(
      'head'
    )[0] as HTMLHeadElement;
    const existingLink = this.document.getElementById(
      'langCss'
    ) as HTMLLinkElement;

    const bundleName = lang === 'ar' ? 'styles-ar.css' : 'styles-en.css';

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      const newLink = this.document.createElement('link');
      newLink.id = 'langCss';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
  activeLink: string = '';

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
  // delayedNavigation(event: Event, link: string, url: string): void {
  //   event.preventDefault();
  //   this.setActiveLink(link);
  //   setTimeout(() => {
  //     window.location.href = url;
  //   }, 600);
  // }
}


