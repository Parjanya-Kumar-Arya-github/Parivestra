const API_BASE_URL = 'http://localhost:5000/api';

export const sendContactMessage = async (data) => {
    const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    // Check if the response matches our standard API response format internally
    const result = await response.json().catch(() => null);

    if (!response.ok) {
        return {
            success: false,
            message: result?.message || 'An unexpected error occurred.',
        };
    }

    return result || { success: true };
};
