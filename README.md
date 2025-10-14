# Next.js + Express Project

Um projeto full-stack que combina Next.js para o frontend com Express.js para o backend, criando uma aplicação web completa para gestão de produtos.

## 🚀 Funcionalidades

- ✅ Listagem de produtos
- ✅ Adicionar novos produtos
- ✅ Editar produtos existentes
- ✅ Eliminar produtos
- ✅ Visualização detalhada de produtos
- ✅ Interface responsiva


## 🛠️ Tecnologias Utilizadas

- **Next.js** - Framework React para produção
- **Express.js** - Framework web para Node.js
- **React 19** - Biblioteca para interfaces de utilizador
- **TailwindCSS** - Framework CSS utilitário
- **CORS** - Middleware para Cross-Origin Resource Sharing
- **Nodemon** - Ferramenta de desenvolvimento para reinício automático


## 📁 Estrutura do Projeto

```
├── src/
│   ├── components/
│   │   ├── AdicionarProduto.jsx
│   │   ├── EditarProduto.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── index.js
│   │   ├── produtos.js
│   │   └── produto/[id].js
│   ├── services/
│   │   └── api.js
│   └── styles/
│       └── globals.css
├── public/
├── db.json
├── server.js
└── package.json
```


### 👩🏼‍💻 Passos para executar o projeto

1. **Instale as dependências e corra o projeto**
   ```bash
   npm install
   npm run dev
    ```

2. **Acesse a aplicação**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - API Backend: [http://localhost:3000/api](http://localhost:3000/api)


### Scripts Disponíveis

- `npm run dev` - Executa o servidor em modo desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Executa o servidor em modo produção
- `npm run server` - Executa apenas o servidor Express


## 📡 API Endpoints

A aplicação inclui os seguintes endpoints da API:

- `GET /api/produtos` - Lista todos os produtos
- `GET /api/produto/:id` - Obtém detalhes de um produto específico
- `POST /api/produtos` - Adiciona um novo produto
- `PUT /api/produtos/:id` - Atualiza um produto existente
- `DELETE /api/produtos/:id` - Elimina um produto


## 🎨 Interface

A aplicação inclui as seguintes páginas:

- **Home** (`/`) - Página inicial
- **Produtos** (`/produtos`) - Lista e gestão de produtos
- **Detalhes do Produto** (`/produto/[id]`) - Visualização detalhada


# Tens um tutorial para fazeres este projeto do zero em `next_com_express.md`





produtos.js

import { useState, useEffect } from 'react'
import Link from 'next/link'
import AdicionarProduto from '@/components/AdicionarNomesComponente'
import { carregarNomesAPI } from '@/services/api'

export default function Produtos() {
  const [produtos, setProdutos] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [produtoToEdit, setProdutoToEdit] = useState(null)

  // Carregar produtos quando a página abre
  useEffect(() => {
    carregarProdutos()
  }, [])

  // Função para carregar produtos
  async function carregarNomes() {
    try {
      const data = await carregarNomesAPI()
      setNomes(data)
    } catch (error) {
      alert('Erro ao carregar nomes')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">🧾 Gestão de Nomes</h1>
          <p className="text-gray-600">Gerencie todos os nomes da sua loja</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
          ➕ Adicionar Produto
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">ID</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Nome</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Preço</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(produto => (
              <tr key={produto._id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900">{produto._id}</td>
                <td className="py-3 px-4 text-gray-900 font-medium">{produto.nome}</td>
                <td className="py-3 px-4 text-blue-600 font-bold">€{produto.preco}</td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <Link href={`/produto/${produto._id}`} className="bg-white border border-blue-600 text-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-50">
                      Ver
                    </Link>

                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}



[id]

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { carregarProdutoPorIdAPI } from '@/services/api'

export default function ProdutoDetalhes() {
  const router = useRouter()
  const { id } = router.query
  const [produto, setProduto] = useState(null)

  useEffect(() => {
    const carregarProduto = async () => {
      if (!id) return
      
      try {
        const data = await carregarProdutoPorIdAPI(id)
        setProduto(data)
      } catch (error) {
        console.error(error)
        alert('Erro ao carregar produto')
      }
    }
    
    carregarProduto()
  }, [id])

  if (!produto) return <div className="text-center">Produto não encontrado</div>

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Link href="/produtos" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Voltar aos Produtos
      </Link>

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{produto.nome}</h1>
        <p className="text-3xl font-bold text-blue-600 mb-6">€{produto.preco}</p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-gray-700">ID do Produto: <span className="font-semibold">{produto._id}</span></p>
        </div>
      </div>
    </div>
  )
}
