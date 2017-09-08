import { Component} from '@angular/core';


import { Todo } from './shared/todo';
import { todos} from './shared/data.service';


@Component({

	moduleId: module.id,  // чтобы не писать путь в templateUtl
	selector: 'app' ,
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
		
})

export class AppComponent {
	title: string = 'Angular 2Do';
}




