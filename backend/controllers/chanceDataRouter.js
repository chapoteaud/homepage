const chanceStatsRouter = require('express').Router()
const Stat = require('./../models/chance')


chanceStatsRouter.get('/', async (request, response) => {
    try {
        const stats = await Stat.findAll({})
        response.json(stats)
    } catch (exception) {
        response.json(exception)
    }
})

chanceStatsRouter.post('/', async (request, response) => {

    const stat_type = request.body.stat_type
    const value = request.body.value
    const age = request.body.age
    const n = await Stat.findAll()
    try {
        const stat = await Stat.create({
            value: value,
            stat_type: stat_type,
            age: age,
            stat_id: n.length + 1
        })
        response.json(stat)
    } catch (exception) {
        response.json(exception)
    }
    
})

module.exports = chanceStatsRouter