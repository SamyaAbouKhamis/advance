
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swiper from 'swiper';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


// Install Swiper modules


interface Image {
  src: string;
  category: string;
}


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent implements OnInit {
  swiperConfig: any;

  // images: string[] = [
  //   'assets/camera1.jpg',
  //   'assets/camea2.jpg',
  //   'assets/camea2.jpg',
  //   '../../assets/portfolio-1.jpg',
  //   '../../assets/portfolio-2.jpg',
  //   '../../assets/portfolio-3.jpg',

  // ];
  images: Image[] = [
    { src: 'assets/camera1.jpg', category: 'Cameras' },
    { src: 'assets/camea2.jpg', category: 'Cameras' },
    { src: '../../assets/camera/portfolio-2.jpg', category: 'Servers' },
    { src: '../../assets/about.jpg', category: 'Servers' },
    { src: '../../assets/camera/portfolio-3.jpg', category: 'Networks' },
    { src: '../../assets/camera/portfolio-1.jpg', category: 'Networks' },
  ];
  filteredImages: Image[] = [...this.images];
  selectedCategory: string = 'All';

  filterImages(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredImages = [...this.images];
    } else {
      this.filteredImages = this.images.filter(
        (image) => image.category === category
      );
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.swiperConfig = {
      slidesPerView: 3,
      spaceBetween: 7,
      navigation: true,
    };
  }
}