# Deploy na Vercel

## Passos para fazer deploy:

### 1. Preparar o repositório Git (se ainda não estiver no GitHub)
```bash
git init
git add .
git commit -m "Initial commit - Portfolio with favicon"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git push -u origin main
```

### 2. Deploy na Vercel (Opção A - CLI)
```bash
npm install -g vercel
vercel
```

### 3. Deploy na Vercel (Opção B - Web)
- Acesse [vercel.com](https://vercel.com)
- Faça login com GitHub
- Clique em "New Project"
- Selecione o repositório
- Configure as variáveis de ambiente (se houver)
- Clique em "Deploy"

## Configuração

O arquivo `vercel.json` já está configurado com:
- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`

## Domínio

Após o deploy, você pode:
- Usar o domínio padrão: `seu-projeto.vercel.app`
- Conectar um domínio customizado nas configurações do projeto

## Favicon

O favicon foi configurado como `public/favicon.jpg` e será servido automaticamente pela Vercel.

## Variáveis de Ambiente

Se precisar de variáveis de ambiente, crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis. Elas devem ser configuradas também no dashboard da Vercel em "Settings > Environment Variables".
