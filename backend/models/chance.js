const config = require('./../utils/config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.CHANCE_URI)

const Stat = sequelize.define('stat', {
    value: {
        type: Sequelize.DOUBLE,
        primaryKey: true,        
    },
    stat_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
    stat_id : {
        type: Sequelize.UUIDV4,
        allowNull: false
      },
    age: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {timestamps: false})


module.exports = Stat