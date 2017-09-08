import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {

		const todos = [
            {
                title: 'Утренний моцион',
                completed: true
            },
            {
                title: 'Прбежка',
                completed: false
            },
            {
                title: 'Сходить на рынок',
                completed: false
            },
            {
                title: 'Поработать',
                completed: false
            },
            {
                title: 'Поиграть в теннис',
                completed: false
            },
            {
                title: 'Почитать Книгу Книг',
                completed: false
            },

		];
		

		return { todos}; 

	}
}


