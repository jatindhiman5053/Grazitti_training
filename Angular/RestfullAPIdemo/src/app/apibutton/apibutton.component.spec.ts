import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIbuttonComponent } from './apibutton.component';

describe('APIbuttonComponent', () => {
  let component: APIbuttonComponent;
  let fixture: ComponentFixture<APIbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [APIbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(APIbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
