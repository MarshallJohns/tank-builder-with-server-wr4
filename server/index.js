const express = require('express')
const tankCtrl = require('./controller/tankController')

const app = express()
app.use(express.json())

const port = 4545

app.get('/api/tanks', tankCtrl.getAllTanks)
app.post('/api/tanks', tankCtrl.filterTanks)

app.listen(port, () => console.log(`Take us to warp ${port}!`))