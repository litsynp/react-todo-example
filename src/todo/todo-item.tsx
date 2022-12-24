import React, { useEffect, useState } from 'react'

import TodoCheckbox from '@/todo/todo-checkbox'
import { getDateString } from '@/utils/datetime'
import { Todo } from '@/utils/types'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [completed, setCompleted] = useState(todo.completed)

  useEffect(() => {
    setCompleted(todo.completed)
  }, [todo.completed])

  const onClickCheckbox = () => onToggle(todo.id)

  const onClickDelete = () => onDelete(todo.id)

  return (
    <div className="flex align-middle break-all text-xl border-2 rounded border-gray-700 text-gray-700 p-2 my-4">
      <TodoCheckbox completed={completed} onClick={onClickCheckbox} />
      <span className="w-full">{todo.text}</span>
      <span className="whitespace-nowrap mr-1 text-sm text-gray-400">
        {getDateString(new Date(todo.createdOn))}
      </span>
      <span className="cursor-pointer select-none ml-1" onClick={onClickDelete}>
        x
      </span>
    </div>
  )
}
