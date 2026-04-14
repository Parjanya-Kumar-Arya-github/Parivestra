import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './server/routes/contactRoutes.js';
import { errorHandler } from './server/middleware/errorHandler.js';

dotenv.config();

const app = express();

// Global Middlewares
app.use(express.json());
app.use(cors());

// Mount API Routes
app.use('/api', contactRoutes);

// Global Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
