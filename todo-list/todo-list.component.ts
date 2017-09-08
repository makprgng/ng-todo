import { Component, OnInit} from '@angular/core';
import { Todo} from '../shared/todo';
import { TodoService} from '../shared/todo.service';


@Component({

	moduleId: module.id, 
	selector: 'todo-list' ,
	templateUrl: 'todo-list.component.html',
	styleUrls: ['todo-list.component.css']
		
})

export class TodoListComponent implements OnInit{
	todos: Todo[];
	constructor( private totdoService: TodoService){
		this.todos = [];
	}


	ngOnInit() {
		this.totdoService.getTodos().then(todos => this.todos = todos);
	}


	toggle(todo: Todo) {
		this.totdoService.toggleTodo(todo);
	}

	delete(todo: Todo)  {
		this.totdoService.deleteTodo(todo);
	}


}



