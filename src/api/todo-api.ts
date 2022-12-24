import { todoClient } from '@/api/api-client'
import { Todo, TodoCreateDto, TodoDto, TodoUpdateDto } from '@/utils/types'

export async function findTodos(): Promise<Todo[]> {
  const todos = (await todoClient.get('/')).data

  return todos.map(({ id, text, completed, created_on }: TodoDto) => ({
    id,
    text,
    completed,
    createdOn: created_on,
  }))
}

export async function createTodo(todo: TodoCreateDto): Promise<Todo> {
  return (await todoClient.post(`/`, todo)).data
}

export async function editTodoById({
  id,
  todo,
}: {
  id: number
  todo: TodoUpdateDto
}): Promise<Todo> {
  console.log(todo)
  return (await todoClient.put(`/${id}/`, todo)).data
}

export async function deleteTodo(id: number) {
  return (await todoClient.delete(`/${id}/`)).data
}
