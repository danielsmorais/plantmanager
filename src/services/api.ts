import axios from 'axios'

const api = axios.create({
    // utilizar o ip da propria maquina para consumir aapi do prorpio dispositivo
    baseURL: 'http://192.168.0.104:3333' 
})

export default api;