import React from 'react'

import { useTodoMutation } from '@/service/todo/use-todo-mutation'
import { useTodoQuery } from '@/service/todo/use-todo-query'
import NewTodoInputBox from '@/todo/new-todo-input-box'
import TodoList from '@/todo/todo-list'
import TodoTitle from '@/todo/todo-title'
import { Todo } from '@/utils/types'

export default function TodoPage() {
  const todoQuery = useTodoQuery()

  const { createTodoMutation, editTodoMutation, deleteTodoMutation } =
    useTodoMutation()

  const onToggle = async (id: number) => {
    const todo: Todo = todoQuery.data?.find(
      (todoItem) => todoItem.id === id,
    ) as Todo

    editTodoMutation.mutate({
      id,
      todo: { text: todo.text, completed: !todo.completed },
    })
  }

  const onDelete = async (id: number) => {
    deleteTodoMutation.mutate(id)
  }

  const onSubmit = async (text: string) => {
    createTodoMutation.mutate({ text })
  }

  return (
    <div className="border-4 border-gray-500 rounded w-full h-screen overflow-y-auto p-4">
      <TodoTitle />
      <NewTodoInputBox onSubmit={onSubmit} />
      <TodoList
        todoList={todoQuery.data}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  )
}
