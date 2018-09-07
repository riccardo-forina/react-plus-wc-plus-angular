import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiEditorComponent, ApiDefinition } from 'apicurio-design-studio';

@Component({
  selector: 'apicurio-editor',
  template: `
    <api-editor [embedded]="true" [api]="apiDef">
    </api-editor>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class EditorComponent implements OnInit {

  apiDef: ApiDefinition;

  constructor() { }

  ngOnInit() {
    this.apiDef = new ApiDefinition();
    this.apiDef.createdBy = 'user1';
    this.apiDef.createdOn = new Date();
    this.apiDef.tags = [];
    this.apiDef.description = '';
    this.apiDef.id = 'api-1';
    this.apiDef.spec = {};
  }

}
