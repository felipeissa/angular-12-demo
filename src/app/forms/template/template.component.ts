import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  value = 'initialValue';
  hasError = false;

  constructor() { }

  ngOnInit() {
  }

  onBlur() {
    console.log(`Value changed. ${this.value}`);
    this.hasError = !this.value || this.value.length < 3;
  }

}
