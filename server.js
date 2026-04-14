import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

app.post('/api/send-email', async (req, res) => {
    const { name, brandName, phoneNumber, serviceRequired, emailId } = req.body;

    const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact Form Submission from ${brandName}`,
        replyTo: emailId,
        text: `
            Name: ${name}
            Brand Name: ${brandName}
            Phone Number: ${phoneNumber}
            Email: ${emailId}
            Service Required: ${serviceRequired}
        `,
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Brand Name:</strong> ${brandName}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Email:</strong> ${emailId}</p>
            <p><strong>Service Required:</strong> ${serviceRequired}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email.', error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
