import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  public veryBadCodeHere(): void {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
  }
}
