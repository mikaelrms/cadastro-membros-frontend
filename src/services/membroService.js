const API_URL = 'http://localhost:8080/api/membros'

export async function cadastrarMembro(membro) {
  const resposta = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(membro),
  })

  if (!resposta.ok) {
    throw new Error(`Erro HTTP: ${resposta.status}`)
  }

  return resposta.json()
}
