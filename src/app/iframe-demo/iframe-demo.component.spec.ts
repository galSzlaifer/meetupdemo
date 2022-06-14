import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeDemoComponent } from './iframe-demo.component';

describe('IframeDemoComponent', () => {
  let component: IframeDemoComponent;
  let fixture: ComponentFixture<IframeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
