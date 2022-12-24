import React from 'react'
import { Todo } from '@/utils/types'
import TodoItem from '@/todo/todo-item'

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
