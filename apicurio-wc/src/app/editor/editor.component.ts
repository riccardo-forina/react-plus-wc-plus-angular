import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'apicurio-editor',
  template: `
    <p>
      editor works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
