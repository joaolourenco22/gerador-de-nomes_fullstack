import { useState, useEffect } from 'react';
import { carregarHistoricoAPI } from '@/services/api';

export default function HistoricoNomesComponente() {
  const [historico, setHistorico] = useState([]);

  async function fetchHistorico() {
    const dados = await carregarHistoricoAPI();
    setHistorico(dados);
  }

  useEffect(() => {
    fetchHistorico();
  }, []);

  useEffect(() => {
    fetchHistorico();

    const handleHistoricoAtualizado = () => {
      fetchHistorico();
    };

    window.addEventListener('historicoAtualizado', handleHistoricoAtualizado);

    return () => {
      window.removeEventListener('historicoAtualizado', handleHistoricoAtualizado);
    };
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