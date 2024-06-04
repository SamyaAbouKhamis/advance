import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService implements OnInit {
  TranslateService = inject(TranslateService);
  currentLang: string = 'en';
  setDefaultLang(lang: string): void {
    this.TranslateService.setDefaultLang(lang);
  }
  ngOnInit() {
    const decodedUrl = decodeURIComponent(this.router.url);
    const urlSegments = decodedUrl.split('/');
    this.currentLang = urlSegments[1] || 'en';
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
  switchLanguage(lang: string) {
    this.router.navigate([`/${lang}`]);
  }
}
