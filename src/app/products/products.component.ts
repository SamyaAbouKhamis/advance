import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'swiper/swiper-bundle.css';
import { Swiper } from 'swiper';
import { SwiperOptions } from 'swiper/types';

interface Image {
  src: string;
  category: string;
}


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsComponent implements OnInit {
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
    { src: 'assets/dahua.png', category: 'Cameras' },
    { src: 'assets/zk.png', category: 'Cameras' },
    { src: 'assets/MMC.png', category: 'Cameras' },
    { src: 'assets/zk.png', category: 'Cameras' },
    { src: 'assets/Mikrotik.png', category: 'Cameras' },
    { src: 'assets/Logo-Ubiq.png', category: 'Cameras' },
 
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

