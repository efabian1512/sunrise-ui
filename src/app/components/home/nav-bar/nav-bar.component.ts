import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @Output() scroll: EventEmitter<string> = new EventEmitter<string>();
  selectedElementName: string = 'home';

  scrollTo(componentName: string) {
    this.selectedElementName = componentName;
    this.scroll.emit(componentName);
  }

  setHomeAsActiveItem() {
    this.selectedElementName = 'home';
  }
}