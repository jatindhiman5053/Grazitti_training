import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokimonapiComponent } from './pokimonapi.component';

describe('PokimonapiComponent', () => {
  let component: PokimonapiComponent;
  let fixture: ComponentFixture<PokimonapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokimonapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokimonapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
