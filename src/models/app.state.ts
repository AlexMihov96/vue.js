import { Todo } from "./todo"

export interface AppState {
    newTodo: Todo
    todos: Todo[]
}