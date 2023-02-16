import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import * as nodemailer from 'nodemailer';
import ProjectModel from './Models/Project.js';
mongoose
	.connect(process.env.DB_LINK)
	.then(() => {
		console.log('DB ok');
	})
	.catch((err) => {
		console.log('DB error', err);
	});

const app = express();
const storage = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, 'uploads');
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.post('/contact', (req, res) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASSWORD,
			},
		});
		const mailOptions = {
			from: req.body.email,
			to: process.env.EMAIL,
			subject: `Message from ${req.body.email}, theme: ${req.body.theme}`,
			text: req.body.message,
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				res.status(400).send('Failed to send message');
			} else {
				res.send('success');
			}
		});
	} catch (err) {
		console.log(err);
		res.status(400).send('Failed to send message');
	}
});
app.get('/projects', async (req, res) => {
	try {
		const projects = await ProjectModel.find().exec();
		res.json(projects);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Failed to get projects',
		});
	}
}); //get all projects
app.post('/projects', upload.single('imageURL'), async (req, res) => {
	if (
		req.body.username === process.env.USER &&
		req.body.password === process.env.USER_PASSWORD
	) {
		try {
			const doc = new ProjectModel({
				title: req.body.title,
				description: req.body.description,
				// imageUrl: req.body.imageUrl,
				imageUrl: `/uploads/${req.file.originalname}`,
				tags: req.body.tags,
				linkGitHub: req.body.linkGitHub,
				linkDemo: req.body.linkDemo,
			});

			const projects = await doc.save();
			res.json(projects);
		} catch (error) {
			console.log(error);
			res.status(500).json({
				message: 'Failed to create a project',
			});
		}
	} else {
		return res.status(403).json({
			message: "You don't have access",
		});
	}
});
app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log(`Server running on port ${PORT}`);
});
