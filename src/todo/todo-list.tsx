import React from 'react'

import TodoItem from '@/todo/todo-item'
import { Todo } from '@/utils/types'

interface TodoListProps {
  todoList: Todo[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export default function TodoList({
  todoList,
  onToggle,
  onDelete,
}: TodoListProps) {
  return (
    <>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}
