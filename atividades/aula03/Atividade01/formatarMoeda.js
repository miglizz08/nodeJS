export function formatarMoeda(valor) {
  if (!Number.isFinite(valor)) {
    throw new Error('Valor monetario deve ser um finito');
  }
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}