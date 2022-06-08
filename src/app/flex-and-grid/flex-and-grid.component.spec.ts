import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexAndGridComponent } from './flex-and-grid.component';

describe('FlexAndGridComponent', () => {
  let component: FlexAndGridComponent;
  let fixture: ComponentFixture<FlexAndGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexAndGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexAndGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
