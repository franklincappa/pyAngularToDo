import { Levels, Itask } from './../../models/interfaces/Task.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  /* TODO: Reformular como una lista de tareas */
  task1: Itask={
    title: 'Task 1',
    description: 'Description 1',
    completed: true,
    level: Levels.Info
  }

  task2: Itask={
    title: 'Task 2',
    description: 'Description 2',
    completed: true,
    level: Levels.Urgent
  }

  task3: Itask={
    title: 'Task 3',
    description: 'Description 3',
    completed: true,
    level: Levels.Urgent
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: Itask){
    /* TODO: Sustituir por un Splice para eliminar de la lista de tareas */
    alert(`Se procede a eliminar la tarea: ${task.title}`);

  }
}
