import { Todo } from "../todos/models/todo-model";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state = {
    todos: [
        new Todo('Piedra del Alma'),
        new Todo('Piedra del del Infinito'),
        new Todo('Piedra del del Tiempo'),
        new Todo('Piedra del del Poder'),
        new Todo('Piedra del del Realidad'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log( state );
    console.log('Init Store 🥑');
};

const loadStore = () => {
    throw new Error('Not implemented');
};

/**
 * 
 * @param {String} filter 
 */
const getTodo = ( filter = Filters.All ) => {
    switch ( filter ) {
        case Filters.All:
            return [...state.todos];
        
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done ); 
        default:
            throw new Error(`Option ${ filter } is not valid.`);
            break;
    }
};

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if ( !description ) throw new Error('Description is required');

    state.todos.push( new Todo( description ) );
};

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
    
    state.todos = state.todos.map( todo => {
        if ( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo;
    });

};

/**
 * 
 * @param {String} todoID 
 */
const deleteTodo = ( todoID ) => {
    state.todos = state.todo.filter( todo => todo.id !== todoId );
};

/**
 * 
 * @param {String} todoID 
 */
const deleteCompleted = ( todoID ) => {
    state.todos = state.todo.filter( todo => todo.done );
};

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    if( !Object.keys( Filters ).includes( newFilter )){
        throw new Error(`Filter ${ newFilter } no existe`);
        
    };
    state.filter = newFilter;
};


const getCurrentFilter = () => {
    return state.filter;
};

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodo,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}

