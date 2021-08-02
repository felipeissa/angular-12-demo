import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-getter-setter',
  templateUrl: './getter-setter.component.html',
  styleUrls: ['./getter-setter.component.scss']
})
export class GetterSetterComponent implements OnInit {

  @Input() property: number;
  _property2: number;

  constructor() { }

  ngOnInit(): void {
  }

  get property2() {
    return this._property2;
  }

  @Input() set property2(value: number) {
    this._property2 = value * 100;
  }
}
