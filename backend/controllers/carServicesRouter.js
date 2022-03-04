const carServicesRouter = require('express').Router()
const Service = require('./../models/carServices')


carServicesRouter.get('/', async (request, response) => {
    try {
        const services = await Service.findAll({})
        response.json(services)
    } catch (exception) {
        response.json(exception)
    }
})

carServicesRouter.post('/', async (request, response) => {

    const serviceType = request.body.serviceType
    const serviceMileage = request.body.serviceMileage
    
    try {
        const service = await Service.create({
            service_type: serviceType,
            mileage: serviceMileage,
        })
        response.json(service)
    } catch (exception) {
        response.json(exception)
    }
    
})

module.exports = carServicesRouter