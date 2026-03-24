// Import required modules
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Define the port the server will run on
const port = 3000;

// Secret key for signing JWTs. In a real application, use an environment variable.
const secretKey = 'your-secret-key';

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Mock user data. In a real application, you'd query a database.
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// Login route to authenticate users and generate a JWT
app.post('/login', (req, res) => {
    // Extract username and password from the request body
    const { username, password } = req.body;

    // Find the user in the mock data
    const user = users.find(u => u.username === username && u.password === password);

    // If user is found and credentials match
    if (user) {
        // Generate a JWT
        const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
        // Send the token to the client
        res.json({ token });
    } else {
        // If credentials are invalid, send a 401 status code
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Middleware to authenticate JWTs and protect routes
const authenticateJWT = (req, res, next) => {
    // Get the token from the Authorization header
    const authHeader = req.header('Authorization');
    if (authHeader) {
        // Split the Bearer token from the header
        const token = authHeader.split(' ')[1];

        // Verify the token using the secret key
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                // If token is invalid, send a 403 status code
                return res.sendStatus(403);
            }
            // Attach the user info to the request object
            req.user = user;
            // Continue to the next middleware or route handler
            next();
        });
    } else {
        // If no token is provided, send a 401 status code
        res.sendStatus(401);
    }
};

// Protected route that requires a valid JWT to access
app.get('/protected', authenticateJWT, (req, res) => {
    // Send a response with the user info if the JWT is valid
    res.json({ message: 'This is a protected route', user: req.user });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
