import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import * as nodemailer from 'nodemailer';
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
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

app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log(`Server running on port ${PORT}`);
});
