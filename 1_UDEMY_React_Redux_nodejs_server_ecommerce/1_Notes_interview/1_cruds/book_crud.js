//question by wipro
const express = require('express');// Require the Express module and assign it to the variable express
const app = express();// Create an instance of the Express application
const port = 3000;

app.use(express.json());// Middleware to parse JSON bodies in incoming requests

const books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

// GET /books: Returns a list of books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST /books: Adds a new book
app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book by id
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex !== -1) {
      books[bookIndex] = { ...books[bookIndex], ...req.body };
      res.status(200).send(books[bookIndex]);
    } else {
      res.status(404).send({ message: 'Book not found' });
    }
  });
  
// DELETE /books/:id: Deletes a book by ID
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex !== -1) {
        const deletedBook = books.splice(bookIndex, 1);
        res.status(200).json(deletedBook);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
