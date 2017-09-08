"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = [
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
        return { todos: todos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
