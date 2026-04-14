import express from 'express';
import { handleContactForm } from '../controllers/contactController.js';

const router = express.Router();

// Define route for handling contact form submission
router.post('/send-email', handleContactForm);

export default router;
