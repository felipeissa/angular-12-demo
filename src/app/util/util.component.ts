import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.scss']
})
export class UtilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Play around on https://www.typescriptlang.org/play');
  }


  nullish() {
    const log = (a: any, b: any) => console.log(`nullish: ${a}, or: ${b}`);

    let nullish: any = 0 ?? 1;
    let or: any = 0 || 1;
    log(nullish, or);

    nullish = '' ?? 'default';
    or = '' || 'default';
    log(nullish, or);

    nullish = null ?? 'default';
    or = null || 'default';
    log(nullish, or);

    nullish = undefined ?? 'default';
    or = undefined || 'default';
    log(nullish, or);

    nullish = false ?? 'default';
    or = false || 'default';
    log(nullish, or);
  }


  chaining() {
    const object: any = {
      inner: {
        key: 'value'
      }
    };

    console.log(object.some.invalid.value);
    console.log(object.inner.value);
    console.log(object.inner.key);
    // console.log(object?.some?.invalid?.value);
    // console.log(object?.inner?.value);
    // console.log(object.inner.key);
    // console.log(object?.some?.invalid?.value ?? 'default') ;
  }

  objectDestructuring() {
    const user = {
      id: '1',
      name: 'Felipe',
      company: 'Ericsson',
      role: 'Developer'
    };

    const { company, name: userName, ...otherProperties } = user;
    console.log(company, userName, otherProperties);
  }

  arrayDestructuring() {
    const array = ['first', 'second', 'third', 'any'];

    const [j, , l, ...others] = array;
    console.log({
      j, l, others
    })
  }


  objectSpread() {
    const user = {
      id: '1',
      name: 'Felipe',
      company: 'Ericsson',
      role: 'Developer',
      innerProperty: {
        key: 'value'
      }
    };

    const copyUser = { ...user };
    user.role = 'Tester';

    console.log({ userRole: user.role, copyRole: copyUser.role });

    user.innerProperty.key = 'another value';
    console.log({ userValue: user.innerProperty.key, copyRole: copyUser.innerProperty.key });
  }

  arraySpread() {
    const firstArray = [1, 2, 3];
    const secondArray = [4, 5, 6];

    const joinArray = [
      ...firstArray,
      ...secondArray,
      78
    ];

    console.log(joinArray)
  }
}
