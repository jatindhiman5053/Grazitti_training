import { Component } from '@angular/core';
import { Course } from './models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  courses: Course[] = [
    { title: 'Angular Animation 1', isActive: false },
    { title: 'Angular Animation 2', isActive: false },
    { title: 'Angular Animation 3', isActive: false },
    { title: 'Angular Animation 4', isActive: false },
    { title: 'Angular Animation 5', isActive: false },
    { title: 'Angular Animation 6', isActive: false }
  ]

  title = 'Angular Animation';
}
