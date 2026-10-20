import express from 'express';
import * as ProdutoController from '../controllers/ProdutoController.js';
import { uploadImagem } from '../middlewares/UploadMiddleware.js';


// Middlewares de autenticação (serão ativados na Sessão 2)
// Inicialmente passam direto para não travar a Sessão 1
let autenticar = (_req, _res, next) => next();
let autorizarAdmin = (_req, _res, next) => next();

export function configurarSegurancaProdutos(autenticarMiddleware, autorizarAdminMiddleware) {
  if (typeof autenticarMiddleware !== 'function' || typeof autorizarAdminMiddleware !== 'function') {
    throw new TypeError('Os middlewares de autenticação e autorização devem ser funções.');
  }

  autenticar = autenticarMiddleware;
  autorizarAdmin = autorizarAdminMiddleware;
}


export const produtoRouter = express.Router();


produtoRouter.get('/', ProdutoController.listar);
produtoRouter.get('/:id', ProdutoController.buscarPorId);
produtoRouter.post('/', (req, res, next) => autenticar(req, res, next), ProdutoController.criar);
produtoRouter.put('/:id', (req, res, next) => autenticar(req, res, next), ProdutoController.atualizar);
produtoRouter.patch('/:id/imagem', (req, res, next) => autenticar(req, res, next), uploadImagem, ProdutoController.enviarImagem);
produtoRouter.delete('/:id', (req, res, next) => autenticar(req, res, next), (req, res, next) => autorizarAdmin(req, res, next), ProdutoController.excluir);
