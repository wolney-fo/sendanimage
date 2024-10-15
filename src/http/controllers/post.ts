import { RequestHandler } from 'express'
import { Post } from '@/db/models/Post'
import { UploadedFile } from '@/@types/uploaded-file'

export const posts: RequestHandler = async (request, response, next) => {
	const file: UploadedFile | undefined = request.file

	if (!file) {
		response.status(400).send({
			message: 'File not added.',
		})

		return
	}

	const post = await Post.create({
		name: file.originalname,
		size: file.size,
		key: file.key,
		url: file.location,
	})

	response.status(201).json({
		message: 'File uploaded.',
		data: {
			post,
		},
	})
}
