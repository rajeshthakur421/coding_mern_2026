
2;//
// Middleware for authentication
const authenticateMiddleware = (req, res, next) => {
    if (req.headers.authorization === 'Bearer token') {
        next(); // Proceed to the next middleware
    } else {
        res.status(401).send('Unauthorized');
    }
};

// Apply middleware to specific routes
app.get('/protected', authenticateMiddleware, (req, res) => {
    res.send('Protected Route');
});

3;//error handling

// Error handling middleware
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error('An error occurred:', err);
    res.status(500).send('Internal Server Error');
};

// Apply error handling middleware
app.use(errorHandlerMiddleware);

4;//



