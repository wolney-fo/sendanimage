import {
	DestinationCallback,
	FileNameCallback,
} from '@/@types/multer-callbacks'
import { Request } from 'express'
import multer, { FileFilterCallback } from 'multer'
import path from 'node:path'
import { fileRules } from '@/core/rules/files'
import { randomBytes } from 'node:crypto'

const multerConfig = {
	dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
	storage: multer.diskStorage({
		destination: (
			request: Request,
			file: Express.Multer.File,
			cb: DestinationCallback
		) => {
			cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
		},
		filename: (
			request: Request,
			file: Express.Multer.File,
			cb: FileNameCallback
		) => {
			randomBytes(16, (error, hash) => {
				if (error) cb(error, '')

				const fileName = `${hash.toString('hex')}-${file.originalname}`

				cb(null, fileName)
			})
		},
	}),
	limits: {
		fileSize: fileRules.maximumSizeInBytes,
	},
	fileFilter: (
		request: Request,
		file: Express.Multer.File,
		cb: FileFilterCallback
	) => {
		const allowedMimes = fileRules.allowedMimes

		if (allowedMimes.includes(file.mimetype)) {
			cb(null, true)
		} else {
			cb(new Error('Invalid file type'))
		}
	},
}

export default multerConfig
