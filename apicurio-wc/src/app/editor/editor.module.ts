import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ApicurioEditorModule, ApicurioCommonComponentsModule } from 'apicurio-design-studio';
import { EditorComponent } from './editor.component';

@NgModule({
  declarations: [
    EditorComponent,
  ],
  imports: [
    CommonModule,
    ApicurioEditorModule,
    ApicurioCommonComponentsModule
  ],
  entryComponents: [EditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditorModule {}
