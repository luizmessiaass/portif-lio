# NEXT LAB - Profit Whisperer Wizard

## What This Is

Plataforma web de inteligencia financeira e mentoria para empreendedores brasileiros de e-commerce. Oferece calculadoras de precificacao, dashboard financeiro, registro mensal de metricas e acompanhamento de mentores. Construida com React + TypeScript + Supabase. Projeto existente sendo evoluido com novas features e melhorias de UX.

## Core Value

Empreendedores de e-commerce conseguem entender e otimizar sua lucratividade real com acompanhamento personalizado do mentor.

## Requirements

### Validated

- V Calculadora de precos com wizard passo-a-passo (modo preco fixo e markup) -- existente
- V Dashboard financeiro com KPIs mensais, graficos e indicador de saude do negocio -- existente
- V Registro mensal de dados financeiros (receita, pedidos, custos, margem, CAC, ROAS) -- existente
- V Sistema de autenticacao com Supabase (cadastro, login, sessao) -- existente
- V Painel de mentor para gerenciar alunos -- existente
- V Analise de negocio com IA -- existente
- V Metas OKR -- existente
- V Perfil de usuario com configuracoes financeiras -- existente

### Active

- [ ] Sistema de tarefas: mentor cria e atribui tarefas individuais para alunos
- [ ] Sistema de tarefas: aluno visualiza e marca tarefas como concluidas
- [ ] Sistema de tarefas: mentor acompanha status das tarefas via painel
- [ ] Navegacao simplificada e intuitiva (reducao de cliques, fluxo claro)
- [ ] Interface responsiva e funcional em dispositivos moveis
- [ ] Melhoria geral de UX (consistencia visual, feedback ao usuario)

### Out of Scope

- CopyTools (gerador de copys) -- diferido, focar no essencial primeiro
- EcommerceTools (calculadoras auxiliares) -- diferido, focar no essencial primeiro
- Descricoes (gerador de descricoes de produto) -- diferido, focar no essencial primeiro
- Gamificacao (pontos, rankings, conquistas) -- diferido para milestone futuro
- Integracoes externas (Shopify, Mercado Livre) -- complexidade alta, nao prioritario
- App mobile nativo -- web-first, responsividade resolve por agora

## Context

- Repositorio existente: `profit-whisperer-wizard` clonado de GitHub
- Stack atual: React 18, TypeScript, Vite, shadcn/ui, Tailwind CSS, Supabase, TanStack Query, Recharts
- Banco de dados ja tem schema para profiles, monthly_records, business_analyses, mentor_notes, assignments
- Algumas paginas (CopyTools, EcommerceTools, Descricoes) sao placeholders sem funcionalidade real
- Publico-alvo: empreendedores brasileiros de e-commerce, muitos acessam via celular
- Modelo de negocio: plataforma de mentoria com relacao mentor-aluno

## Constraints

- **Tech stack**: Manter React + TypeScript + Supabase (ja estabelecido)
- **UI framework**: Manter shadcn/ui + Tailwind (ja em uso extensivo)
- **Banco**: Supabase PostgreSQL (schema existente deve ser preservado/estendido)
- **Compatibilidade**: Nao quebrar funcionalidades existentes que ja funcionam

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Focar em tarefas + UX + mobile | Maior impacto para alunos e mentores com escopo controlado | -- Pending |
| Diferir features incompletas | Melhor entregar menos com qualidade do que muita coisa quebrada | -- Pending |
| Manter stack existente | Reescrever seria desperdicio, stack e moderna e adequada | -- Pending |
| Tarefas individuais (nao em grupo) | Modelo de mentoria e 1:1, tarefas personalizadas por aluno | -- Pending |
| Entrega simples (checkbox) | MVP do sistema de tarefas, sem complexidade de uploads/notas | -- Pending |

---
*Last updated: 2026-03-02 after initialization*
