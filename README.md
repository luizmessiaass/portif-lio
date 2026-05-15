# Portfólio Luiz Messias

Portfólio em Next.js para apresentar projetos, sistemas, automações, sites e materiais de marketing com páginas detalhadas por projeto.

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Estrutura principal

- `src/app`: rotas da aplicação.
- `src/sections`: seções da home.
- `src/components`: componentes reutilizáveis.
- `src/lib/projects.ts`: base de dados dos projetos exibidos no portfólio.
- `public/projects`: imagens e capturas usadas nos cards e nas páginas detalhadas.

## Observação

As páginas de detalhe dos projetos são geradas a partir dos dados em `src/lib/projects.ts`. Para adicionar ou editar um projeto, atualize esse arquivo e inclua os assets correspondentes em `public/projects`.
