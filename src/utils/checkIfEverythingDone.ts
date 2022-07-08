import { ITodo } from "../types/types";

export const checkIfEveryTodoDone: (data: ITodo[]) => boolean  = (todos) => {
  return todos.every(todo =>  todo.completed )
}