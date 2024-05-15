import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeEnabledSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  darkModeEnabled$ = this.darkModeEnabledSubject.asObservable();

  constructor() {
    // Load dark mode preference from browser storage
    this.darkModeEnabledSubject.next(localStorage.getItem('darkModeEnabled') === 'true');
  }

  toggleDarkMode() {
    const currentMode = this.darkModeEnabledSubject.value;
    this.darkModeEnabledSubject.next(!currentMode);
    localStorage.setItem('darkModeEnabled', (!currentMode).toString());
  }
}