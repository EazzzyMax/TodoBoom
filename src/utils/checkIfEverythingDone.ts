import { ITodo } from "../types/types";

export const checkIfEverythingDone: (data: ITodo[]) => boolean  = (todos) => {
  return todos.every(todo =>  todo.completed )
}