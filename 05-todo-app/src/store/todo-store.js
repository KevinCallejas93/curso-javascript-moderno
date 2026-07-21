import { Todo } from "../todos/models/todo-model";

export const Filters = {
    All: 'All',
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
    loadStore();
    console.log('Init Store 🥑');
};

const loadStore = () => {
    if ( !localStorage.getItem('state') ) return;

    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state') );
    state.todos = todos;
    state.filter = filter;
};

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify( state ));
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

    saveStateToLocalStorage();
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

    saveStateToLocalStorage();

};

/**
 * 
 * @param {String} todoID 
 */
const deleteTodo = ( todoID ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoID );
    saveStateToLocalStorage();
};

/**
 * 
 * @param {String} todoID 
 */
const deleteCompleted = ( todoID ) => {
    state.todos = state.todos.filter( todo => !todo.done );
    saveStateToLocalStorage();
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
    saveStateToLocalStorage();
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

