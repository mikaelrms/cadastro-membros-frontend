import { useState } from 'react'
import FormularioMembro from './components/FormularioMembro'
import { cadastrarMembro } from './services/membroService'

function App() {
  const [mensagem, setMensagem] = useState('')


  async function handleCadastrarMembro(event) {
    event.preventDefault()
    setMensagem('')

    const formulario = event.currentTarget
    const campos = new FormData(formulario)

    const membro = {
      nomeCompleto: campos.get('nomeCompleto'),
      dataNascimento: campos.get('dataNascimento'),
      telefone: campos.get('telefone') || null,
      email: campos.get('email') || null,
      cep: campos.get('cep') || null,
      rua: campos.get('rua') || null,
      numeroEndereco: campos.get('numeroEndereco') || null,
      complemento: campos.get('complemento') || null,
      bairro: campos.get('bairro') || null,
      cidade: campos.get('cidade') || null,
      estadoCivil: campos.get('estadoCivil') || null,
      possuiFilhos: campos.get('possuiFilhos') === 'true',
      quantidadeFilhos: Number(campos.get('quantidadeFilhos') || 0),
      batizado: campos.get('batizado') === 'true',
      dataBatismo: campos.get('dataBatismo') || null,
      localBatismo: campos.get('localBatismo') || null,
    }

    try {
      const membroSalvo = await cadastrarMembro(membro)

      setMensagem(
        `Membro ${membroSalvo.nomeCompleto} cadastrado com sucesso!`
      )

      formulario.reset()
    } catch (erro) {
      console.error(erro)
      setMensagem(
        'Não foi possível cadastrar. Verifique se o backend está rodando e tente novamente.'
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mx-auto mb-8 max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800">
          Cadastro de Membros
        </h1>

        <p className="mt-2 text-gray-600">
          Sistema de registro de membros da igreja
        </p>
      </header>

      <FormularioMembro onSubmit={handleCadastrarMembro} mensagem={mensagem}/>
    </div>
  )
}

export default App
