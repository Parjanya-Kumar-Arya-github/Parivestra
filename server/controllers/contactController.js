import { sendContactEmail } from '../services/emailService.js';

export const handleContactForm = async (req, res, next) => {
    try {
        const { name, brandName, phoneNumber, serviceRequired, emailId } = req.body;

        // Basic Data Validation
        if (!name || !emailId || !phoneNumber || !serviceRequired || !brandName) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required.'
            });
        }

        // Offload email sending to our service function
        await sendContactEmail({ name, brandName, phoneNumber, serviceRequired, emailId });

        res.status(200).json({
            success: true,
            message: 'Email sent successfully!'
        });
    } catch (error) {
        console.error('[ContactController] Error sending email:', error.message);

        // Pass error down to the global error middleware
        next(error);
    }
};
