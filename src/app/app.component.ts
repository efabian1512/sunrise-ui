import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CarouselImage } from './types/carousel-image';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sunrise';
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

  @ViewChild('routerOutlet') router!: ElementRef;

  scrollTo(componentName: any) {
    Array.from(this.router.nativeElement.nextElementSibling.children).forEach((child: any) => {
      if (child.localName === componentName) {
        child.scrollIntoView(false);
      }
    });
  }
}
