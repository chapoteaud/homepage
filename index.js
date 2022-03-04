const express = require('express')
const app = express()
const PORT = 3001
const ufcFightsRouter = require('././backend/controllers/ufcFightsRouter')
const carServicesRouter = require('./backend/controllers/carServicesRouter')
const chanceStatsRouter = require('./backend/controllers/chanceDataRouter')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use('/api/fights', ufcFightsRouter)
app.use('/api/services', carServicesRouter)
app.use('/api/chance', chanceStatsRouter)


app.listen(PORT)
