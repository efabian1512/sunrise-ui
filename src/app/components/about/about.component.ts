import { Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  selectedElementName: string = 'mision';

  scrollTo(ele: any, selectedElementName: string) {
    this.selectedElementName= selectedElementName;
    ele.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
  }
}
