import { Component, OnInit, inject } from '@angular/core';
import { taskService } from '../services/task.service';

@Component({
  selector: 'show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {

  tasks: string[] = ['task 1', 'task 2', 'task 3', 'task 4'];

  taskService : taskService = inject(taskService);

  ngOnInit() {
    this.taskService.CreateTask.subscribe((value)=>{
      this.tasks.push(value);
    })
  }

}
