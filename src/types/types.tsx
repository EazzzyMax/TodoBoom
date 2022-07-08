export interface ITodo {
  id: number;
  title: string;
  desc: string;
  completed: boolean;
}

export interface ICard {
  id: number;
  archived: boolean;
  cardName: string;
  todos: ITodo[];
}
