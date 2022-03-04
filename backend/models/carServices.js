const config = require('./../utils/config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.CAR_URI)

const Service = sequelize.define('service', {
    service_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
    mileage : {
        type: Sequelize.STRING,
        allowNull: false
      },
}, {timestamps: false})

module.exports = Service