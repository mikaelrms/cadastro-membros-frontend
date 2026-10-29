
function FormularioMembro({ onSubmit, mensagem }) {
  return (
    <main className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">
        Novo membro
      </h2>

      {mensagem && (
        <p className="mb-4 rounded-md bg-blue-50 p-3 text-sm text-blue-800">
          {mensagem}
        </p>
      )}

      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label htmlFor="nomeCompleto" className="mb-1 block text-sm font-medium text-gray-700">
            Nome completo
          </label>
          <input
            id="nomeCompleto"
            name="nomeCompleto"
            type="text"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="dataNascimento" className="mb-1 block text-sm font-medium text-gray-700">
            Data de nascimento
          </label>
          <input
            id="dataNascimento"
            name="dataNascimento"
            type="date"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="telefone" className="mb-1 block text-sm font-medium text-gray-700">
            Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="cep" className="mb-1 block text-sm font-medium text-gray-700">
            CEP
          </label>
          <input id="cep" name="cep" type="text" className="w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>

        <div>
          <label htmlFor="rua" className="mb-1 block text-sm font-medium text-gray-700">
            Rua
          </label>
          <input id="rua" name="rua" type="text" className="w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>

        <div>
          <label htmlFor="numeroEndereco" className="mb-1 block text-sm font-medium text-gray-700">
            Número
          </label>
          <input id="numeroEndereco" name="numeroEndereco" type="text" className="w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>

        <div>
          <label htmlFor="complemento" className="mb-1 block text-sm font-medium text-gray-700">
            Complemento
          </label>
          <input id="complemento" name="complemento" type="text" className="w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>

        <div>
          <label htmlFor="bairro" className="mb-1 block text-sm font-medium text-gray-700">
            Bairro
          </label>
          <input id="bairro" name="bairro" type="text" className="w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>

        <div>
          <label htmlFor="cidade" className="mb-1 block text-sm font-medium text-gray-700">
            Cidade
          </label>
          <input id="cidade" name="cidade" type="text" className="w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>

        <div>
          <label htmlFor="estadoCivil" className="mb-1 block text-sm font-medium text-gray-700">
            Estado civil
          </label>
          <select id="estadoCivil" name="estadoCivil" defaultValue="" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2">
            <option value="" disabled>Selecione</option>
            <option value="SOLTEIRO">Solteiro(a)</option>
            <option value="CASADO">Casado(a)</option>
            <option value="DIVORCIADO">Divorciado(a)</option>
            <option value="VIUVO">Viúvo(a)</option>
            <option value="SEPARADO">Separado(a)</option>
            <option value="OUTRO">Outro</option>
          </select>
        </div>

        <div>
          <label htmlFor="possuiFilhos" className="mb-1 block text-sm font-medium text-gray-700">
            Possui filhos?
          </label>
          <select id="possuiFilhos" name="possuiFilhos" defaultValue="false" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2">
            <option value="false">Não</option>
            <option value="true">Sim</option>
          </select>
        </div>

        <div>
          <label htmlFor="quantidadeFilhos" className="mb-1 block text-sm font-medium text-gray-700">
            Quantidade de filhos
          </label>
          <input id="quantidadeFilhos" name="quantidadeFilhos" type="number" min="0" defaultValue="0" className="w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>

        <div>
          <label htmlFor="batizado" className="mb-1 block text-sm font-medium text-gray-700">
            É batizado?
          </label>
          <select id="batizado" name="batizado" defaultValue="false" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2">
            <option value="false">Não</option>
            <option value="true">Sim</option>
          </select>
        </div>

        <div>
          <label htmlFor="dataBatismo" className="mb-1 block text-sm font-medium text-gray-700">
            Data do batismo
          </label>
          <input id="dataBatismo" name="dataBatismo" type="date" className="w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>

        <div>
          <label htmlFor="localBatismo" className="mb-1 block text-sm font-medium text-gray-700">
            Local do batismo
          </label>
          <input id="localBatismo" name="localBatismo" type="text" className="w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>

        <button type="submit" className="rounded-md bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
          Cadastrar membro
        </button>
      </form>
    </main>
  )
}

export default FormularioMembro
