import express from "express";

const app = express(); // executa a função express e armazena o resultado na variável app
app.use(express.json()); // para que o express entenda o formato json

const livros = [
  { id: 1, titulo: 'O Senhor dos Anéis' },
  { id: 2, titulo: 'O Hobbit' },
]

function buscaLivro(id) {
  return livros.findIndex(livros => livros.id === Number(id));
}

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node.js');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro adicionado com sucesso');
});

app.get('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.put('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).json(livros);
});

export default app;