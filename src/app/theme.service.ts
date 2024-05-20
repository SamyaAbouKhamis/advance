// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ThemeService {
//   private darkThemeKey = 'isDarkTheme';
//   private isDarkTheme = false;

//   constructor() {
//     const savedTheme = localStorage.getItem(this.darkThemeKey);
//     if (savedTheme) {
//       this.isDarkTheme = JSON.parse(savedTheme);
//       this.applyTheme();
//     }
//   }

//   toggleTheme(): void {
//     this.isDarkTheme = !this.isDarkTheme;
//     localStorage.setItem(this.darkThemeKey, JSON.stringify(this.isDarkTheme));
//     this.applyTheme();
//   }

//   applyTheme(): void {
//     if (this.isDarkTheme) {
//       document.body.classList.add('dark-theme');
//       document.body.classList.remove('light-theme');
//     } else {
//       document.body.classList.add('light-theme');
//       document.body.classList.remove('dark-theme');
//     }
//   }
// }
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly darkThemeKey = 'isDarkTheme';
  private isDarkTheme = false;

  constructor() {
    const savedTheme = localStorage.getItem(this.darkThemeKey);
    if (savedTheme !== null) {
      this.isDarkTheme = JSON.parse(savedTheme);
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem(this.darkThemeKey, JSON.stringify(this.isDarkTheme));
    this.applyTheme();
  }

  applyTheme(): void {
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }

}
