import axios from 'axios'

const URL = 'http://localhost:3001/api/fights'

const getFights = () => {
    const request = axios.get(URL)
    return request.then(response => response.data)
}

export default { getFights }