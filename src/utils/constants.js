export const moviesUrl = 'https://api.nomoreparties.co';

export const BASE_URL = 'https://api.movies-diploma.nomorepartiesxyz.ru';

export const config = {
    url: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("jwt")}`
    }
}

export const addMoviesTab = 3;
export const addMoviesPhone = 2;
export const shortDuration = 40;
