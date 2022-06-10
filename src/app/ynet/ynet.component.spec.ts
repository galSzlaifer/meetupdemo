import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YnetComponent } from './ynet.component';

describe('YnetComponent', () => {
  let component: YnetComponent;
  let fixture: ComponentFixture<YnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YnetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
