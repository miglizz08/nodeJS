import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInBlcmZpbCI6ImFkbWluIiwiaWF0IjoxNzkyNTI0NjI4LCJleHAiOjE3OTI1MjgyMjh9.NK3a2mPsr5Anp9Uj8G3UmOfdsLHdWLaqFS2B2uY0myU';

// Função para gerar um token JWT
export function gerarTokenInicial(payload = { sub: 1, perfil: 'admin' }, options = { expiresIn: '1h' }) {
  return jwt.sign(payload, jwtSecret, options);
}

const token = gerarTokenInicial();
console.log('Token gerado:', token);