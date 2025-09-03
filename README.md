# ApiLocation

ApiLocation é uma API RESTful desenvolvida em Node.js para gerenciar informações de localizações. O objetivo principal é fornecer endpoints para cadastro, consulta, atualização e remoção de dados relacionados a locais, facilitando a integração com sistemas que necessitam dessas informações.

## Funcionalidades

- Cadastro de novas localizações
- Consulta de localizações cadastradas
- Atualização de dados de localizações
- Remoção de localizações

## Estrutura do Projeto

```
src/
	index.js                # Ponto de entrada da aplicação
	controller/
		locationController.js # Lógica dos endpoints de localização
	models/
		Location.js           # Modelo de dados de localização
	routes/
		locationRoutes.js     # Rotas da API de localização
```

## Como executar

1. Instale as dependências:
	 ```bash
	 npm install
	 ```
2. Inicie a aplicação:
	 ```bash
	 npm start
	 ```

## Endpoints principais

- `GET /locations` — Lista todas as localizações
- `POST /locations` — Cria uma nova localização
- `PUT /locations/:id` — Atualiza uma localização existente
- `DELETE /locations/:id` — Remove uma localização

## Configuração de ambiente

Você pode configurar variáveis de ambiente conforme necessário para banco de dados, porta, etc.

## Deploy

O projeto inclui um arquivo `vercel.json` para facilitar o deploy na Vercel.

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.

## Licença

Este projeto está sob a licença MIT.
