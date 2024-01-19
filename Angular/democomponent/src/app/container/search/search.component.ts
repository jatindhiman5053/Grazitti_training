import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchtext: string = " ";
  

  @Output()
  SearchChange: EventEmitter<string> = new EventEmitter<string>();
  
  onSearchChange(){
    this.SearchChange.emit(this.searchtext);
  }

  @ViewChild('searchInput') searchInput :ElementRef;
  
  updatesearchtext(){
    this.searchtext = this.searchInput.nativeElement.value;
    this.SearchChange.emit(this.searchtext);
  }
  
}
