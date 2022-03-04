const config = require('./../utils/config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.FIGHTS_URI)

const Fight = sequelize.define('fight', {
  red_corner: {
    type: Sequelize.STRING,
    allowNull: false
  },
  blue_corner: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fight_winner: {
    type: Sequelize.STRING,
    allowNull: true
  },
  fights_id: {
    type: Sequelize.UUIDV4,
    primaryKey: true,
  },
  event_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
}, {timestamps: false})




module.exports = Fight