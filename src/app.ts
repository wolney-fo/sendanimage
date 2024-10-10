import express from 'express'
import morgan from 'morgan'
import routes from './http/routes'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(routes)
