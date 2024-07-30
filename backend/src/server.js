import express from 'express'
import { APP_PORT, APP_HOST } from './constants/app.constants.js'
import { houseRoutes } from './routes/house.routes.js'

const app = express()

app.use('/houses', houseRoutes)

app.listen(APP_PORT, APP_HOST, () => {
    console.log(`Server ${APP_PORT}-portda ishga tushdi...`)
})