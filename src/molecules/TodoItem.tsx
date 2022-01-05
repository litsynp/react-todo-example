import { useEffect, useState } from 'react';

import { Todo } from 'utils/types';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [completed, setCompleted] = useState(false);

  const onToggle = () => {
    setCompleted(!completed);
  };

  useEffect(() => {
    setCompleted(todo.completed);
  }, []);

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span>{todo.text}</span>
    </div>
  );
};

export default TodoItem;
