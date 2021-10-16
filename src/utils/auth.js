//export const BASE_URL = 'https://auth.nomoreparties.co';
export const BASE_URL = 'https://api.shabanskaya.students.nomoredomains.club';

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({password, email})
  })
  .then((response) => {
    return response.json();
  })
  
};


export const login = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({password, email})
  })
  .then((response) => {
    return response.json();
  })
  
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({})
  })
  .then((response) => {
    return response.json();
  })
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization': `Bearer ${token}`,
    },
    credentials: 'include'
  })

  .then(res => res.json())
	
}