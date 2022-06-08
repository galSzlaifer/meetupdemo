import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCssCoolStuffComponent } from './more-css-cool-stuff.component';

describe('MoreCssCoolStuffComponent', () => {
  let component: MoreCssCoolStuffComponent;
  let fixture: ComponentFixture<MoreCssCoolStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreCssCoolStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreCssCoolStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
