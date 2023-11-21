import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sunrise';

  @ViewChild('routerOutlet') router!: ElementRef;

  scrollTo(componentName: any) {
    Array.from(this.router.nativeElement.nextElementSibling.children).forEach((child: any) => {
      if (child.localName === componentName) {
        child.scrollIntoView(false);
      }
    });
  }
}
