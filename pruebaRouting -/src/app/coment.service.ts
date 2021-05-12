import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ComentService {

  constructor() { }
  getAll () {
    return axios.get("https://jsonplaceholder.cypress.io/comments").then(res =>res.data)
  }
  getById(id: string) {
    return axios.get("https://jsonplaceholder.cypress.io/comments/" + id).then(res =>res.data)
  }
}
