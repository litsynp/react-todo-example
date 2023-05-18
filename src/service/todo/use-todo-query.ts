import { useQuery } from '@tanstack/react-query'

import { findTodos } from '@/api/todo-api'

export const useTodoQuery = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: findTodos,
  })
}
