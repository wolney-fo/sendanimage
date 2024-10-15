import {
	DestinationCallback,
	FileNameCallback,
} from '@/@types/multer-callbacks'
import { fileRules } from '@/core/rules/files'
import { env } from '@/env'
import { S3Client } from '@aws-sdk/client-s3'
import { Request } from 'express'
import multer, { FileFilterCallback } from 'multer'
import multerS3 from 'multer-s3'
import { randomBytes } from 'node:crypto'
import path from 'node:path'
import { UploadedFile } from '@/@types/uploaded-file.d'

const storageTypes = {
	local: multer.diskStorage({
		destination: (
			request: Request,
			file: UploadedFile,
			cb: DestinationCallback
		) => {
			cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
		},
		filename: (request: Request, file: UploadedFile, cb: FileNameCallback) => {
			randomBytes(16, (error, hash) => {
				if (error) cb(error, '')

				file.key = `${hash.toString('hex')}-${file.originalname}`

				cb(null, file.key)
			})
		},
	}),

	s3: multerS3({
		s3: new S3Client({
			region: env.AWS_DEFAULT_REGION,
			credentials: {
				accessKeyId: env.AWS_S3_ACCESS_KEY_ID,
				secretAccessKey: env.AWS_S3_SECRET_ACCESS_KEY,
			},
		}),
		bucket: env.AWS_S3_BUCKET_NAME,
		contentType: multerS3.AUTO_CONTENT_TYPE,
		acl: 'public-read',
		key: (request: Request, file: UploadedFile, cb: FileNameCallback) => {
			randomBytes(16, (error, hash) => {
				if (error) cb(error, '')

				const fileName = `${hash.toString('hex')}-${file.originalname}`

				cb(null, fileName)
			})
		},
	}),
}

const multerConfig = {
	dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
	storage: storageTypes.s3,
	limits: {
		fileSize: fileRules.maximumSizeInBytes,
	},
	fileFilter: (
		request: Request,
		file: UploadedFile,
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
