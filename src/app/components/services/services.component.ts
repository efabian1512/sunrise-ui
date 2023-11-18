import { Component, OnInit } from '@angular/core';
import { SERVICES } from 'src/app/constants/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services: { [key: string]: string }[] = SERVICES;

  constructor() {}

}
