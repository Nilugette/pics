import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID srF4odLLui4IBqUli6GRC8yShZvLj134soluenK4p-0'
    }
})