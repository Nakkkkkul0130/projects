const axios = require("axios");

const BASE_URL = "http://localhost:3000";

// Task 10: Get all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    console.log("All books:", response.data);
  } catch (err) {
    console.error("Error fetching all books:", err.message);
  }
}

// Task 11: Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const res = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
    console.log("Book:", res.data);
  } catch (err) {
    console.error(`Error fetching book with ISBN ${isbn}:`, err.message);
  }
}

// Task 12: Get books by Author
async function getBooksByAuthor(author) {
  try {
    const res = await axios.get(`${BASE_URL}/books/author/${author}`);
    console.log(`Books by ${author}:`, res.data);
  } catch (err) {
    console.error(`Error fetching books by ${author}:`, err.message);
  }
}

// Task 13: Get books by Title
async function getBooksByTitle(title) {
  try {
    const res = await axios.get(`${BASE_URL}/books/title/${title}`);
    console.log(`Books titled "${title}":`, res.data);
  } catch (err) {
    console.error(`Error fetching books titled "${title}":`, err.message);
  }
}

// Test all functions sequentially
(async () => {
  await getAllBooks();
  await getBookByISBN("111");
  await getBooksByAuthor("J.R.R. Tolkien");
  await getBooksByTitle("Harry Potter");
})();
