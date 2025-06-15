# Cadastro de usuários, login com autenticação e lista de usuários: Node.js

Este projeto implementa um sistema de autenticação simples usando **Node.js (Express + Prisma)** no backend e **React (vite, axios)** no frontend (`reactLogin`).

---

## 🧩 Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Prisma ORM
- JWT
- Mongo DB

### Frontend - Não consta nesse repositório
- React
- Axios

---

## 📁 Estrutura de Pastas

```
/node-express-login
├── prisma/
│   └── schema.prisma
├── routes/
│   └── private.js
│   └── public.js
├── middleware/
│   └── auth.js
├── server.js
├── .env
└── package.json

/reactLogin
├── src/
│   ├── pages/Login.jsx
│   ├── services/api.js
│   └── App.jsx
└── package.json
```

---

## ⚙️ Configuração do Backend

### 1. Clonar o projeto e acessar o diretório:

```bash
git clone https://github.com/profxx/node-express-login.git
cd node-express-login
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Configure o arquivo `.env`:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
JWT_SECRET="sua_chave_secreta"
```
## Tempo do Token - 5 minutos (pode ser alterado em routes/public.js)
---
## 🔐 Configuração do Prisma e Banco de Dados

Este projeto utiliza o Prisma com conexão ao banco MongoDB. Para garantir a segurança, o diretório `generated/prisma` foi excluído do versionamento (`.gitignore`).

### 📦 Passo a passo para configurar localmente:

1. **Crie um arquivo `.env` na raiz do backend com sua string de conexão do MongoDB:**

```
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome-db>?retryWrites=true&w=majority"
```

2. **Reinstale as dependências (se necessário):**

```bash
npm install
```

3. **Gere novamente os arquivos do Prisma:**

```bash
npx prisma generate
```

> ⚠️ Isso criará o diretório `generated/prisma` com base no seu `schema.prisma`.

---
