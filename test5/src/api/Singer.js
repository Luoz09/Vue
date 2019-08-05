import axios from 'axios'

let $http = axios.create({
  baseURL: 'http://localhost:55332'
})

export function getSingerList () {
  return $http.get('/Home/getBooksList')
}
