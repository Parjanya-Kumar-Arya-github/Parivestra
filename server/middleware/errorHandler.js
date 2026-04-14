// Global Error Handler Middleware
export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    // Check if it's an email config/auth error
    let message = err.message || 'Internal Server Error';
    if (message.includes('Username and Password not accepted')) {
        message = 'Server email authentication failed (App Password invalid or missing).';
    }

    res.status(statusCode).json({
        success: false,
        message: message,
    });
};
