import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresultComponent } from './searchresult.component';

describe('SearchresultComponent', () => {
  let component: SearchresultComponent;
  let fixture: ComponentFixture<SearchresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
