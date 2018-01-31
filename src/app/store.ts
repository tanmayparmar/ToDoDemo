import { ITodo } from './todo';
import { ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './action';

export interface IAppState {
  todos: ITodo[];
  lastUpdate: DateTimeFormat;
}
export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
 };

 export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
      case ADD_TODO:
          action.todo.id = state.todos.length + 1;
          return Object.assign({}, state, {
              todos: state.todos.concat(Object.assign({}, action.todo)),
              lastUpdate: new Date()
          });
      case REMOVE_TODO:
          return Object.assign({}, state, {
              todos: state.todos.filter(t => t.id !== action.id),
              lastUpdate: new Date()
          });
      case REMOVE_ALL_TODOS:
          return Object.assign({}, state, {
              todos: [],
              lastUpdate: new Date()
          });
  }
  return state;
}
