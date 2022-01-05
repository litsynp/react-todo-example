import { useEffect, useState } from 'react';

import TodoCheckbox from 'atoms/TodoCheckbox';
import { Todo } from 'utils/types';
import { getDateString } from 'utils/datetime';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const [completed, setCompleted] = useState(todo.completed);

  useEffect(() => {
    setCompleted(todo.completed);
  }, [todo.completed]);

  return (
    <div className="flex align-middle break-all text-xl border-2 rounded border-gray-700 text-gray-700 p-2 my-4">
      <TodoCheckbox completed={completed} onToggle={() => onToggle(todo.id)} />
      <span className="w-full">{todo.text}</span>
      <span className="whitespace-nowrap mr-1 text-sm text-gray-400">
        {getDateString(todo.createdOn)}
      </span>
      <span
        className="cursor-pointer select-none ml-1"
        onClick={() => onDelete(todo.id)}
      >
        x
      </span>
    </div>
  );
};

export default TodoItem;
