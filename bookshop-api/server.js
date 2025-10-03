const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

// --- Sample Data ---
let books = [
  { isbn: "111", title: "Harry Potter", author: "J.K. Rowling", reviews: {} },
  { isbn: "222", title: "Lord of the Rings", author: "J.R.R. Tolkien", reviews: {} },
  { isbn: "333", title: "The Hobbit", author: "J.R.R. Tolkien", reviews: {} },
];

let users = []; // { username, password }

// --- Routes ---

// Task 1: Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Task 2: Get book by ISBN
app.get("/books/isbn/:isbn", (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  res.json(book || { error: "Book not found" });
});

// Task 3: Get books by author
app.get("/books/author/:author", (req, res) => {
  const authorBooks = books.filter(b => b.author === req.params.author);
  res.json(authorBooks);
});

// Task 4: Get books by title
app.get("/books/title/:title", (req, res) => {
  const titleBooks = books.filter(b => b.title === req.params.title);
  res.json(titleBooks);
});

// Task 5: Get book reviews
app.get("/books/reviews/:isbn", (req, res) => {
  const book = books[req.params.isbn];
  if (book) {
    res.json(book.reviews);
  } else {
    res.status(404).send("Book not found");
  }
});


// Task 6: Register user
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (users[username]) return res.status(400).send("User exists");
  users[username] = { password, reviews: {} };
  res.send("User registered successfully");
});


// Task 7: Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && user.password === password) {
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});


// Task 8: Add/Modify book review
app.post("/books/review/:isbn", (req, res) => {
  const { username, review } = req.body;
  const book = books[req.params.isbn];
  if (!book) return res.status(404).send("Book not found");
  book.reviews[username] = review;
  res.send("Review added/modified successfully");
});


// Task 9: Delete book review
app.delete("/books/review/:isbn", (req, res) => {
  const { username } = req.body;
  const book = books[req.params.isbn];
  if (!book || !book.reviews[username]) return res.status(404).send("Review not found");
  delete book.reviews[username];
  res.send("Review deleted successfully");
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
