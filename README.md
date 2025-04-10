# AVCloud
Entrega de Avaliação.

Objetivo: 
-> Aplicação de reserva de messas e pedidos. 

🧾 Documentação da API - Restaurante Sabor Caseiro
📍 URL Base
```bash
https://sabor-caseiro-456406.rj.r.appspot.com
```
🔹 GET /
Descrição:
Mensagem de boas-vindas à API.
Resposta de sucesso (200 OK):
```bash
"🍽️ Bem-vindo ao Restaurante Sabor Caseiro!"
"RESERVAS / PEDIDOS"
```
🔹 POST /reserva
Descrição:
Cria uma nova reserva.
Corpo da requisição (application/json):
```bash
{
  "nome": "Brendo Garcia da Silva",
  "telefone": "99686-1909",
  "data": "2025-04-10T14:55"
}
```
Resposta de sucesso (200 OK):
```bash
{
  "nome": "Brendo Garcia da Silva",
  "telefone": "99686-1909",
  "data": "2025-04-10T14:55"
}
```
🔹 POST /pedido
Descrição:
Registra um novo pedido de cliente.
Corpo da requisição (application/json):
```bash
{
  "cliente": "Brendo",
  "itens": "Picanha"
}
```
Resposta de sucesso (200 OK):
```bash
{
      "cliente": "Brendo ",
      "itens": "Picanha"
}
```
🔹 GET /resumo
Descrição:
Retorna um resumo com todas as reservas e pedidos registrados até o momento.
Resposta de sucesso (200 OK):
```bash
{
  "reservas": [
    {
      "nome": "Brendo Garcia da Silva",
      "telefone": "99686-1909",
      "data": "2025-04-10T14:55"
    }
  ],
  "pedidos": [
    {
      "cliente": "Brendo",
      "itens": "Picanha"
    },
    {
      "cliente": "Brendo",
      "itens": "Picanha"
    }
  ]
}
```

🧰 Tecnologias utilizadas
Node.js

Deploy no Google Cloud

Controle de versionamento com GitHub e automações com GitHub Actions + Terraform

Frontend simples em HTML e CSS

🚀 Como executar o projeto
1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
2. Instale as dependências
   ```bash
   npm install
   ```
3. Configure o ambiente de nuvem
 ```bash
  Criar uma conta no Google Cloud Platform (GCP)
  Criar um projeto no GCP
  Ativar a API de Compute Engine e Cloud Run
  Criar uma chave de conta de serviço com permissões adequadas (em formato JSON)
  Salvar essa chave localmente e usá-la no Terraform
```
4. Instale o Terraform
   ```bash
   Instale o Terraform seguindo as instruções do site oficial:
   👉 https://developer.hashicorp.com/terraform/install
   ```
5. Execute o Terraform
Dentro da pasta do projeto (ou da pasta onde está o código Terraform):
  ```bash
    terraform init
    terraform apply
  ```
⚠️ Atenção! Antes de executar o Terraform:
Altere no repositório GitHub (ou em seu arquivo de configuração .tf) o caminho da chave de segurança gerada no Google Cloud.
Essa chave é usada para autenticar o Terraform com a sua conta no GCP.
Você também pode definir a variável da chave via ambiente:
```bash
export GOOGLE_APPLICATION_CREDENTIALS="/caminho/para/sua-chave.json"
```
