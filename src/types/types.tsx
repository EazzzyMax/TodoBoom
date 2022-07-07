export interface ITodo {
  id: number;
  title: string;
  desc: string;
  completed: boolean;
}

export interface ICard {
  cardName: string;
  todos: ITodo[];
}
