import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { ModalModule } from 'ngx-bootstrap';

import { EditorModule, EditorComponent } from './editor';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    EditorModule,
    ModalModule.forRoot()
  ],
  entryComponents: [EditorComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const apicurioEditor = createCustomElement(EditorComponent, { injector });
    customElements.define('apicurio-editor', apicurioEditor);
  }

  ngDoBootstrap() {}
}
