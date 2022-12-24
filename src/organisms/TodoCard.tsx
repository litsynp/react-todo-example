import React, { useEffect, useState } from 'react'

import TodoTitle from 'molecules/TodoTitle'
import TodoList from 'molecules/TodoList'
import NewTodoInputBox from 'molecules/NewTodoInputBox'
import { Todo } from 'utils/types'
import TodoApi from 'api/TodoApi'

function TodoPage() {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const onToggle = async (id: number) => {
    const todo: Todo = todoList.find((todoItem) => todoItem.id === id) as Todo
    await TodoApi.updateTodo({
      id,
      data: { text: todo.text, completed: !todo.completed },
    })

    setTodoList(
      todoList.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem,
      ),
    )
  }

  const onDelete = async (id: number) => {
    await TodoApi.deleteTodo(id)

    const todoListResult = await TodoApi.getTodoList()
    setTodoList(todoListResult)
  }

  const onSubmit = async (text: string) => {
    await TodoApi.createTodo({ text })

    const todoListResult = await TodoApi.getTodoList()
    setTodoList(todoListResult)
  }

  useEffect(() => {
    ;(async () => {
      setTodoList(await TodoApi.getTodoList())
    })()
  }, [])

  return (
    <div className="border-4 border-gray-500 rounded w-full h-screen overflow-y-auto p-4">
      <TodoTitle />
      <NewTodoInputBox onSubmit={onSubmit} />
      <TodoList todoList={todoList} onToggle={onToggle} onDelete={onDelete} />
    </div>
  )
}

export default React.memo(TodoPage)
