import { Todo } from "../todos/models/todo-model";

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state = {
    todos: [
        new Todo('Piedra del Alma'),
        new Todo('Piedra del del Infinito'),
        new Todo('Piedra del del Tiempo'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log( state );
    console.log('Init Store 🥑');
};

export default {
    initStore,
}