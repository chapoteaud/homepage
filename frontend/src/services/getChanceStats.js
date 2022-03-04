import axios from 'axios'

const URL = 'http://localhost:3001/api/chance'

const getChanceStats = async () => {
    const request = await axios.get(URL)
    const lastStat = request.data[request.data.length - 1]
    const secondToLastStat = request.data[request.data.length - 2]
    let change = calculateChange(lastStat.value, secondToLastStat.value)
    lastStat.change = parseFloat(change.toFixed(3))
    return lastStat
}

const calculateChange = (lastStat, secondToLastStat) => {
    const change = (lastStat - secondToLastStat) / secondToLastStat
    return change
}

const addStat = async (stat) => {
    const request = axios.post(URL, stat)
    const previousValues = await axios.get(URL)
    const secondToLastStat = previousValues.data[previousValues.data.length - 2]
    
    return request.then(response => {
        let change = calculateChange(response.data.value, secondToLastStat.value)
        response.data.change = parseFloat(change.toFixed(3))
        return response.data
    })
}


export default { getChanceStats,  addStat }