import { Todo } from 'utils/types'
import TodoItem from 'molecules/TodoItem'
import React from 'react'

interface TodoListProps {
  todoList: Todo[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const TodoList = ({ todoList, onToggle, onDelete }: TodoListProps) => {
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

export default React.memo(TodoList)
