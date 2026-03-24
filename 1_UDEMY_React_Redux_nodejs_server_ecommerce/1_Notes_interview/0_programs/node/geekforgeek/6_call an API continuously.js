//How to call an API continuously from server side itself in NodeJS/ExpressJS?
// app.js

const express = require("express");
const axios = require("axios");

const app = express();

// Dummy database
const posts = [
  {
    title: "Headline 1",
    id: 1,
    body: `sint suscipit perspiciatis velit dolorum 
            rerum ipsa laboriosam odio`,
    userId: 1,
  },

  {
    title: "Headline 2",
    id: 2,
    body: "fugit voluptas sed molestias voluptatem provident",
    userId: 1,
  },

  {
    title: "Headline 3",
    id: 3,
    body: "voluptate et itaque vero tempora molestiae",
    userId: 1,
  },
];

// Loop over the posts
posts.forEach((post) => {
  // Post data to API endpoint
  axios
    .post("https://jsonplaceholder.typicode.com/posts/", {
      body: post,
    })

    // Print response
    .then((response) => {
      const { id, title } = response.data.body;
      console.log(`Post ${id}: ${title}`);
    })

    // Print error message if occur
    .catch((error) => console.log(error));
});
