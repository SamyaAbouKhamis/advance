import { Routes } from '@angular/router';
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

export const routes: Routes = [


    {'path':'', component:TopbarComponent},

    {'path':'header', component:HeaderComponent},
    {'path':'hero', component:HeroComponent},
    {'path':'featured', component:FeaturedComponent},
    {'path':'About', component:AboutComponent},
    {'path':'counts', component:CountsComponent},
    {'path':'clients', component:ClientsComponent},
    {'path':'services', component:ServicesComponent},
    {'path':'portfolio', component:PortfolioComponent},
    {'path':'contact', component:ContactComponent},
    {'path':'footer', component:FooterComponent},
];
