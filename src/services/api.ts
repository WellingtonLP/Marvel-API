import axios from 'axios';
import md5 from 'md5';

// const baseURL = 'http://gateway.marvel.com/v1/public/characters?';

const publicKey = '1faf83501f356d0dbecf072822ff530e';
const privateKey = 'd23cc688b4a302258eeab82bf249471178354b96';

//Para cada requisição um time diferente!
const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
    params: {
        ts: time,
        apikey: publicKey,
        hash: hash
    }
})

export default api;