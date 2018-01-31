import { ITodo } from './todo';
import { firebase } from './firebase';

export interface ITodo {
  id: number;
  description: string;
  isCompleted: boolean;
}
export class Task implements ITodo {
  id;
  isCompleted = false;
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  description;

  constructor(description: string) {
    this.description = description;
  }
}
