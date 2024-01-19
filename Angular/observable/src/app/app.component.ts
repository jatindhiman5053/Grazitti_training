import { Component, OnInit } from '@angular/core';
import { Observable, of, from, map, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'observable';

  data: any[] = [];

  //observable
  // myObservale = new Observable((observer) => {
  //   observer.next([1,2,3,4,5])
  // })






  //observable
  // myObservale = new Observable((observer) => {
  //   console.log("Observale start");
  //   setTimeout(() => { observer.next("1"); }, 1000);
  //   setTimeout(() => { observer.next("2"); }, 2000);
  //   setTimeout(() => { observer.next("3"); }, 3000);
  //   setTimeout(() => { observer.error(new Error('This is an error')) }, 3000);
  //   setTimeout(() => { observer.next("4"); }, 4000);
  //   setTimeout(() => { observer.next("5"); }, 5000);
  //   setTimeout(() => { observer.complete(); }, 6000);

  //   // observer.next("1");
  //   // observer.next("2");
  //   // observer.next("3");
  //   // observer.next("4");
  //   // observer.next("5");
  // });

  myObservale = from([2, 4, 6, 8, 10, 12]);

  transformOb = this.myObservale.pipe(map((val)=>{
    return val * 5;
  }),filter((val, i)=>{
    return val % 4 === 0;
  }))

  // filterOb = this.transformOb.pipe(filter((val, i)=>{
  //   return val % 4 === 0;
  // }))



  GetAsyncData() {
    //observer
    // this.myObservale.subscribe((val: any) => {
    //   this.data.push(val);
    // });
    // this.myObservale.subscribe((val: any) => {
    //   this.data.push(val);
    // }, (error) => {
    //   alert(error.message);
    // }, () => {
    //   alert("Observable has completed")
    // });

    this.transformOb.subscribe({
      next: (val: any) => {
        this.data.push(val);
      },
      error(err) {
        alert(err.message);
      },
      // complete() {
      //   alert("Observable has completed")
      // },
    })

  }

  // array1=[1,2,3,4,5]
  // array2 = ["A","B","C","D","E"]

  // myObservale = of(this.array1,this.array2,40023,'Jatin','Parul');

  // myObservale = from(this.array1)



  ngOnInit() {
    // this.myObservale.subscribe((val) => {
    //   console.log(val);
    // }, (error) => {
    //   alert(error.message);
    // }, () => {
    //   alert("Observable has completed")
    // });
  }
}
