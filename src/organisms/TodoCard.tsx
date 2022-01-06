import React, { useCallback, useEffect, useState } from 'react';

import TodoTitle from 'molecules/TodoTitle';
import TodoList from 'molecules/TodoList';
import NewTodoInputBox from 'molecules/NewTodoInputBox';
import { Todo } from 'utils/types';
import TodoApi from 'api/TodoApi';

function TodoPage() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const onToggle = useCallback(
    async (id: number) => {
      await TodoApi.updateTodo({
        id,
        data: { text: todoList[id].text, completed: !todoList[id].completed },
      });

      setTodoList(
        todoList.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      );
    },
    [TodoApi, todoList],
  );

  const onDelete = useCallback(
    async (id: number) => {
      await TodoApi.deleteTodo(id);

      const todoListResult = await TodoApi.getTodoList();
      setTodoList(todoListResult);
    },
    [TodoApi, todoList],
  );

  const onSubmit = useCallback(
    async (text: string) => {
      await TodoApi.createTodo({ text });

      const todoListResult = await TodoApi.getTodoList();
      setTodoList(todoListResult);
    },
    [TodoApi, todoList],
  );

  useEffect(() => {
    (async () => {
      setTodoList(await TodoApi.getTodoList());
    })();
  }, []);

  return (
    <div className="border-4 border-gray-500 rounded w-full h-screen overflow-y-auto p-4">
      <TodoTitle />
      <NewTodoInputBox onSubmit={onSubmit} />
      <TodoList todoList={todoList} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}

export default React.memo(TodoPage);
