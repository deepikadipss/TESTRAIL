import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleWiseComponent } from './module-wise.component';

describe('ModuleWiseComponent', () => {
  let component: ModuleWiseComponent;
  let fixture: ComponentFixture<ModuleWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
