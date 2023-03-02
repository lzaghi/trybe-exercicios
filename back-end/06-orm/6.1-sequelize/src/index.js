const express = require('express');
const BooksController = require('./controllers/BooksController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books/:id', BooksController.getById);
app.get('/books', BooksController.getAll);
app.post('/books', BooksController.create);
app.put('/books/:id', BooksController.update);
app.delete('/books/:id', BooksController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));