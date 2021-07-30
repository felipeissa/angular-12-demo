import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    textInput: new FormControl('', [
      Validators.required, Validators.minLength(3)
    ])
  });

  constructor() { }

  ngOnInit() {
    console.log(this.formGroup);

    this.formGroup.valueChanges.subscribe(() => {
      const { valid, status, value, pristine } = this.formGroup;
      console.log({ value, status, valid, pristine });
    })
  }

}
