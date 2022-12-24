import axios, { CreateAxiosDefaults } from 'axios'

import { API_V1_URL } from '@/utils/constants'

export function getApiClient(params: CreateAxiosDefaults<any> | undefined) {
  return axios.create(params)
}

export const todoClient = getApiClient({
  baseURL: `${API_V1_URL}/todos`,
  headers: {
    'Content-Type': 'application/json',
  },
})
