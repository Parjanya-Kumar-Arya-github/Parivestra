import express from 'express';
import cors from 'cors';
import contactRoutes from '../server/routes/contactRoutes.js';
import { errorHandler } from '../server/middleware/errorHandler.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Mount the API Routes
app.use('/api', contactRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Instead of calling app.listen(), we export the configured app
// Vercel's Node.js runtime understands exporting an Express app and manages the listening automatically!
export default app;
