import { Component, ElementRef, OnInit } from '@angular/core';
import { SERVICES } from 'src/app/constants/services';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services: { [key: string]: string }[] = SERVICES;

  constructor(private el: ElementRef) {}

  //scrollIntoView() {
    //this.el.nativeElement.scrollIntoView(false);
  //}
}
