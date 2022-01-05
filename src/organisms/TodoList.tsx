import { useEffect, useState } from 'react';

import { Todo } from 'utils/types';
import { mockTodoList } from 'utils/mockData';
import TodoItem from 'molecules/TodoItem';

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    setTodoList(mockTodoList);
  }, []);

  return (
    <>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
