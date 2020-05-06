import axios from 'axios';

// Por está criando um componente, na chamada posso chamar api.get, api.post.
const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q='
});

export default api;