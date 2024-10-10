import { Router } from 'express'
import { posts } from './controllers/post'
import multer from 'multer'
import multerConfig from '../lib/multer'

const routes = Router()

routes.post('/posts', multer(multerConfig).single('file'), posts)

export default routes
