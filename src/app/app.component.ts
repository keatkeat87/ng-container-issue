import { Component, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  vcr: ViewContainerRef;

  @ViewChild('template', { read: TemplateRef, static: true })
  template: TemplateRef<any>;

  click() {
    this.vcr.createEmbeddedView(this.template, undefined, 0);
  }
}
