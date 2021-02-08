import axios from 'axios'

const ApiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/JaavierR/real-world-nuxt`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return ApiClient.get('/events')
  },
  getEvent(id) {
    return ApiClient.get(`/events/${id}`)
  },
}
