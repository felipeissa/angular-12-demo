import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor() { }

  ngOnInit() {
    console.log('component initialized')
  }

  ngAfterViewInit() {
    console.log('component view is initialized');
  }

  ngOnDestroy() {
    console.log('component destroyed')
  }

}
