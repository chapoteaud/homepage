const fightsRouter = require('express').Router()
const currentEvent = require('../models/currentEvent')


fightsRouter.get('/', async (request, response) => {
    try {
        const fights = await currentEvent.findAll({

        })
        response.json(fights)
    } catch (exception) {
        response.json(exception)
    }
})

module.exports = fightsRouter
