import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-binding',
  templateUrl: './child-binding.component.html',
  styleUrls: ['./child-binding.component.scss']
})
export class ChildBindingComponent implements OnInit {

  @Input() parentValue: string;
  @Output() childValue: EventEmitter<number> = new EventEmitter();

  timesEmitted = 0;
  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.childValue.emit(++this.timesEmitted)
  }
}
