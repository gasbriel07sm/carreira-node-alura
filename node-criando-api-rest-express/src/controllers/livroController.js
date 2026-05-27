import livros from '../models/Livro.js';
import { autor } from '../models/Autor.js';

class LivroController {

  static async listarLivros(req, res) {
    try {
      const listaLivros = await livros.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar livros', error: error.message });
    }
  };

  static async cadastrarLivros(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {...novoLivro, autor: { ...autorEncontrado._doc } };
      const livroCriado = await livros.create(livroCompleto);
      res.status(201).json({ message: 'Criado com sucesso', livro: livroCriado });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao cadastrar livro', error: error.message });
    }
  };

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livros.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar livro por ID', error: error.message });
    }
  };

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Livro atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar livro', error: error.message });
    }
  };

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(200).json({ message: 'Livro deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar livro', error: error.message });
    }
  };

  static async listarLivroPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livros.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch(erro) {
      res.status(500).json({ message: 'Erro ao listar livros por editora', error: erro.message });
    }
  };
};

export default LivroController;
