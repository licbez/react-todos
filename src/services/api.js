import { Axios } from 'axios';

const TODO_ROUTE = '/todo';

class Api extends Axios {
  constructor() {
    super({ baseURL: process.env.REACT_APP_API_URL });
  }

  tasks(params) {
    return this.get(`${TODO_ROUTE}/list`, { params })
  }

  updateTask(id, data) {
    return this.patch(`${TODO_ROUTE}/${id}`, data)
  }

  createTask(data) {
    return this.post(`${TODO_ROUTE}/create`, data)
  }

  removeTask(id) {
    return this.delete(`${TODO_ROUTE}/${id}`)
  }
}

export default new Api();