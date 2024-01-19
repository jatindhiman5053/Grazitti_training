import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [StudentService]
})
export class AppComponent implements OnInit {
  title = 'angularpipes';
  students!: Student[];
  totalMarks!: number;
  filterText: string = '';

  constructor(private studentService: StudentService){

  }

  ngOnInit(){
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }
}
