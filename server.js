import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Importe o cors
import axios from 'axios';

// Inicializa o Express
const app = express();
const port = 3000;

// Middleware CORS para permitir requisições do frontend (porta 5173)
app.use(cors());

// Middleware para processar JSON
app.use(bodyParser.json());

// URL do Webhook Make (antigo Integromat)
const webhookURL = 'https://hook.us1.make.com/25ei654hvgyobastey6pocyxipdp48k7';

// Função para enviar dados ao Webhook
async function enviarDadosParaWebhook(dados) {
  try {
    const response = await axios.post(webhookURL, dados);
    console.log('Dados enviados para o Webhook:', response.data);
  } catch (error) {
    console.error('Erro ao enviar para o Webhook:', error.message);
  }
}

// Rota para receber os dados do formulário
app.post('/enviarFormulario', async (req, res) => {
  try {
    const { nome, telefone, email, cidadeUf, valorContaLuz } = req.body;

    if (!nome || !telefone || !email || !cidadeUf || !valorContaLuz) {
      return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
    }

    // Envia os dados para o Webhook
    await enviarDadosParaWebhook({ nome, telefone, email, cidadeUf, valorContaLuz });

    res.json({ mensagem: 'Dados enviados com sucesso para o Webhook!' });
  } catch (error) {
    console.error('Erro ao processar o formulário:', error.message);
    res.status(500).json({ erro: 'Erro ao processar o formulário.' });
  }
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
