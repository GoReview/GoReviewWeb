import axios from 'axios'

export const api = axios.create({
  baseURL: "https://goreviewapp.gigalixirapp.com/api/"
})