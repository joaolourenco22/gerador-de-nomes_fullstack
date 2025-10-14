import { useState, useEffect } from 'react'
import { adicionarApelidosAPI, carregarApelidosAPI } from '@/services/api'

export default function AdicionarApelidosComponente() {
  const [apelido, setApelido] = useState('')
  const [apelidos, setApelidos] = useState([])

  async function adicionarApelidos(apelido) {

    try {
      await adicionarApelidosAPI({ apelido })
      setApelido('')
    } catch (error) {
      alert('Erro ao adicionar apelido')
    }
  }
  
    // Função para carregar apelidos
    async function carregarApelidos() {
      try {
        const data = await carregarApelidosAPI()
        setApelidos(data)
      } catch (error) {
        alert('Erro ao carregar apelidos')
      }
    }

        // Carregar apelidos quando a página abre
    useEffect(() => {
      carregarApelidos()
    }, [])


  return (
    <div className=" bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">➕ Adicionar Apelido</h2>

        </div>
        <input
          type="text"
          value={apelido}
          onChange={(e) => setApelido(e.target.value)}
          placeholder="Escrever novo apelido"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button onClick={() => adicionarApelidos(apelido)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Adicionar
        </button>
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-4">Apelidos Adicionados:</h3>
          <ul className="list-disc list-inside space-y-2">
            {apelidos.map((item) => (
              <li key={item._id} className="text-gray-800">{item.apelido}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
