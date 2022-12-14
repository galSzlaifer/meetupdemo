import { Component, OnInit } from '@angular/core';
import {Observable, Subscription,timeout} from "rxjs";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public count: number = 0;
  //countObservable:Observable<{number:0}>
  //fierst
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    //performance.mark("add-started", {
    //  detail: "bla bla"
    //});

    //setTimeout(()=>{                           // <<<---using ()=> syntax
    //  console.log('go to BE and update the number');
    //  this.count++;
   //   //performance.measure('add-started');
    //}, 3000);
    this.count++;
  }

  subtract() {
    this.count--;
  }
}
