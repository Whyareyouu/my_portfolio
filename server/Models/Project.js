import mongoose from 'mongoose';
const ProjectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	tags: {
		type: Array,
		default: [],
	},
	imageUrl: {
		type: String,
		required: true,
	},
	linkGitHub: {
		type: String,
		required: true,
	},
	linkDemo: {
		type: String,
	},
});

export default mongoose.model('Project', ProjectSchema);
