import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  value = 'some value'

  constructor() { }

  ngOnInit() {
  }

  onChildEmit(value: number) {
    this.value = `child has emitted number '${value}'`;
  }

}
