import { Routes } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
    {'path':'', component:TopbarComponent},
    {'path':'header', component:HeaderComponent},
    {'path':'hero', component:HeroComponent},
   
];
