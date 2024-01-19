import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  laptops: number = 0;

  @Input()
  smartphones: number = 0;

  @Input()
  fragrances: number = 0;

  @Input()
  skincare: number = 0;

  @Input()
  home_decoration: number = 0;


  @Output()
  SelectedRadioFilterButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  SelectedRadioFilterButton: string = 'all';


  onSelectedRadioFilterButtonChanged() {
    this.SelectedRadioFilterButtonChanged.emit(this.SelectedRadioFilterButton);
  }
}
