import { Component, inject } from '@angular/core';
import { taskService } from '../services/task.service';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  taskname: string = '';
  taskService: taskService = inject(taskService);

  Createtaskbtn() {
    console.log(this.taskname);

    this.taskService.OnCreatetask(this.taskname);
  }

}
