import { RouterModule, Routes } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { CountsComponent } from './counts/counts.component';
import { ClientsComponent } from './clients/clients.component';
import { FeaturedComponent } from './featured/featured.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  {
    path: ':lang',
    component: AppComponent,
    children: [
      { path: 'header', component: HeaderComponent },
      { path: 'hero', component: HeroComponent },
      { path: 'featured', component: FeaturedComponent },
      { path: 'about', component: AboutComponent },
      { path: 'counts', component: CountsComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'back-to-top', component: BackToTopComponent },
    ],
  },
];
// export const routes: Routes = [
//   { path: '', redirectTo: 'en', pathMatch: 'full' },

//       { path: 'header', component: HeaderComponent },
//       { path: 'hero', component: HeroComponent },
//       { path: 'featured', component: FeaturedComponent },
//       { path: 'About', component: AboutComponent },
//       { path: 'counts', component: CountsComponent },
//       { path: 'clients', component: ClientsComponent },
//       { path: 'services', component: ServicesComponent },
//       { path: 'portfolio', component: PortfolioComponent },
//       { path: 'contact', component: ContactComponent },
//       { path: 'footer', component: FooterComponent },
//       { path: 'back-to-top', component: BackToTopComponent },
   
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutes {}