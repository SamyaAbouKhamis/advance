import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioComponent {

}
