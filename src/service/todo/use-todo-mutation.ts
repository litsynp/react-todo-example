import { useMutation, useQueryClient } from '@tanstack/react-query'

import { createTodo, deleteTodo, editTodoById } from '@/api/todo-api'

export const useTodoMutation = () => {
  const queryClient = useQueryClient()

  const createTodoMutation = useMutation(createTodo, {
    onError: () => {
      console.log('onError')
    },
    onSuccess: () => {
      console.log('onSuccess')
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const editTodoMutation = useMutation(editTodoById, {
    onError: () => {
      console.log('onError')
    },
    onSuccess: () => {
      console.log('onSuccess')
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const deleteTodoMutation = useMutation(deleteTodo, {
    onError: () => {
      console.log('onError')
    },
    onSuccess: () => {
      console.log('onSuccess')
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return {
    createTodoMutation,
    editTodoMutation,
    deleteTodoMutation,
  }
}
