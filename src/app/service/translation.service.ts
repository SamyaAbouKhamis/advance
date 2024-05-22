import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService implements OnInit{
  TranslateService = inject(TranslateService);

  setDefaultLang(lang: string): void {
    this.TranslateService.setDefaultLang(lang);
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const lang = params.get('lang') || 'en';
      this.changeLanguage(lang);
    });
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,
    @Inject(DOCUMENT) public document: Document
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  changeLanguage(lang: string) {
    let htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.TranslateService.setDefaultLang(lang);
    this.TranslateService.use(lang);
    this.changeCssFile(lang);
  }

  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName(
      'head'
    )[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById(
      'langCss'
    ) as HTMLLinkElement;

    let bundleName = lang === 'ar' ? 'arabicStyle.css' : 'englishStyle.css';

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      let newLink = this.document.createElement('link');
      // newLink.rel = 'stylesheet';
      // newLink.type = 'text/css';
      // newLink.id = 'langCss';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
  switchLanguage(lang: string) {
    this.router.navigate([`/${lang}`]);
  }
}
