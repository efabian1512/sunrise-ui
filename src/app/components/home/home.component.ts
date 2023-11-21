import { Component } from '@angular/core';
import { CarouselImage } from 'src/app/types/carousel-image';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images: CarouselImage[] = [
    {
      imageSrc: '../../../assets/image-3000x1500.jpg',
      imageAlt: 'Sunrise-Banner'
    },
    {
      imageSrc: '../../../assets/peticion-de-familiares-en-usa.jpg',
      imageAlt: 'Family'
    }
  ]
}
