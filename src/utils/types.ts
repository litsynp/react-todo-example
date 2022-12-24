export interface Todo {
  id: number
  text: string
  completed: boolean
  createdOn: Date
}

export interface TodoDto {
  id: number
  text: string
  completed: boolean
  created_on: Date
}

export interface TodoCreateDto {
  text: string
}

export interface TodoUpdateDto {
  text: string
  completed: boolean
}
