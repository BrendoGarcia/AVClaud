const express = require('express');  
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

let reservas = [];
let pedidos = [];

app.get('/', (req, res) => {
  res.send('🍽️ Bem-vindo ao Restaurante Sabor Caseiro!');
});

app.post('/reserva', (req, res) => {
  const reserva = req.body;
  reservas.push(reserva);
  res.send({ mensagem: 'Reserva registrada com sucesso!', reserva });
});

app.post('/pedido', (req, res) => {
  const pedido = req.body;
  pedidos.push(pedido);
  res.send({ mensagem: 'Pedido registrado com sucesso!', pedido });
});

app.get('/resumo', (req, res) => {
  res.json({ reservas, pedidos });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
