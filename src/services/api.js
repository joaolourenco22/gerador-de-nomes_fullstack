// Carregar todos os nomes
export async function carregarNomesAPI() {
  try {
    const response = await fetch('/api/nomes')

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao carregar nomes')
    }
    
    const data = await response.json()
    return data

  } catch (error) {
    console.error('Erro ao carregar nomes:', error)
    throw error
  }
}

// Adicionar novo nome
export async function adicionarNomesAPI(nome) {
  try {
    const response = await fetch('/api/nomes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nome)
    })

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao adicionar nome')
    }
    
    const resultado = await response.json()
    return resultado

  } catch (error) {
    console.error('Erro ao adicionar nome:', error)
    throw error
  }
}

// Carregar todos os apelidos
export async function carregarApelidosAPI() {
  try {
    const response = await fetch('/api/apelidos')

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao carregar apelidos')
    }
    
    const data = await response.json()
    return data

  } catch (error) {
    console.error('Erro ao carregar apelidos:', error)
    throw error
  }
}

// Adicionar novo apelido
export async function adicionarApelidosAPI(apelido) {
  try {
    const response = await fetch('/api/apelidos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apelido)
    })

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao adicionar apelido')
    }
    
    const resultado = await response.json()
    return resultado

  } catch (error) {
    console.error('Erro ao adicionar apelido:', error)
    throw error
  }
}


//Criar histórico com get histórico + POST histórico (que vem do criar nome completo) 
// Adicionar novo histórico (nome completo)
export async function adicionarHistoricoAPI(nomeCompleto) {
  try {
    const response = await fetch('/api/historico', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nomeCompleto })
    })

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao adicionar histórico api')
    }
    
    const resultado = await response.json()
    return resultado

  } catch (error) {
    console.error('Erro ao adicionar histórico:', error)
    throw error
  }
}

// Carregar todos os históricos
export async function carregarHistoricoAPI() {
  try {
    const response = await fetch('/api/historico')

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao carregar histórico')
    }
    
    const data = await response.json()
    return data

  } catch (error) {
    console.error('Erro ao carregar histórico:', error)
    throw error
  }
}