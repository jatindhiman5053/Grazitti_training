import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcartComponent } from './searchcart.component';

describe('SearchcartComponent', () => {
  let component: SearchcartComponent;
  let fixture: ComponentFixture<SearchcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchcartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
