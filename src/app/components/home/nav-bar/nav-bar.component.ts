import { Component, EventEmitter, Output } from '@angular/core';
import { NAVBARTABS } from 'src/app/constants/navbartabs';
import { NavBarTab } from 'src/app/models/navbartab.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  tabs: NavBarTab[] = NAVBARTABS;
  @Output() scroll: EventEmitter<string> = new EventEmitter<string>();
  selectedElementName: string = 'home';



  scrollTo(componentName: any) {
    this.selectedElementName = componentName;
    this.scroll.emit(componentName);
  }

  setHomeAsActiveItem() {
    this.selectedElementName = 'home';
  }
}