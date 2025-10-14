import Link from 'next/link';
import AdicionarNomeComponente from '@/components/AdicionarNomesComponente';
import AdicionarApelidoComponente from '@/components/AdicionarApelidosComponente';
import GerarNomeCompletoComponente from '@/components/GerarNomeCompletoComponente';
import HistoricoNomesComponente from '@/components/HistóricoNomesComponente';


export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Gerador de Nomes e Apelidos
      </h1>
      
      <AdicionarNomeComponente />
      <AdicionarApelidoComponente />
      <GerarNomeCompletoComponente />
      <HistoricoNomesComponente />
    </div>
  );
}
