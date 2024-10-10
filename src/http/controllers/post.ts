import { RequestHandler } from 'express'

export const posts: RequestHandler = (request, response, next) => {
	console.log(request.file)

	response.json({ message: 'Hello World' })
}
