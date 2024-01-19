import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderapiComponent } from './placeholderapi.component';

describe('PlaceholderapiComponent', () => {
  let component: PlaceholderapiComponent;
  let fixture: ComponentFixture<PlaceholderapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceholderapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceholderapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
