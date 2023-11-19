import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

 

  constructor(private el: ElementRef) {

  }
  scrollIntoView() {
    this.el.nativeElement.scrollIntoView(false);
  }

  scrollTo(ele: any, selectedElementName: string) {
    ele.scrollIntoView(false, {behavior: 'smooth', block: 'start', inline: 'start'});
  }
}
