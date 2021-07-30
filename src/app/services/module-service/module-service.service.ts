import { Injectable } from '@angular/core';

@Injectable()
export class ModuleServiceService {

  constructor() { }

  public calculate(): number {
    return Math.random() * 300;
  }
}
