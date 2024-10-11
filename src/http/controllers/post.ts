import { RequestHandler } from 'express'
import { Post } from '@/db/models/Post'

export const posts: RequestHandler = async (request, response, next) => {
	const { file } = request

	if (!file) {
		response.status(400).send({
			message: 'File not added.',
		})

		return
	}

	const post = await Post.create({
		name: file.originalname,
		size: file.size,
		key: file.filename,
		url: '',
	})

	response.status(201).json({
		message: 'File uploaded.',
		data: {
			post,
		},
	})
}
