import { AfterViewInit, Component, DoCheck, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HelpersService } from '../helpers/helpers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-navigation-demo',
  templateUrl: './navigation-demo.component.html',
  styleUrls: ['./navigation-demo.component.scss']
})
export class NavigationDemoComponent implements DoCheck, OnDestroy {
  public runVeryBadCode: boolean = false;
  private sub: Subscription;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private helper: HelpersService, private route: ActivatedRoute) {
    this.sub = route.queryParams.subscribe(params=> {
      this.runVeryBadCode = Object.keys(params).length > 0;
    });
  }
  ngDoCheck(): void {
    if (this.runVeryBadCode) {
      this.helper.veryBadCodeHere();
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
