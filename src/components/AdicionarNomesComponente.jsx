import { useState, useEffect } from 'react'
import { adicionarNomesAPI, carregarNomesAPI } from '@/services/api'

export default function AdicionarNomeComponente() {
  const [nome, setNome] = useState('')
  const [nomes, setNomes] = useState([])

  async function adicionarNomes(nome) {

    try {
      await adicionarNomesAPI({ nome })
      setNome('')
    } catch (error) {
      alert('Erro ao adicionar nome')
    }
  }

  // Função para carregar nomes
  async function carregarNomes() {
    try {
      const data = await carregarNomesAPI()
      setNomes(data)
    } catch (error) {
      alert('Erro ao carregar nomes')
    }
  }

  // Carregar nomes quando a página abre
  useEffect(() => {
    carregarNomes()
  }, [])


  return (
    <div className=" bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">➕ Adicionar Nome</h2>

        </div>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Escrever novo nome"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button onClick={() => adicionarNomes(nome)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Adicionar
        </button>
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-4">Nomes Adicionados:</h3>
          <ul className="list-disc list-inside space-y-2">
            {nomes.map((item) => (
              <li key={item._id} className="text-gray-800">{item.nome}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
