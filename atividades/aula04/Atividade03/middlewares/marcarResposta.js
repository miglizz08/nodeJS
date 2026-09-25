export function marcarResposta(_req, res, next) {
  res.setHeader('x-aula', '07');
  next();
}
