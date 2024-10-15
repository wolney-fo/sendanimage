export type UploadedFile = {
	key?: string
	location?: string
} & Express.Multer.File
