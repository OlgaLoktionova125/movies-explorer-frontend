import { config } from './constants';

class Api {
  constructor(options) {
    this._options = options;
    this._url = options.url;
    this._headers = options.headers;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  setJwt = (token) => {
    this._headers['Authorization'] = `Bearer ${token}`;
  };

  getCurrentUser() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(this._handleResponse);
  };

  updateUserInfo(obj) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        email: obj.email
      })
    })
    .then(this._handleResponse);
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers
    })
    .then(this._handleResponse);
  }

  createMovie(obj) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(obj)
    })
    .then(this._handleResponse);
  };

  deleteMovie(obj, id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      body: JSON.stringify(obj)
    })
    .then(this._handleResponse);
  }
};

const mainApi = new Api(config);

export default mainApi;

