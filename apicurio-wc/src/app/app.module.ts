import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [EditorComponent],
  imports: [BrowserModule],
  entryComponents: [EditorComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const apicurioEditor = createCustomElement(EditorComponent, { injector });
    customElements.define('apicurio-editor', apicurioEditor);
  }

  ngDoBootstrap() {}
}
