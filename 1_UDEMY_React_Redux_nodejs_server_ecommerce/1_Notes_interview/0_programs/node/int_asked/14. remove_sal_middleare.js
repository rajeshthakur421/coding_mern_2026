//remove user salary from middleware

const express = require('express');
const app = express();

const userMiddleware = (req, res, next) => {
  req.user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    salary: 50000
  };

  // Remove the salary field
  delete req.user.salary;

  next();
};

app.use(userMiddleware);

app.get('/user', (req, res) => {
  res.json(req.user);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
