import { Todo } from './types';

const mockTodoList: Todo[] = [
  {
    id: 1,
    text: 'Learn React',
    completed: false,
    createdOn: new Date(),
  },
  {
    id: 2,
    text: 'Learn TypeScript',
    completed: false,
    createdOn: new Date(),
  },
];

export { mockTodoList };
