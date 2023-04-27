import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottunToggleComponent } from './bottun-toggle.component';

describe('BottunToggleComponent', () => {
  let component: BottunToggleComponent;
  let fixture: ComponentFixture<BottunToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottunToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottunToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
