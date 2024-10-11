import express from 'express'
import morgan from 'morgan'
import routes from './http/routes'
import mongoose from 'mongoose'
import { env } from './env'

export const app = express()

mongoose.connect(env.DATABASE_URL)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(routes)
