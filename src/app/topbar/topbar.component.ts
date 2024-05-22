import { Component, Inject, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MatIconModule } from '@angular/material/icon'

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
;

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    TranslateModule,RouterLink
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class TopbarComponent  {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  envelopeIcon: IconDefinition = faEnvelope;
  phoneIcon: IconDefinition = faPhone;
  @Input() showAnimation = true;
  

  
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
    const currentUrl = this.router.url.split('/').slice(2).join('/');
    const htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.router.navigate([`/${lang}/${currentUrl}`]);

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
      // newLink.rel = 'stylesheet';
      // newLink.type = 'text/css';
      newLink.id = 'langCss';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
  
}
