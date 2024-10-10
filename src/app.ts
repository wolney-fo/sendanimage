import express from 'express'

export const app = express()

app.get('/', (_, reply) => {
	reply.send('Hello World')
})
