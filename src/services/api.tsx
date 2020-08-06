import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    //baseURL: 'https://api-gerenciador-tarefas.herokuapp.com/', 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});


export default api;