import express from 'express'
import filmRoutes from './routes/film.routes.js'

const app = express()
app.use('/api/',filmRoutes)


export default app