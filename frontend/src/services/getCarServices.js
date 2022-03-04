import axios from 'axios'

const URL = 'http://localhost:3001/api/services'

const recommendedIntervals = {
    'oil change': 6000,
    'spark plugs': 30000
}

const getServices = async () => {
    const response = await axios.get(URL)
    return response.data
}

const addService = (service) => {
    const request = axios.post(URL, service)
    return request.then(response => response.data)
}

export default { getServices, addService, recommendedIntervals }