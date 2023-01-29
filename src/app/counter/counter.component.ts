import { Component, OnInit,Injectable } from '@angular/core';
import {Observable, Subscription,timeout} from "rxjs";
import { DateAdapter, MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';
import {FormGroup, FormControl} from '@angular/forms';

import {
  MatCalendar, MatCalendarCellCssClasses,
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';


@Injectable()
export class FiveDayRangeSelectionStrategy<D>
  implements MatDateRangeSelectionStrategy<D>
{
  constructor(private _dateAdapter: DateAdapter<D>) {}

  selectionFinished(date: D | null): DateRange<D> {
    console.log('inside strategy service selectionFinished date= ' + date );
    return this._createFiveDayRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    console.log('inside strategy service createPreview activeDate = ' + activeDate );
    return this._createFiveDayRange(activeDate);
  }

  private _createFiveDayRange(date: D | null): DateRange<D> {
    if (date) {
      const dow = this._dateAdapter.getDayOfWeek(date) +1;
      console.log('inside strategy service _createFiveDayRange dow = ' + dow );
      const start = this._dateAdapter.addCalendarDays(date, -(dow + 6) % 7);
      console.log('inside strategy service _createFiveDayRange start = ' + start );
      const end = this._dateAdapter.addCalendarDays(start, 6);
      console.log('inside strategy service _createFiveDayRange end = ' + end );
      return new DateRange<D>(start, end);
    }

    console.log('inside strategy service _createWeekRange dat e = null' + date );
    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: FiveDayRangeSelectionStrategy,
    },
  ],
})
export class CounterComponent implements OnInit {

  public count: number = 0;

  pikedRange: DateRange<Date | null> = new DateRange(null, null);
  pikedDate: Date | null;
  //range = new FormGroup({
  //  start: new FormControl<Date | null>(null),
  //  end: new FormControl<Date | null>(null),
  //});
  // @ts-ignore
  constructor(private dateAdapter: DateAdapter<Date>) {
    this.pikedDate = null;
  }
  onWeekChange(selectedDate: Date | null)
  {
    console.log('onWeekChange - day in the week ' + selectedDate);

    const dow = this.dateAdapter.getDayOfWeek(selectedDate as Date) +1;
    console.log('onWeekChange dow = ' + dow );
    const start = (-(dow + 6) % 7);
    const end = ((-(dow + 6) % 7) +6);
    console.log('onWeekChange days before selection = ' + start );
    console.log('onWeekChange days after selection  = ' + end);
    console.log('onWeekChange end day = ' + end );
    return this.selectWeek(selectedDate as Date,start,end);

  }
  selectWeek(selectedDate: Date, startDay: number, endDay: number)
  {
    const start = this.dateAdapter.addCalendarDays(selectedDate, startDay);
    const end = this.dateAdapter.addCalendarDays(selectedDate, endDay);
    this.pikedRange = new DateRange(start, end);
    return this.pikedRange;
  }
  onViewCalendarChanged(event:any){
    console.log('onViewCalendarChanged event =  ' + event);
  }
  clearWeekselection(){
    this.pikedRange = new DateRange<Date | null>(null,null);
  }
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
