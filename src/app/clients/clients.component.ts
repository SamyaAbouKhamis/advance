import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class ClientsComponent {


  @ViewChild('swiperContainer')
  swiperContainer!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    new Swiper(this.swiperContainer.nativeElement, {
      // Swiper options here
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true
    });
  }
}
