const express = require('express');
const next = require('next');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./lib/mongodb');
const Nome = require('./models/Nome');
const Apelido = require('./models/Apelido');
const Historico = require('./models/Historico');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();



// ===== ROTAS DA API REST =====

// GET /api/nomes - Carregar todos os nomes
app.get('/api/nomes', async (req, res) => {
  try {
    const nomes = await Nome.find();  // Busca todos os nomes no MongoDB
    res.json(nomes);
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});

// GET /api/apelidos - Carregar todos os apelidos
app.get('/api/apelidos', async (req, res) => {
  try {
    const apelidos = await Apelido.find();  // Busca todos os apelidos no MongoDB
    res.json(apelidos);
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});


// POST /api/nomes - Criar novo nome
app.post('/api/nomes', async (req, res) => {
  try {
    const { nome } = req.body;  // Extrai dados do body da requisição

    const novoNome = new Nome({
      nome
    });

    const nomeSalvo = await novoNome.save();  // Guarda no MongoDB
    res.status(201).json(nomeSalvo);
  } catch (error) {
    console.error('Erro ao criar nome:', error);
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});

// POST /api/apelidos - Criar novo apelido
app.post('/api/apelidos', async (req, res) => {
  try {
    const { apelido } = req.body;  // Extrai dados do body da requisição

    const novoApelido = new Apelido({
      apelido
    });

    const apelidoSalvo = await novoApelido.save();  // Guarda no MongoDB
    res.status(201).json(apelidoSalvo);
  } catch (error) {
    console.error('Erro ao criar apelido:', error);
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});

// POST /api/historico - Criar novo histórico (nome completo)
app.post('/api/historico', async (req, res) => {
  try {
    const { nomeCompleto } = req.body;  // Extrai dados do body da requisição

    const novoHistorico = new Historico({
      nomeCompleto: nomeCompleto
    });

    const historicoSalvo = await novoHistorico.save();  // Guarda no MongoDB
    res.status(201).json(historicoSalvo);
  } catch (error) {
    console.error('Erro ao criar histórico:', error);
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});
// GET /api/historico - Carregar todos os históricos (nomes completos)
app.get('/api/historico', async (req, res) => {
  try {
    const historicos = await Historico.find();  // Busca todos os históricos no MongoDB
    res.json(historicos);
  } catch (error) {
    console.error('Erro ao carregar históricos:', error);
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});



// ===== INICIALIZAÇÃO DO SERVIDOR =====

app.use((req, res) => {
  return handle(req, res);
});

const PORT = process.env.PORT || 3000;

nextApp.prepare().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor Next.js + Express a correr em http://localhost:${PORT}`);
    console.log(`📡 API disponível em http://localhost:${PORT}/api/produtos`);
  });
});
