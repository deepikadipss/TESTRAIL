import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationWiseComponent } from './application-wise.component';

describe('ApplicationWiseComponent', () => {
  let component: ApplicationWiseComponent;
  let fixture: ComponentFixture<ApplicationWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
