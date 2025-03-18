import http from '../http-common'
class DestinationDataService {
  getAll () {
    return http.get('/destination')
  }

  create (data) {
    return http.post('/destination', data)
  }

  get (id) {
    return http.get(`/destination/${id}`)
  }

  update (id, data) {
    return http.put(`/destination/${id}`, data)
  }

  delete (id) {
    return http.delete(`/destination/${id}`)
  }
}
export default new DestinationDataService()
