import { Component, Input, OnInit } from '@angular/core';
import { CarouselImage } from 'src/app/types/carousel-image';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: CarouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;
  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImages();
    }

    this.images.map((image: CarouselImage, index: number) => {
      image.id = index;
      image.marginLeft = 0;
    });
  }

  autoSlideImages(): void {
    setInterval(()=> {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
    const firstItem = this.images.find((image: CarouselImage) => image.id === 0);

    if (firstItem) {
      firstItem.marginLeft = -100 * index;
    }
  }

  onPreviousClick(): void {
    let finalPercentage = 0;
    let previousPosition =  this.selectedIndex - 1;

    if (previousPosition >= 0) {
      finalPercentage = -100 * previousPosition;
    } else {
      previousPosition = this.images.length - 1;
      finalPercentage = -100 * previousPosition;
    }

    const firstItem = this.images.find((image: CarouselImage) => image.id === 0);

    if (firstItem) {
      firstItem.marginLeft = finalPercentage;
    }

    this.selectedIndex = previousPosition;
    // if(this.selectedIndex === 0) {
    //   this.selectedIndex = this.images.length - 1;
    // } else {
    //   this.selectedIndex--;
    // }
  }

  onNextClick(): void {
    let finalPercentage = 0;
    let nextPosition = this.selectedIndex + 1;

    if(nextPosition <= this.images.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }

    const firstItem = this.images.find((image: CarouselImage) => image.id === 0);

    if (firstItem) {
      firstItem.marginLeft = finalPercentage;
    }

    this.selectedIndex = nextPosition;
    // if(this.selectedIndex === this.images.length -1) {
    //   this.selectedIndex = 0;
    // } else {
    //   this.selectedIndex ++;
    // }
  }
}
