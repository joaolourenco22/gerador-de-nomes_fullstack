import { useState, useEffect } from 'react';
import { carregarHistoricoAPI } from '@/services/api';

export default function HistoricoNomesComponente() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    async function fetchHistorico() {
      const dados = await carregarHistoricoAPI();
      setHistorico(dados);
    }

    fetchHistorico();
  }, []);


  return (
    <div>
      <h2>Histórico de Nomes</h2>
      <ul>
        {historico.map(item => (
          <li key={item._id}>{item.nomeCompleto}</li>
        ))}
      </ul>
    </div>
  );
}