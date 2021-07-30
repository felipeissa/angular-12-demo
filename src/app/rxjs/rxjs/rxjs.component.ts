import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { RootServiceService } from 'src/app/services/root-service.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {

  result: string = '';
  subscription: Subscription;
  timesCalled = 0;

  constructor(
    private readonly service: RootServiceService
  ) { }

  getSingleValue() {
    this.service.calculate()
      .subscribe(value => this.updateResult(value, 'singleValue'))
  }

  getStreamValue() {
    this.subscription = this.service.stream()
      .subscribe(value => this.updateResult(value, 'streamValue'))
  }

  stopSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getMappedValue() {
    this.service.calculateWithoutTimer()
      .pipe(map(value => ({
        returnedValue: value,
        timesCalled: ++this.timesCalled
      })))
      .subscribe(value => this.updateResult(JSON.stringify(value), 'mappedValue'))
  }

  getObservableWrong() {
    this.service.calculateWithoutTimer()
      .pipe(map(value => {
        console.log(value);
        return this.service.calculateWithoutTimer();
      }))
      .subscribe(data => {
        this.updateResult(data, 'observableWrong')
      });
  }

  getObservableCorrect() {
    this.service.calculateWithoutTimer()
      .pipe(switchMap(value =>
        this.service.calculateWithoutTimer()
      ))
      .subscribe(data => this.updateResult(data, 'observableCorrect'))
  }

  updateResult(value: any, origin: string) {
    this.result = `Value received from '${origin}' was ${value}`;
  }
}
