# School Management System Backend

Este projeto é o backend de um sistema de gestão escolar, fornecendo uma API RESTful para gerenciar alunos, matérias, notas e turmas. O backend é construído com Node.js, Express e Sequelize, e está pronto para ser executado em Docker.

## Estrutura de Pastas

```
Backend/
├── APP/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── database.js
│   └── sync.js
├── Docs/
├── Dockerfile
├── db.Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Tecnologias

- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL (via Docker)
- Docker e Docker Compose

## Pré-requisitos

- Docker e Docker Compose instalados

## Como rodar o projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/HenriqueForin0905/ProjetoEscola.git
   cd ProjetoEscola/ProjetoADS/Backend
   ```

2. **Suba os containers:**
   ```sh
   docker-compose up --build
   ```
   O backend estará disponível em `http://localhost:3000`.

3. **Sincronize as tabelas do banco (opcional):**
   Se precisar criar/sincronizar as tabelas manualmente:
   ```sh
   docker-compose exec app node APP/sync.js
   ```

## Scripts npm

- `npm start` — Inicia o servidor Express
- `npm run dev` — Inicia o servidor com nodemon (desenvolvimento)
- `npm run sync` — Sincroniza as tabelas do banco de dados (cria se não existir)

## Middlewares

- **Logger:** Loga todas as requisições recebidas
- **Tratamento de Erros:** Centraliza respostas de erro 500

## Endpoints

- **Alunos**
  - `GET /api/alunos`
  - `POST /api/alunos`
  - `GET /api/alunos/:id`
  - `PUT /api/alunos/:id`
  - `DELETE /api/alunos/:id`
- **Matérias**
  - `GET /api/materias`
  - `POST /api/materias`
  - `GET /api/materias/:id`
  - `PUT /api/materias/:id`
  - `DELETE /api/materias/:id`
- **Notas**
  - `GET /api/notas`
  - `POST /api/notas`
  - `GET /api/notas/:id`
  - `PUT /api/notas/:id`
  - `DELETE /api/notas/:id`
- **Turmas**
  - `GET /api/turmas`
  - `POST /api/turmas`
  - `GET /api/turmas/:id`
  - `PUT /api/turmas/:id`
  - `DELETE /api/turmas/:id`

## Observações

- O banco de dados é inicializado automaticamente via Docker Compose.
- O arquivo `.env` pode ser usado para variáveis de ambiente, se desejar.
- O projeto está pronto para deploy em qualquer ambiente Docker.

