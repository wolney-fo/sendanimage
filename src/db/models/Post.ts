import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
	name: String,
	size: Number,
	key: String,
	url: String,
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

export const Post = mongoose.model('Post', PostSchema)
