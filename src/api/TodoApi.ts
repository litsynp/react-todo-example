import axios from 'axios'

import { API_V1_URL } from 'utils/constants'
import { Todo, TodoCreateDto, TodoDto, TodoUpdateDto } from 'utils/types'

class TodoApi {
  static async getTodoList(): Promise<Todo[]> {
    const result = await axios.get(`${API_V1_URL}/todos/`)

    return result.data.map((todo: TodoDto): Todo => {
      const { id, text, completed, created_on } = todo
      return { id, text, completed, createdOn: created_on }
    })
  }

  static async createTodo(data: TodoCreateDto): Promise<Todo> {
    const result = await axios.post(`${API_V1_URL}/todos/`, data)

    return result.data
  }

  static async updateTodo({
    id,
    data,
  }: {
    id: number
    data: TodoUpdateDto
  }): Promise<Todo> {
    const result = await axios.put(`${API_V1_URL}/todos/${id}/`, data)

    return result.data
  }

  static async deleteTodo(id: number) {
    const result = await axios.delete(`${API_V1_URL}/todos/${id}/`)

    return result.data
  }
}

export default TodoApi
