import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
};

export const sendContactEmail = async (data) => {
    const { name, brandName, phoneNumber, serviceRequired, emailId } = data;

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        throw new Error('Server email configuration is missing or invalid.');
    }

    const transporter = createTransporter();

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
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                <h3 style="color: #FF4500; border-bottom: 2px solid #FF4500; padding-bottom: 10px;">New Contact Submission</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td></tr>
                    <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Brand Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${brandName}</td></tr>
                    <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${phoneNumber}</td></tr>
                    <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${emailId}">${emailId}</a></td></tr>
                    <tr><td style="padding: 10px;"><strong>Service:</strong></td><td style="padding: 10px;">${serviceRequired}</td></tr>
                </table>
            </div>
        `,
    };

    return await transporter.sendMail(mailOptions);
};
