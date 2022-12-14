import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Itask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task:Itask | undefined;
  @Output() delete: EventEmitter<Itask>= new EventEmitter<Itask>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(){
    console.log("Eliminar tarea", this.task?.title);
    this.delete.emit(this.task); //Notificamos al componente superior la tarea a eliminar
  }
}
