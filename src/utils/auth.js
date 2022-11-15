import { BASE_URL } from "./constants";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject({statusCode: res.status, message: res.message});
};

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password, name})
  })
  .then(handleResponse);
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({password, email})
  })
  .then(handleResponse);
};

export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
          "Authorization" : `Bearer ${jwt}`,
          "Content-Type": "application/json",
      }
  })
  .then(handleResponse);
}

