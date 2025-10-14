import { useState, useEffect } from 'react';
import { carregarNomesAPI, carregarApelidosAPI, adicionarHistoricoAPI } from "@/services/api";

export default function GerarNomeCompletoComponente() {
  const [nomeCompleto, setNomeCompleto] = useState('');

async function gerarNomeCompleto() {
    try {
      const [nomes, apelidos] = await Promise.all([
        carregarNomesAPI(),
        carregarApelidosAPI()
      ]);

      if (nomes.length === 0 || apelidos.length === 0) {
        throw new Error('É necessário ter pelo menos um nome e um apelido cadastrados');
      }

      const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
      const apelidoAleatorio = apelidos[Math.floor(Math.random() * apelidos.length)];
      const nomeGerado = `${nomeAleatorio.nome} ${apelidoAleatorio.apelido}`;

      await adicionarHistoricoAPI(nomeGerado);

      setNomeCompleto(nomeGerado);
      window.dispatchEvent(new CustomEvent('historicoAtualizado'));

      return nomeGerado;

    } catch (error) {
      console.error('Erro ao gerar nome completo:', error);
      throw error;
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-1">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Gerar Nome Completo</h2>
      <button
        onClick={gerarNomeCompleto}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4"
      >
        Gerar Nome Completo
      </button>
      {nomeCompleto && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="text-xl font-semibold text-gray-900">Nome Completo Gerado:</h3>
          <p className="text-lg text-gray-800">{nomeCompleto}</p>
        </div>
      )}
    </div>
  );
}
