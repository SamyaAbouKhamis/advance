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
  group,
  sequence,
  style,
  
} from '@angular/animations';
import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { trigger, state, style as animationStyle, transition, animate as ngAnimate } from '@angular/animations';

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
          color: 'black',
        })
      ),
      state(
        'active',
        style({
          transform: 'scale(1.1)',
          opacity: 0.5,
          color: '#128ea6',
        })
      ),
      transition('inactive => active', [
        group([
          animate('100ms', style({ opacity: 1 })), // initial delay
          animate(
            '300ms 100ms ease-in',
            style({
              transform: 'scale(1.1)',
              opacity: 0.5,
              color: '#128ea6',
            })
          ),
        ]),
      ]),
      transition('active => inactive', [
        group([
          animate(
            '300ms ease-out',
            style({
              transform: 'scale(1)',
              opacity: 0.5, // add intermediate opacity for fade out
              color: 'black',
            })
          ),
          animate('300ms 100ms ease-out', style({ opacity: 1 })),
        ]),
      ]),
    ]),
    trigger('pageAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'translateX(-100%)' })
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  globeIcon = faGlobe;
  currentLang: string = 'en';
  constructor(
    private translateService: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private animationBuilder: AnimationBuilder,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.activatedRoute.snapshot.fragment;
        if (fragment) {
          setTimeout(() => {
            const decodedFragment = decodeURIComponent(fragment);
            const element = document.getElementById(decodedFragment);
            if (element) {
              this.scrollToElement(element);
            }
          }, 100);
        }
        // Decode the entire URL to handle any double encoding issues
        const decodedUrl = decodeURIComponent(this.router.url);
        const urlSegments = decodedUrl.split('/');
        // this.currentLang = urlSegments[1] || 'en';
        // this.currentLang = urlSegments[2] || 'ar';
      }
    });
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
    const element = document.getElementById(link);
    if (element) {
      this.scrollToElement(element);
    }
  }


  private scrollToElement(element: HTMLElement): void {
    const animation = this.animationBuilder.build([
      style({ scrollTop: window.pageYOffset }),
      animate('1s ease', style({ scrollTop: element.offsetTop })),
    ]);

    const player = animation.create(document.body);
    player.onDone(() =>
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    );
    player.play();
  }
}
  // delayedNavigation(event: Event, link: string, url: string): void {
  //   event.preventDefault();
  //   this.setActiveLink(link);
  //   setTimeout(() => {
  //     window.location.href = url;
  //   }, 600);
  // }



