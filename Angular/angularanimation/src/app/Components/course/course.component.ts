import { Component, Input } from '@angular/core';
import { Course } from '../../models/course.model';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CourseComponent {
  @Input() course!: Course;
}
