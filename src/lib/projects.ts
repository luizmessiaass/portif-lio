export type ProjectCategory = "Sistemas" | "Sites" | "Automações/IA" | "Design/Marketing";

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  shortCategory: string;
  description: string;
  impact: string;
  stack: string[];
  examples: string[];
  featured: boolean;
  sourcePath: string;
  tone: string;
  coverImage?: string;
  coverAlt?: string;
  gallery: ProjectImage[];
  intro?: string;
  context?: string;
  origin?: string;
  overview: string;
  challenge: string;
  solution: string;
  highlights: string[];
  detailSections: Array<{
    title: string;
    body: string;
  }>;
  captureNote?: string;
};

export const projectFilters = [
  "Todos",
  "Sistemas",
  "Sites",
  "Automações/IA",
  "Design/Marketing",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export const projects: Project[] = [
  {
    id: 1,
    slug: "elevater",
    title: "Elevater",
    category: "Sistemas",
    shortCategory: "Marketplace OS",
    description:
      "Plataforma multi-tenant para agências e sellers acompanharem carteira de clientes, vendas, ads, rentabilidade, promoções, analytics e automações de Mercado Livre, Shopee e Amazon em um único painel.",
    impact: "Transforma uma carteira de sellers em uma operação centralizada, com contexto por cliente e dados sincronizados.",
    stack: ["Next.js 16", "React 19", "Supabase", "PostgreSQL", "Claude AI", "Workers"],
    examples: ["Dashboard por cliente e marketplace", "DRE, margem e Curva ABC por SKU", "Promoções, ads, relatórios e sincronização"],
    featured: true,
    sourcePath: "Elevater",
    tone: "from-[#101010] via-[#2d2d2d] to-[#ff6a00]",
    coverImage: "/projects/elevater/login-cover.png",
    coverAlt: "Tela de login do Elevater",
    intro:
      "O Elevater é uma plataforma de operação para agências e sellers que precisam acompanhar marketplaces, margem, anúncios e relatórios em uma única rotina. A proposta é tirar o gestor do vai-e-vem entre contas, planilhas e painéis separados.",
    context:
      "O produto foi pensado para operações com muitos clientes e canais. Cada marca entra em um contexto próprio: carteira de clientes, Mercado Livre, Shopee, Amazon, rentabilidade, ads, promoções, relatórios e sincronização ficam agrupados para que a equipe leia performance e tome decisão sem perder referência.",
    origin:
      "Ele nasceu da necessidade de transformar uma operação manual de marketplace em um produto multi-tenant. Primeiro veio a dor de acompanhar margem, campanhas e SKUs em lugares diferentes; depois o sistema ganhou carteira de clientes, permissão por perfil, workers de sincronização e painéis específicos por marketplace.",
    gallery: [
      {
        src: "/projects/elevater/saint-map/02-dashboard-geral.png",
        alt: "Dashboard geral do Elevater no contexto Saint Germain",
        caption: "Dashboard geral no contexto SAINT GERMAIN BRAND, com faturamento, custos, investimento, Product Ads, Brand Ads e gráficos de performance.",
      },
      {
        src: "/projects/elevater/saint-map/04-rentabilidade-mercado-livre.png",
        alt: "Rentabilidade Mercado Livre no Elevater",
        caption: "Rentabilidade Mercado Livre com 590 produtos encontrados, cards de faturamento, custos, impostos, margem de contribuição e filtros por SKU, campanha, promoção e curva.",
      },
      {
        src: "/projects/elevater/saint-map/13-curva-abc.png",
        alt: "Curva ABC do Elevater",
        caption: "Curva ABC com distribuição por classe, faturamento por curva e ranking de produtos para priorizar os SKUs que mais sustentam receita e margem.",
      },
      {
        src: "/projects/elevater/saint-map/14-mapa-de-calor.png",
        alt: "Mapa de calor do Elevater",
        caption: "Mapa de calor de pedidos por hora e dia da semana, destacando janelas fortes de venda e períodos de menor atividade para planejar operação e mídia.",
      },
      {
        src: "/projects/elevater/saint-map/24-shopee-promocoes.png",
        alt: "Central de promoções Shopee no Elevater",
        caption: "Central de Promoções Shopee com cards por tipo de incentivo, margem total, descontos e uma tabela de produtos em promoção.",
      },
      {
        src: "/projects/elevater/saint-map/22-shopee-rentabilidade.png",
        alt: "Rentabilidade Shopee no Elevater",
        caption: "Rentabilidade Shopee com 136 produtos encontrados, alerta de permissão de Ads e separação clara entre pedidos sincronizados e métricas bloqueadas pela API.",
      },
      {
        src: "/projects/elevater/saint-map/05-anuncios.png",
        alt: "Gerenciador de anúncios do Elevater",
        caption: "Gerenciador de anúncios com abas para planilha, cadastro manual, cadastro por catálogo, rascunhos, custos, Tacos e publicação em lote.",
      },
      {
        src: "/projects/elevater/saint-map/07-brand-ads.png",
        alt: "Brand Ads no Elevater",
        caption: "Brand Ads com criação de campanha, listagem de campanhas, status, orçamento, ROAS, ACOS e indicadores de semáforo.",
      },
      {
        src: "/projects/elevater/saint-map/17-relatorios.png",
        alt: "Central de relatórios do Elevater",
        caption: "Central de relatórios com seleção rápida de período, intervalo customizado, opção de ocultar margem e exportação em HTML/PDF.",
      },
      {
        src: "/projects/elevater/saint-map/19-status-de-sync.png",
        alt: "Status de sincronização do Elevater",
        caption: "Status de sincronização por conta conectada, exibindo últimas rotinas concluídas, quantidade de registros e botão para sincronizar novamente.",
      },
      {
        src: "/projects/elevater/saint-map/25-amazon-catalogo.png",
        alt: "Catálogo Amazon no Elevater",
        caption: "área de Catálogo Amazon preparada no produto, sinalizada como módulo em breve dentro da mesma navegação multi-marketplace.",
      },
    ],
    overview:
      "O Elevater é uma plataforma de operação de marketplaces para agências que precisam entrar no contexto de cada cliente e acompanhar Mercado Livre, Shopee e Amazon sem alternar entre vários painéis. No mapeamento em produção, o cliente SAINT GERMAIN BRAND mostrou dashboards de receita, custos, rentabilidade, produtos, ads, promoções, Curva ABC, mapa de calor, relatórios e status de sincronização.",
    challenge:
      "Agências que gerenciam várias contas de sellers precisam consultar dados espalhados em marketplaces, painéis de ads e planilhas. A dificuldade aparece quando o time precisa entender margem, investimento, estoque, produto vencedor, campanha, promoção e status de sincronização sem perder o contexto do cliente.",
    solution:
      "Criei um painel multi-tenant com carteira de clientes, entrada por contexto, sincronização de dados, RBAC, dashboards e telas especializadas para cada rotina. O gestor consegue ingressar no cliente, filtrar períodos, auditar dados, exportar relatórios e navegar por marketplace mantendo a operação no mesmo produto.",
    highlights: [
      "Carteira de clientes com ação de ingressar e operar no contexto de uma marca específica.",
      "Mercado Livre com dashboard, rentabilidade, Product Ads, Brand Ads, Curva ABC, mapa de calor e anúncios.",
      "Shopee com rentabilidade, central de promoções e tratamento de permissões pendentes de Ads.",
      "Amazon estruturado na navegação para catálogo e rentabilidade, com telas preparadas para contas conectadas.",
      "Central de relatórios e status de sincronização para acompanhar rotinas, registros e exportações.",
    ],
    detailSections: [
      {
        title: "Fluxo operacional",
        body: "O uso começa na carteira de clientes: o operador localiza a marca, ingressa no contexto dela e passa a enxergar os dados filtrados por aquele cliente. A partir dali, a barra lateral organiza Mercado Livre, Shopee, Amazon, relatórios, alertas, logs e sincronização em uma rotina única.",
      },
      {
        title: "Inteligencia comercial",
        body: "As telas combinam indicadores executivos e tabelas densas. Rentabilidade mostra faturamento, custos, impostos, frete, margem e filtros por produto; Curva ABC prioriza SKUs; o mapa de calor revela horários fortes; e as telas de ads e promoções conectam mídia, desconto e margem.",
      },
      {
        title: "Dados e integrações",
        body: "A base usa Next.js, Supabase/PostgreSQL, RLS, workers e APIs dos marketplaces. O produto registra rotinas de sincronização, separa o que veio de cada marketplace e exibe avisos quando uma permissão externa ainda limita alguma métrica.",
      },
      {
        title: "Evidências capturadas",
        body: "Foram mapeadas telas reais após entrar no cliente SAINT GERMAIN BRAND: dashboard geral, rentabilidade Mercado Livre, Product Ads, Brand Ads, Curva ABC, mapa de calor, anúncios, relatórios, Shopee rentabilidade, Shopee promoções, Amazon catálogo e status de sincronização.",
      },
    ],
    captureNote:
      "Capturas refeitas em produção após ingressar no cliente SAINT GERMAIN BRAND pela Carteira de Clientes. As telas 404 e módulos sem dados foram descartados da galeria principal.",
  },
  {
    id: 2,
    slug: "adscalers",
    title: "Adscalers",
    category: "Sistemas",
    shortCategory: "Marketing intelligence",
    description:
      "SaaS de inteligência de marketing para acompanhar Meta Ads, Google Ads, GA4, metas, ações comerciais, planejamento anual, playbooks, clientes, automações, relatórios e operação de mídia em uma única plataforma.",
    impact: "Conecta performance, dados, planejamento e rotinas comerciais para transformar mídia paga em operação de crescimento monitorável.",
    stack: ["Next.js", "TypeScript", "Supabase", "Meta Ads", "Google Ads", "GA4", "IA", "Automação"],
    examples: ["Dashboard multicanal", "Metas, playbooks e planejamento", "Relatórios, automações e gestão de clientes"],
    featured: true,
    sourcePath: "adscale-saas/adscale-dashboard",
    tone: "from-[#111111] via-[#222716] to-[#c8f31d]",
    coverImage: "/projects/adscale-saas/prod/01-login.png",
    coverAlt: "Tela de login do Adscalers",
    intro:
      "O Adscalers é um SaaS para gestão de performance e operação comercial. Ele junta mídia paga, analytics, metas, planejamento, relatórios e rotinas de otimização em uma interface única para acompanhar clientes, campanhas e decisões de crescimento.",
    context:
      "O produto foi pensado para operações que precisam sair da leitura fragmentada entre Meta Ads, Google Ads, GA4, planilhas, relatórios manuais e conversas internas. A navegação organiza análise, performance, gestão e sistema em módulos claros para o time operar dados e execução no mesmo lugar.",
    origin:
      "O projeto nasceu como um dashboard de mídia e evoluiu para uma camada operacional mais completa: visão consolidada por cliente, saúde das contas, análise de campanhas, metas, ações comerciais, planejamento anual, brain da marca, playbooks, Commerce OS, pixel metrics, relatórios, automações, logs e configurações.",
    gallery: [
      {
        src: "/projects/adscale-saas/prod/01-login.png",
        alt: "Login desktop do Adscale SaaS",
        caption: "Login em produção com identidade adscale, acesso por e-mail e senha e visual limpo de produto SaaS.",
      },
      {
        src: "/projects/adscale-saas/prod/02-dashboard.png",
        alt: "Dashboard do Adscale SaaS",
        caption: "Dashboard principal com receita, investimento, ROAS, CPA, evolução diária, distribuição por plataforma, saúde das contas, indicadores GA4 e próximas ações. Dados sensíveis foram mascarados.",
      },
      {
        src: "/projects/adscale-saas/prod/03-meta-ads.png",
        alt: "Meta Ads no Adscale SaaS",
        caption: "Tela de Meta Ads com filtros, colunas, métricas de custo/conversão, campanhas, conjuntos e anúncios. Informações de conta, métricas e campanhas foram mascaradas.",
      },
      {
        src: "/projects/adscale-saas/prod/04-ga4.png",
        alt: "GA4 no Adscale SaaS",
        caption: "Análise GA4 com sessões, usuários, receita atribuída, taxa de conversão, bounce rate, funil de e-commerce, produtos e série temporal.",
      },
      {
        src: "/projects/adscale-saas/prod/05-goals.png",
        alt: "Metas no Adscale SaaS",
        caption: "Módulo de metas com acompanhamento operacional por período, status de risco, confiança, projeção e breakdown diário.",
      },
      {
        src: "/projects/adscale-saas/prod/06-commercial-actions.png",
        alt: "Ações comerciais no Adscale SaaS",
        caption: "Simulador comercial para configurar ofertas, validar margem, projetar receita, estimar ROAS mínimo viável e avaliar custo máximo de marketing.",
      },
      {
        src: "/projects/adscale-saas/prod/07-annual-planning.png",
        alt: "Planejamento anual no Adscale SaaS",
        caption: "Planejamento anual com metas mensais, investimento previsto, ROAS, risco por mês e status de execução, com dados financeiros mascarados.",
      },
      {
        src: "/projects/adscale-saas/prod/08-reports.png",
        alt: "Relatórios no Adscale SaaS",
        caption: "Gerador de relatórios semanais em HTML com seleção de período, canais ativos, campos de análise do gestor e apoio de IA para melhorar o texto antes da geração.",
      },
      {
        src: "/projects/adscale-saas/prod/09-clients-overview.png",
        alt: "Visão geral de clientes no Adscale SaaS",
        caption: "Visão consolidada da base de clientes com ranking, status, plataformas, receita, investimento, ROAS, meta e saúde. Nomes e valores foram mascarados.",
      },
      {
        src: "/projects/adscale-saas/prod/10-automation.png",
        alt: "Automações no Adscale SaaS",
        caption: "Área de automações com regras de otimização, aprovações, logs e simulações. Regras internas foram mascaradas por segurança.",
      },
    ],
    overview:
      "O Adscale SaaS é uma plataforma de marketing intelligence mapeada em produção de forma somente leitura. A navegação mostrou dashboard consolidado, Meta Ads, Google Ads, GA4, metas, ações comerciais, planejamento anual, brain da marca, playbooks, Commerce OS, Pixel Metrics, relatórios, visão de clientes, gerenciamento de anúncios, automações, logs, usuários, notificações e perfil.",
    challenge:
      "Times de performance normalmente precisam alternar entre plataformas de mídia, analytics, planilhas, relatórios e documentos estratégicos. Isso dificulta entender se investimento, receita, ROAS, CPA, metas e ações comerciais estão caminhando juntos.",
    solution:
      "A solução centraliza dados e rotina. O dashboard mostra a saúde geral; Meta Ads, Google Ads e GA4 aprofundam análise; metas e planejamento estruturam objetivos; ações comerciais e playbooks transformam estratégia em execução; relatórios e automações fecham o ciclo operacional.",
    highlights: [
      "Dashboard multicanal com receita, investimento, ROAS, CPA, saúde das contas, funil e próximas ações.",
      "Módulos dedicados para Meta Ads, Google Ads e GA4 com filtros, tabelas, colunas e métricas de conversão.",
      "Metas, planejamento anual e ações comerciais conectando objetivo financeiro, mídia e margem.",
      "Brain da marca, playbooks e Commerce OS para transformar inteligência de marca em rotina de execução.",
      "Relatórios semanais em HTML com campos do gestor e melhoria de texto por IA.",
      "Automações, logs, usuários, notificações e perfil para governança operacional.",
    ],
    detailSections: [
      {
        title: "Leitura de performance",
        body: "A primeira camada do produto é executiva: dashboard com plataformas, saúde das contas, indicadores de receita, investimento, ROAS, CPA, compras, cliques, CTR, sessões, conversão e ticket médio. A operação consegue enxergar rapidamente onde há tração ou risco.",
      },
      {
        title: "Análise por canal",
        body: "Meta Ads, Google Ads e GA4 têm telas próprias. A estrutura separa campanhas, conjuntos, anúncios, funil de e-commerce, produtos e eventos, permitindo ir do resumo executivo para a origem do dado sem sair do produto.",
      },
      {
        title: "Planejamento e decisão",
        body: "Metas, planejamento anual e ações comerciais conectam performance com decisão de negócio. O time consegue simular oferta, avaliar margem, projetar receita, definir ROAS mínimo viável e acompanhar risco mensal.",
      },
      {
        title: "Operação e governança",
        body: "A camada operacional inclui gestão de clientes, gerenciamento de anúncios, automações, logs, usuários, notificações e perfil. Isso dá base para operar muitos clientes com rastreabilidade e divisão clara entre análise, execução e sistema.",
      },
      {
        title: "IA e relatórios",
        body: "O módulo de relatórios permite montar uma entrega semanal em HTML com campos do gestor e apoio de IA para melhorar a análise antes da geração. Brain da Marca e Playbooks ajudam a manter contexto estratégico vivo dentro da rotina de mídia.",
      },
    ],
    captureNote:
      "Mapeamento feito em produção de forma segura e somente leitura. Foram puladas rotas ou ações com risco de escrita, como sincronização e API status. Dados sensíveis de cliente, usuário, conta, métricas financeiras, campanhas e regras internas foram mascarados nas imagens usadas no portfólio.",
  },
  {
    id: 3,
    slug: "mg-assessoria",
    title: "MG Assessoria",
    category: "Sistemas",
    shortCategory: "CRM de influencers",
    description:
      "Sistema interno para assessoria de marketing de influência, cobrindo clientes, marcas, influencers, campanhas, portal do cliente, envios, contratos, pagamentos, métricas, rastreio, calendário e relatórios.",
    impact: "Centraliza a operação de influência da prospecção ao relatório final.",
    stack: ["Next.js 16", "React 19", "Supabase", "RLS", "TypeScript", "Tailwind CSS", "Vitest"],
    examples: ["Clientes, influencers e campanhas", "Envios, contratos e pagamentos", "Métricas, rastreio e relatórios"],
    featured: true,
    sourcePath: "mg---assessoria",
    tone: "from-[#2b0612] via-[#6f1437] to-[#ec168f]",
    coverImage: "/projects/mg-assessoria/login-cover.png",
    coverAlt: "Tela de login do MG Assessoria",
    intro:
      "O MG Assessoria é um sistema interno para organizar a rotina de uma assessoria de marketing de influência. Ele conecta clientes, marcas, influenciadoras, campanhas, envios, contratos, pagamentos, métricas e relatórios em uma jornada única.",
    context:
      "A operação precisava sair de planilhas soltas e conversas espalhadas. O time precisava enxergar o que estava em prospecção, quem estava mapeada para cada campanha, quais kits foram enviados, quais pagamentos estavam pendentes e quais métricas já tinham sido registradas.",
    origin:
      "O projeto nasceu como um CRM operacional para dar previsibilidade ao atendimento. A partir do cadastro de marcas e influencers, o sistema cresceu para cobrir briefing, portal do cliente, contratos editáveis, planilhas de envio, rastreio, financeiro mensal e relatórios automáticos.",
    gallery: [
      {
        src: "/projects/mg-assessoria/desktop/01-dashboard.png",
        alt: "Dashboard desktop do MG Assessoria",
        caption: "Dashboard geral com indicadores de clientes, influencers, campanhas ativas, pagamentos pendentes, planejamento mensal, atividade recente e calendário.",
      },
      {
        src: "/projects/mg-assessoria/desktop/02-clientes.png",
        alt: "Tabela de clientes e marcas do MG Assessoria",
        caption: "Clientes/Marca organiza empresas com busca, filtro de status, CNPJ, nome fantasia, telefone, e-mail, município e UF.",
      },
      {
        src: "/projects/mg-assessoria/desktop/21-clientes-novo-cliente.png",
        alt: "Formulário de novo cliente do MG Assessoria",
        caption: "Formulário lateral de novo cliente com identificação, contato, endereço e classificação, mantendo o contexto da tabela ao fundo.",
      },
      {
        src: "/projects/mg-assessoria/desktop/03-influencers.png",
        alt: "Base de influencers do MG Assessoria",
        caption: "Base de Influencers com filtros por status, nicho, marca, seguidores, nota, views de stories e indicador de campanha vinculada.",
      },
      {
        src: "/projects/mg-assessoria/desktop/22-influencers-nova-influencer.png",
        alt: "Formulário de nova influencer do MG Assessoria",
        caption: "Cadastro de influencer com Instagram por handle ou URL, busca de perfil, seguidores, mídias de views, dados pessoais, contrato e endereço.",
      },
      {
        src: "/projects/mg-assessoria/desktop/04-campanhas.png",
        alt: "Campanhas no MG Assessoria",
        caption: "Campanhas lista a operação por cliente, status, quantidade de influencers e datas de criação/atualização.",
      },
      {
        src: "/projects/mg-assessoria/desktop/23-campanhas-nova-campanha.png",
        alt: "Formulário de nova campanha do MG Assessoria",
        caption: "Criação de campanha com cliente, briefing, meta financeira ou quantidade de influenciadoras e calendário de ações.",
      },
      {
        src: "/projects/mg-assessoria/desktop/05-crm.png",
        alt: "CRM Kanban do MG Assessoria",
        caption: "CRM em colunas para acompanhar tentativas de contato e negociações, com etapas como Contatar, Aguardando Retorno, Valor Recebido, Enviado ao Cliente e Aprovada.",
      },
      {
        src: "/projects/mg-assessoria/desktop/09-envios.png",
        alt: "Planilhas compartilhadas de envios no MG Assessoria",
        caption: "Envios permite criar uma planilha compartilhada por marca ou campanha para trabalhar no mesmo quadro que o cliente acompanha no portal.",
      },
      {
        src: "/projects/mg-assessoria/desktop/27-contratos-editor.png",
        alt: "Editor de contratos do MG Assessoria",
        caption: "Contratos abre um documento editável dentro do sistema, com modelo padrão, configurações, importação de template, exportação em PDF e geração final.",
      },
      {
        src: "/projects/mg-assessoria/desktop/28-pagamentos-adicionar-linha.png",
        alt: "Planilha de pagamentos do MG Assessoria",
        caption: "Pagamentos funciona como planilha mensal, com linha editável por influencer, valor, Pix, data, status, anotações e visão de investimento do mês.",
      },
      {
        src: "/projects/mg-assessoria/desktop/26-metricas-registro-manual.png",
        alt: "Registro manual de métricas do MG Assessoria",
        caption: "Métricas aceita registro manual de alcance, impressões, curtidas, comentários, compartilhamentos, salvamentos, views e link de evidência.",
      },
      {
        src: "/projects/mg-assessoria/desktop/25-metricas-importar-planilha.png",
        alt: "Importação de métricas no MG Assessoria",
        caption: "Importação de métricas por Google Sheets ou arquivo local CSV/XLSX, com vinculação obrigatória a campanha e identificação automática de colunas.",
      },
      {
        src: "/projects/mg-assessoria/desktop/29-rastreio-novo-envio.png",
        alt: "Novo envio de rastreio no MG Assessoria",
        caption: "Rastreio cadastra envios por influencer, marca, código de rastreio e descrição, centralizando acompanhamento de kits e entregas.",
      },
      {
        src: "/projects/mg-assessoria/desktop/30-relatorios-gerar-relatorio.png",
        alt: "Gerador de relatório do MG Assessoria",
        caption: "Relatórios gera um documento automático por campanha combinando dados de influencers, métricas e financeiro.",
      },
      {
        src: "/projects/mg-assessoria/desktop/18-usuarios.png",
        alt: "Gerenciamento de usuários do MG Assessoria",
        caption: "Usuários permite buscar contas, filtrar por função/status e controlar permissões com perfis ativos de administração.",
      },
    ],
    overview:
      "O MG Assessoria é um sistema operacional para uma assessoria de influencers. A aplicação junta CRM, cadastro de clientes e marcas, base de influenciadoras, campanhas, portal do cliente, envios, contratos, pagamentos, métricas, rastreio, calendário, notificações e relatórios em uma única interface interna. O mapeamento desktop foi feito localmente com dados fictícios do próprio projeto.",
    challenge:
      "Uma operação de influência tem muitos objetos conectados: cliente, marca, campanha, influencer, briefing, envio, entrega, métrica, pagamento e relatório. Quando isso fica espalhado em planilhas e conversas, o time perde histórico, aprovações, prazos e clareza financeira.",
    solution:
      "Modelei o fluxo em módulos especializados com dados compartilhados entre as áreas. O dashboard resume a operação; clientes, influencers e campanhas alimentam os fluxos; envios, contratos e pagamentos cuidam da execução; métricas e relatórios fecham o ciclo; e perfis/RLS separam acesso interno e portal do cliente.",
    highlights: [
      "Dashboard com KPIs, planejamento mensal, atividade recente e calendário.",
      "Base de clientes/marcas e influencers com filtros, cadastro lateral, dados de contrato e enriquecimento de Instagram.",
      "Campanhas com briefing, metas, calendário de ações e status de aprovação para o portal do cliente.",
      "Envios, rastreio, contratos editáveis e pagamentos mensais em formato de planilha operacional.",
      "Métricas por importação ou registro manual, relatórios automáticos e controle de usuários/permissões.",
    ],
    detailSections: [
      {
        title: "Fluxo operacional",
        body: "A rotina começa em Clientes/Marca e Base de Influencers, passa pela criação de campanha e segue para envio de kits, contrato, rastreio, pagamento, registro de métricas e relatório final. Cada tela foi desenhada para ser usada no dia a dia por uma equipe interna, com tabelas densas, filtros e formulários laterais.",
      },
      {
        title: "Portal e colaboração",
        body: "O sistema inclui um portal para clientes acompanharem campanhas e envios. A área de Envios cria quadros compartilhados por marca ou campanha, reduzindo ida e volta por mensagem e mantendo a equipe e o cliente olhando para a mesma base operacional.",
      },
      {
        title: "Financeiro e provas",
        body: "Pagamentos organiza a planilha mensal por influencer, com valor, Pix, data, status e anotações. Métricas aceita importação de Google Sheets/CSV/XLSX ou registro manual, guardando indicadores como alcance, impressões, views, engajamento e link de evidência.",
      },
      {
        title: "Arquitetura",
        body: "A base usa Next.js 16, React 19, TypeScript, Supabase, RLS, componentes de UI, tabelas, formulários, testes com Vitest e um modo local com dados fictícios para demonstração sem depender do banco de produção.",
      },
    ],
    captureNote:
      "Capturas refeitas em desktop no modo local fictício do projeto. Foram mapeadas rotas internas e fluxos de criação.",
  },
  {
    id: 4,
    slug: "next-hub-alunos",
    title: "Hub de Alunos",
    category: "Sistemas",
    shortCategory: "Edtech interno",
    description:
      "Plataforma de gestão de mentorias para a Next Ecommerce: mentores acompanham a carteira de alunos, atribuem tarefas no estilo Monday com Kanban e prioridades, e visualizam progresso em tempo real via Supabase Realtime. Alunos recebem as demandas e atualizam status diretamente no painel.",
    impact: "Elimina o acompanhamento por memória individual e mensagens soltas — cada mentor tem visibilidade total da carteira com histórico, alertas de inatividade e fluxo de tarefas rastreável.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Realtime", "RLS", "Resend", "Playwright", "Vitest"],
    examples: ["Kanban de tarefas com drag-and-drop", "Dashboard isolada por aluno", "Alertas de inatividade e emails transacionais"],
    featured: true,
    sourcePath: "NEXT-HUB-DE-ALUNOS",
    tone: "from-[#111827] via-[#365314] to-[#a3e635]",
    coverImage: "/projects/next-hub-alunos/login-cover.png",
    coverAlt: "Tela de login do Hub de Alunos",
    gallery: [
      {
        src: "/projects/next-hub-alunos/login-cover.png",
        alt: "Login do Hub de Alunos",
        caption: "Tela de acesso com redirecionamento condicional por perfil: mentor ou aluno.",
      },
      {
        src: "/projects/next-hub-alunos/02-mentor-carteira.png",
        alt: "Carteira de alunos do mentor",
        caption: "Visão do mentor com busca, filtros, cards de alunos, progresso, tarefas atrasadas e atividade recente.",
      },
      {
        src: "/projects/next-hub-alunos/03-mentor-dashboard.png",
        alt: "Dashboard do mentor no Hub de Alunos",
        caption: "Dashboard executivo com alunos, tarefas, taxa de conclusão, distribuição por status/prioridade e tendência semanal.",
      },
      {
        src: "/projects/next-hub-alunos/04-aluno-dashboard.png",
        alt: "Dashboard do aluno",
        caption: "Área do aluno com indicadores próprios, progresso geral e próximos prazos atribuídos pelo mentor.",
      },
      {
        src: "/projects/next-hub-alunos/05-aluno-tarefas.png",
        alt: "Kanban de tarefas do aluno",
        caption: "Kanban do aluno separado por Pendente, Em andamento e Concluído, com prioridade, categoria e prazo.",
      },
      {
        src: "/projects/next-hub-alunos/06-cs-alunos.png",
        alt: "Painel de Customer Success",
        caption: "Visão CS cross-grupo com filtros por grupo, status e prazo, destacando alunos atrasados e acompanhamento por grupo.",
      },
      {
        src: "/projects/next-hub-alunos/07-cs-alertas.png",
        alt: "Alertas de inatividade do CS",
        caption: "Tela de alertas para grupos sem atendimento, parte da rotina de acompanhamento preventivo.",
      },
      {
        src: "/projects/next-hub-alunos/08-configuracoes.png",
        alt: "Configurações de notificações do Hub",
        caption: "Preferências de notificações por e-mail, prazos próximos, inatividade e resumo semanal.",
      },
    ],
    overview:
      "O Hub de Alunos é um painel interno desenvolvido para a operação de mentorias da Next Ecommerce. Mentores gerenciam a carteira de alunos, criam e acompanham tarefas no estilo Monday (Kanban com colunas Pendente, Em andamento, Concluído), e visualizam métricas de progresso. Alunos acessam o próprio painel, veem as demandas atribuídas e atualizam status. Toda a comunicação de dados acontece em tempo real via Supabase Realtime.",
    challenge:
      "Operações de mentoria dependiam de mensagens manuais e memória individual para acompanhar alunos. Sem sistema, o mentor perde histórico, não detecta inatividade e não tem visibilidade do progresso real de cada aluno na carteira.",
    solution:
      "Plataforma full stack com perfis separados por role (mentor/aluno), RBAC via RLS no Supabase, Kanban de tarefas com drag-and-drop, alertas automáticos de inatividade, emails transacionais via Resend e atualizações em tempo real para mentor e aluno simultaneamente.",
    highlights: [
      "Dashboard isolada por aluno: mentor acessa a visão completa de cada aluno separadamente.",
      "Kanban com colunas Pendente, Em andamento e Concluído — drag-and-drop com @dnd-kit.",
      "Supabase Realtime: aluno vê nova tarefa ao vivo; mentor vê conclusão ao vivo.",
      "Alertas de inatividade e cron de emails via Resend.",
      "RLS granular: aluno só edita status/observação — não cria nem exclui tarefas.",
      "Suite completa: testes unitários Vitest, RLS e E2E com Playwright.",
    ],
    detailSections: [
      {
        title: "Controle de Acesso",
        body: "Mentores criam, editam e excluem tarefas dos próprios alunos. Alunos só atualizam status e observação. RLS no Supabase garante que nenhuma regra de negócio dependa apenas do front-end.",
      },
      {
        title: "Fluxo mentor/aluno",
        body: "O login identifica a role do usuário e direciona para a área correta: mentor acessa carteira, alunos e tarefas; aluno acessa o próprio dashboard e atualiza apenas o que foi atribuído.",
      },
      {
        title: "Tempo real",
        body: "Supabase Realtime sustenta a experiência de acompanhamento ao vivo: quando o mentor cria demanda ou o aluno conclui tarefa, os dois lados enxergam a mudança sem depender de atualização manual.",
      },
      {
        title: "Confiabilidade",
        body: "O projeto tem runbook, seed de dados, testes de RLS, CI e suite E2E Playwright para cobrir fluxos críticos de mentor e aluno.",
      },
    ],
    captureNote:
      "Projeto rodado localmente em Next.js com modo demo para capturar mentor, aluno e CS sem banco de produção. A galeria cobre login, carteira, dashboards, Kanban, painel CS, alertas e configurações.",
  },
  {
    id: 5,
    slug: "avant-chamados",
    title: "AVANT Chamados",
    category: "Sistemas",
    shortCategory: "Service desk",
    description:
      "Service desk full stack para registrar chamados, priorizar demandas por impacto e urgência, acompanhar SLA, controlar usuários, organizar projetos por cliente e apoiar a operação com painel administrativo, audit log, agentes IA e TV de acompanhamento.",
    impact: "Transforma solicitações soltas em uma operação rastreável, com fila, responsáveis, prioridades, SLA, permissões e visão executiva em tempo real.",
    stack: ["Next.js 16", "React 19", "Prisma", "NextAuth", "PostgreSQL/Supabase", "RBAC", "Anthropic AI", "Vitest"],
    examples: ["Central de chamados com filtros e SLA", "Painel administrativo em tempo real", "Gestão de usuários, projetos e agentes IA"],
    featured: false,
    sourcePath: "AVANT-CHAMADOS",
    tone: "from-[#05070a] via-[#111827] to-[#10d7be]",
    coverImage: "/projects/avant-chamados/desktop/17-login.png",
    coverAlt: "Tela de login do AVANT Chamados",
    intro:
      "O AVANT Chamados é um sistema de service desk criado para dar forma a uma operação de suporte: entrada de solicitações, triagem, responsáveis, prioridade, SLA, histórico, projetos, permissões e gestão administrativa. A interface trabalha com uma estética escura e premium, aproximando ferramenta interna de produto comercial.",
    context:
      "O projeto foi pensado para equipes que recebem demandas de clientes, usuários internos ou projetos em andamento e precisam enxergar o ciclo completo do atendimento. Em vez de deixar pedidos espalhados em conversas, o sistema centraliza chamados, separa filas, mostra vencimento de SLA, registra ações e cria uma visão de operação para gestores.",
    origin:
      "Ele nasceu como uma central de chamados moderna para a AVANT, evoluindo de um fluxo simples de tickets para uma plataforma com autenticação, RBAC, projetos por cliente, formulário rico de abertura, painéis de controle, área de usuários, agentes IA, audit log, tela de TV e uma camada local de dados para desenvolvimento sem depender do banco externo.",
    gallery: [
      {
        src: "/projects/avant-chamados/desktop/17-login.png",
        alt: "Login desktop do AVANT Chamados",
        caption: "Login desktop com identidade AVANT IA, seletor de perfil entre solicitante e atendente, formulário de acesso, recuperação de senha e canvas visual com marca ao centro.",
      },
      {
        src: "/projects/avant-chamados/desktop/01-dashboard.png",
        alt: "Dashboard de chamados do AVANT Chamados",
        caption: "Dashboard geral com total de chamados, abertos, concluídos, usuários, volume diário, distribuição por prioridade, pipeline por status, categoria e atividade recente.",
      },
      {
        src: "/projects/avant-chamados/desktop/03-tickets.png",
        alt: "Central de chamados do AVANT Chamados",
        caption: "Central de Chamados com busca por ID ou título, filtros por status, tabela com solicitante, prioridade, status, SLA e ação rápida para abrir novo chamado.",
      },
      {
        src: "/projects/avant-chamados/desktop/05-new-ticket.png",
        alt: "Formulário para abrir novo chamado no AVANT Chamados",
        caption: "Abertura de chamado com tipo, categoria, projeto obrigatório, título, editor rico para descrição, priorização ITIL por impacto e urgência, anexos e envio em uma única tela.",
      },
      {
        src: "/projects/avant-chamados/desktop/11-admin-panel.png",
        alt: "Painel administrativo do AVANT Chamados",
        caption: "Painel de Controle administrativo com atualização ao vivo, KPIs, taxa de ocupação, taxa de resolução, volume semanal, distribuição por status, urgentes, prioridades e atividades.",
      },
      {
        src: "/projects/avant-chamados/desktop/12-users.png",
        alt: "Gestão de usuários do AVANT Chamados",
        caption: "Gestão de Usuários com aprovação de acesso, RBAC, cards por perfil, busca, abas de pendentes, administradores, atendentes, supervisores, solicitantes e agentes IA.",
      },
      {
        src: "/projects/avant-chamados/desktop/13-bots.png",
        alt: "Agentes IA no AVANT Chamados",
        caption: "Área de Agentes IA preparada para cadastrar bots que criam chamados, respondem dúvidas recorrentes e escalam casos complexos para humanos.",
      },
      {
        src: "/projects/avant-chamados/desktop/14-audit-log.png",
        alt: "Audit log do AVANT Chamados",
        caption: "Audit Log com filtros por entidade, ação e usuário, pensado para manter um histórico imutável de mudanças sensíveis no sistema.",
      },
      {
        src: "/projects/avant-chamados/desktop/16-tv-panel.png",
        alt: "Painel de TV do AVANT Chamados",
        caption: "Painel de TV para monitoramento em tela cheia, com totais, abertos, em andamento, concluídos, prioridade, categoria, saúde de SLA e atualização ao vivo.",
      },
    ],
    overview:
      "O AVANT Chamados é uma plataforma de service desk full stack. No mapeamento local, o sistema mostrou login com modo solicitante/atendente, dashboard operacional, central de chamados, formulário de abertura, painel administrativo, gestão de usuários, agentes IA, audit log e TV operacional. A base técnica combina Next.js, Prisma, NextAuth, RBAC, dados locais para desenvolvimento, testes e preparação para integrações de IA.",
    challenge:
      "Operações de atendimento sofrem quando chamados chegam por canais soltos, sem prioridade, sem responsável, sem SLA e sem histórico confiável. O desafio era criar um produto interno que parecesse profissional, mas também cobrisse a rotina real: triagem, acompanhamento, abertura estruturada, auditoria, permissões e leitura executiva da operação.",
    solution:
      "A solução organiza a jornada em módulos claros. O solicitante ou atendente entra pelo login, abre um chamado com contexto, categoria, projeto, impacto, urgência e anexos; o time acompanha a central com filtros, status, prioridade e SLA; gestores usam painel, usuários, audit log e TV para controlar operação, permissões e indicadores.",
    highlights: [
      "Login com alternância entre solicitante e atendente, recuperação de senha e identidade visual AVANT IA.",
      "Dashboard com métricas de atendimento, volume diário, prioridades, status, categorias e atividade recente.",
      "Central de chamados com busca, filtros, edição de status/prioridade, SLA e visão de solicitante.",
      "Abertura de chamado com editor rico, priorização ITIL, projeto vinculado e upload de anexos.",
      "Gestão administrativa com RBAC, aprovação de usuários, painel ao vivo, audit log e área de agentes IA.",
      "Tela de TV para acompanhamento operacional em monitores, com saúde de SLA e indicadores resumidos.",
    ],
    detailSections: [
      {
        title: "Fluxo de atendimento",
        body: "O fluxo começa no login, onde o usuário escolhe entrar como solicitante ou atendente. A central lista chamados por status, permite buscar por ID ou título e exibe prioridade, solicitante, SLA e data. A criação de chamado força contexto mínimo: tipo, categoria, projeto, título, descrição detalhada, impacto, urgência e anexos.",
      },
      {
        title: "SLA e priorização",
        body: "A priorização segue uma lógica próxima de ITIL: impacto e urgência alimentam a criticidade do chamado. No dashboard e na central, o SLA aparece como indicador visual, permitindo enxergar rapidamente o que está saudável, em risco ou concluído.",
      },
      {
        title: "Administração e permissões",
        body: "A área administrativa cobre gestão de usuários, aprovação de acesso e separação de papéis como administrador, atendente, supervisor, solicitante e agente IA. Isso mostra uma preocupação real com RBAC e com operação multi-perfil, não apenas uma tela de tickets isolada.",
      },
      {
        title: "Projetos, clientes e contexto",
        body: "O sistema também tem rotas para clientes e projetos. Mesmo com alguns dados locais limitados no mapeamento, a arquitetura já separa projetos por cliente, tarefas, membros e vínculo de tickets com demandas de projeto, criando ponte entre suporte e entrega.",
      },
      {
        title: "IA e automação",
        body: "A área de Agentes IA e as dependências de Anthropic indicam uma camada preparada para bots que triem chamados, respondam perguntas recorrentes e escalem casos complexos. O worker de bots fica separado e só inicia quando a chave de API está configurada.",
      },
      {
        title: "Monitoramento visual",
        body: "Além do painel administrativo, existe uma rota de TV para acompanhamento em tela cheia. Ela resume total, abertos, em andamento, concluídos, prioridade, categoria, saúde de SLA e atividades recentes, útil para operação ao vivo ou sala de suporte.",
      },
    ],
    captureNote:
      "Mapeamento feito localmente em desktop, usando o modo de dados locais do projeto. Alguns detalhes de ticket/projeto ficaram limitados pelo mock local, então a galeria prioriza telas completas e visualmente úteis: login, dashboard, central, abertura, administração, usuários, agentes IA, audit log e TV.",
  },
  {
    id: 6,
    slug: "digisac-squad",
    title: "Elevax Inbox",
    category: "Sistemas",
    shortCategory: "WhatsApp ops",
    description:
      "Inbox operacional para atendimento via WhatsApp, com squads, grupos, indicadores, preferências e controles de rotina para equipes em produção.",
    impact: "Centraliza conversas e responsabilidades por squad, reduzindo ruído operacional sem perder a visão de fila, status e acompanhamento.",
    stack: ["Next.js", "WhatsApp", "Z-API", "Monday", "Squads", "Dashboard"],
    examples: ["Inbox em tempo real", "Grupos por squad", "KPI operacional", "Configurações de atendimento"],
    featured: false,
    sourcePath: "Produção · elevax.net.br",
    tone: "from-[#111827] via-[#1d4ed8] to-[#60a5fa]",
    coverImage: "/projects/digisac-squad/prod/01-login.png",
    coverAlt: "Tela de login do Elevax Inbox",
    gallery: [
      {
        src: "/projects/digisac-squad/prod/01-login.png",
        alt: "Login desktop do Elevax Inbox",
        caption: "Acesso protegido com identidade visual Elevax e fluxo direto para o painel operacional.",
      },
      {
        src: "/projects/digisac-squad/prod/02-inbox.png",
        alt: "Inbox WhatsApp com lista, conversa e campo de mensagem mascarados",
        caption: "Inbox em produção capturado sem envio de mensagens. Lista, contato, conversa e composer foram mascarados.",
      },
      {
        src: "/projects/digisac-squad/prod/03-dashboard.png",
        alt: "Dashboard de KPI operacional com dados mascarados",
        caption: "Painel de acompanhamento por squad, preservando apenas o contexto visual da tela.",
      },
      {
        src: "/projects/digisac-squad/prod/04-groups.png",
        alt: "Tela de grupos com dados operacionais mascarados",
        caption: "Configuração de grupos e clientes vinculados aos fluxos de atendimento.",
      },
      {
        src: "/projects/digisac-squad/prod/05-squads.png",
        alt: "Tela de squads com dados operacionais mascarados",
        caption: "Área de equipes para organizar responsáveis, membros e regras internas.",
      },
      {
        src: "/projects/digisac-squad/prod/07-settings.png",
        alt: "Tela de configurações com dados sensíveis mascarados",
        caption: "Preferências e parâmetros de operação mantidos ocultos por segurança.",
      },
    ],
    overview:
      "O Elevax Inbox é uma central de atendimento conectada ao WhatsApp, pensada para operação diária com múltiplos squads. O projeto reúne inbox, grupos, equipes, indicadores e configurações em uma interface escura, objetiva e feita para uso recorrente por times de atendimento.",
    challenge:
      "O desafio é administrar conversas reais acontecendo em tempo real, sem perder rastreabilidade por cliente, squad, responsável e status. Em produção, qualquer clique indevido poderia interferir no atendimento, então o mapeamento foi feito apenas em rotas de leitura e com captura mascarada.",
    solution:
      "A solução separa a operação em áreas claras: inbox para conversas, grupos para vínculos, squads para estrutura de equipe, dashboard para acompanhamento e configurações para preferências. As telas usam navegação lateral fixa, hierarquia forte de títulos e blocos operacionais que deixam a rotina mais rápida.",
    highlights: [
      "Inbox com lista de conversas, área de atendimento e campo de mensagem isolado.",
      "Separação por squads, grupos e contas de atendimento.",
      "Dashboard com visão de KPI operacional e acompanhamento por equipe.",
      "Configurações para preferências visuais, metas e parâmetros sensíveis.",
      "Mapeamento feito em produção sem envio, criação, arquivamento ou alteração de dados.",
    ],
    detailSections: [
      {
        title: "Inbox em tempo real",
        body: "A tela principal segue o padrão de operação de WhatsApp: lista de conversas à esquerda, cabeçalho do contato, histórico no centro e composer na base. Para preservar dados reais, os prints escondem conversas, contatos, mensagens e campo de envio.",
      },
      {
        title: "Squads e grupos",
        body: "As áreas de grupos e squads mostram a camada de roteamento da operação. Elas indicam quais grupos/clientes pertencem a cada equipe e ajudam a manter o atendimento organizado por responsabilidade, canal e contexto operacional.",
      },
      {
        title: "KPI operacional",
        body: "O dashboard foi desenhado para acompanhar ações humanas e rotina de atendimento por squad. Ele ajuda a enxergar cadência, volume e pontos de atenção sem depender de leitura manual das conversas.",
      },
      {
        title: "Configurações",
        body: "A área de preferências concentra ajustes de interface, metas e parâmetros sensíveis da operação. No portfólio, essa tela entra como prova de profundidade do produto, mas com todo conteúdo operacional oculto.",
      },
    ],
    captureNote:
      "Mapeamento feito em produção, em desktop, com postura somente leitura. Nenhuma conversa foi enviada, nenhum botão de alteração foi acionado e os prints foram mascarados para não expor clientes, mensagens, responsáveis ou dados operacionais.",
  },
  {
    id: 9,
    slug: "rma-saint-germann",
    title: "Sistema de Devolução RMA",
    category: "Sistemas",
    shortCategory: "Returns portal",
    description:
      "Portal RMA para Saint Germain com fluxo público de trocas/devoluções, rastreio, painel administrativo, criação de reversa e integrações com Nuvemshop, Correios e backend dedicado.",
    impact:
      "Transforma um processo sensível de pós-venda em jornada guiada, auditável e pronta para operação, reduzindo atendimento manual e risco de erro em pedido, endereço, item e regra de devolução.",
    stack: ["React", "Vite", "Node.js", "Express", "Supabase", "Nuvemshop", "Correios", "Railway"],
    examples: ["Wizard público de devolução", "Login e painel admin RMA", "Checklist de go-live, secrets e smoke tests"],
    featured: false,
    sourcePath: "Projeto-devolucao",
    tone: "from-[#111111] via-[#4c1d1d] to-[#ef4444]",
    coverImage: "/projects/rma-saint-germann/cover.png",
    coverAlt: "Tela de login administrativo do sistema RMA Saint Germain",
    gallery: [
      {
        src: "/projects/rma-saint-germann/cover.png",
        alt: "Login administrativo do RMA Saint Germain",
        caption: "Capa refeita com a tela real de login administrativo, rodando localmente com variáveis demo.",
      },
      {
        src: "/projects/rma-saint-germann/portal.png",
        alt: "Tela inicial do portal público de trocas e devoluções",
        caption: "Fluxo público de abertura de solicitação, capturado sem acionar APIs reais.",
      },
      {
        src: "/projects/rma-saint-germann/03-rastrear.png",
        alt: "Tela de rastreio de solicitação RMA",
        caption: "Página para acompanhar protocolo de troca/devolução pelo cliente.",
      },
      {
        src: "/projects/rma-saint-germann/04-admin-pedidos.png",
        alt: "Lista administrativa de pedidos RMA",
        caption: "Backoffice de pedidos com busca, filtros por status, tipo de solicitação e logística.",
      },
      {
        src: "/projects/rma-saint-germann/05-dashboard.png",
        alt: "Dashboard administrativo do RMA",
        caption: "Indicadores do RMA com totais, solicitações por mês e últimas solicitações.",
      },
      {
        src: "/projects/rma-saint-germann/07-retencao.png",
        alt: "Tela de estratégia de retenção",
        caption: "Configuração de ofertas para tentar converter devolução em vale-compras ou troca.",
      },
      {
        src: "/projects/rma-saint-germann/08-aparencias.png",
        alt: "Configuração visual do portal RMA",
        caption: "Área de aparência para ajustar portal, e-mails, selo, cores e imagem do fluxo público.",
      },
      {
        src: "/projects/rma-saint-germann/09-usuarios.png",
        alt: "Usuários e regras de acesso do RMA",
        caption: "Gestão de acessos com regras por visão: dashboard, pedidos, reversa, estatísticas, configurações e usuários.",
      },
      {
        src: "/projects/rma-saint-germann/10-criar-reversa.png",
        alt: "Criação manual de reversa RMA",
        caption: "Wizard administrativo para criar reversa manual, troca de presente ou ruptura operacional.",
      },
      {
        src: "/projects/rma-saint-germann/11-excecoes.png",
        alt: "Fila de exceções operacionais RMA",
        caption: "Triagem de exceções financeiras, Appmax, Bling e falhas operacionais com caminho para retry/reconciliação.",
      },
      {
        src: "/projects/rma-saint-germann/13-ui-playground.png",
        alt: "UI playground do sistema RMA",
        caption: "Página de referência dos tokens, componentes base e estados visuais usados no admin.",
      },
    ],
    overview:
      "Sistema RMA para operacionalizar trocas, devoluções e assistência da Saint Germain. O frontend em React/Vite oferece portal público com wizard, rastreio de solicitação e área administrativa com dashboard, configurações, retenção, exceções, usuários, conta digital e criação de logística reversa. O backend concentra regras, integrações e endpoints operacionais.",
    challenge:
      "Devolução é um fluxo sensível porque envolve pedido, cliente, item, motivo, endereço, política comercial, etiqueta e comunicação. Sem sistema, a operação vira troca manual de mensagens, com pouca rastreabilidade e alto risco de erro.",
    solution:
      "O projeto separa portal público e painel interno, usa Supabase para autenticação/admin, backend Node para regras e integrações, e mantém runbook de deploy com variáveis, rate limiting, smoke tests, checagem de secrets e validações de produção.",
    highlights: [
      "Wizard público para iniciar solicitação de troca/devolução sem login.",
      "Área admin com login, dashboard, configurações, retenção, aparência, usuários e exceções.",
      "Integrações previstas com Nuvemshop, Correios e rotas de logística reversa.",
      "Runbook de go-live com smoke tests, auditoria de variáveis e checagem de exposição de secrets.",
      "Backend e frontend separados para deploy independente em Railway.",
    ],
    detailSections: [
      {
        title: "Fluxo público",
        body: "O usuário entra pela central de trocas, passa por uma jornada guiada, informa dados do pedido e acompanha o processo sem precisar acessar o painel administrativo.",
      },
      {
        title: "Operação interna",
        body: "O admin concentra acompanhamento, configurações, exceções, retenção, criação de reversa e estatísticas, separando a experiência do cliente da rotina operacional.",
      },
      {
        title: "Confiabilidade",
        body: "O runbook é especialmente forte: documenta variáveis, deploy, smoke tests, rate limiting, CORS, validação de produção e checagem para não expor segredos.",
      },
      {
        title: "Dependência externa",
        body: "Para a captura do portfólio, o frontend foi rodado com `.env.local` demo no `envDir` correto, evitando banco de produção e mantendo login/portal público renderizáveis localmente.",
      },
    ],
    captureNote:
      "Projeto rodado localmente em Vite com sessão demo e APIs interceptadas para captura limpa. A galeria cobre login, portal público, rastreio, pedidos, dashboard, retenção, aparência, usuários, reversa, exceções e UI base.",
  },
  {
    id: 10,
    slug: "sdr-platform-elevate",
    title: "SDR Platform Elevate",
    category: "Sistemas",
    shortCategory: "Sales operations",
    description:
      "Monorepo para operação SDR com backend, frontend, workers, leads, cadências, retornos, insights, WhatsApp, relatórios e formulários embedáveis.",
    impact: "Padroniza captura, distribuição e acompanhamento de leads para time comercial.",
    stack: ["Monorepo", "Next.js", "Node.js", "Workers", "Database", "Docker"],
    examples: ["Importação de leads", "Cadências comerciais", "Monitor Sonax e WhatsApp"],
    featured: false,
    sourcePath: "sdr-platform-elevate",
    tone: "from-[#111827] via-[#1e3a8a] to-[#38bdf8]",
    coverImage: "/projects/sdr-platform-elevate/01-login.png",
    coverAlt: "Tela de login do SDR Platform Elevate",
    gallery: [
      {
        src: "/projects/sdr-platform-elevate/01-login.png",
        alt: "Login do SDR Platform Elevate",
        caption: "Tela de login capturada localmente no frontend Next do monorepo.",
      },
      {
        src: "/projects/sdr-platform-elevate/02-admin-dashboard.png",
        alt: "Dashboard da equipe no SDR Platform Elevate",
        caption: "Dashboard gerencial com ligações, sessões ativas, WhatsApp enviados, performance por SDR e gráfico de ligações por hora.",
      },
      {
        src: "/projects/sdr-platform-elevate/03-leads.png",
        alt: "Lista de leads do SDR Platform Elevate",
        caption: "Gestão de leads com filtros, SDR responsável, status, tentativas de ligação e ações administrativas.",
      },
      {
        src: "/projects/sdr-platform-elevate/04-sdr-dashboard.png",
        alt: "Dashboard individual de SDR",
        caption: "Visão individual do SDR com chamadas, taxa de atendimento, fila, pendências, sessão ativa e atividades recentes.",
      },
    ],
    overview:
      "Plataforma SDR com monorepo, frontend Next, backend Node, shared package, workers e módulos de leads/cadências.",
    challenge:
      "Times comerciais precisam importar leads, distribuir atendimento, executar cadências e acompanhar retorno sem perder histórico.",
    solution:
      "A arquitetura em monorepo separa frontend, backend e shared, com scripts para banco, seed, workers e Docker.",
    highlights: [
      "Rotas de admin para leads, cadências, relatórios, WhatsApp e usuários.",
      "Formulários públicos e embeds para captura.",
      "Workers para execução de rotinas comerciais.",
      "Scripts de banco e seed para ambientes.",
    ],
    detailSections: [
      {
        title: "Escopo comercial",
        body: "O produto cobre captação, importação, pesquisa, retornos, histórico, insights e painel administrativo.",
      },
      {
        title: "Técnico",
        body: "A organização em apps/backend, apps/frontend e packages/shared mostra preocupação com escala e manutenção.",
      },
    ],
    captureNote: "Projeto rodado localmente com frontend Next, pnpm e modo demo para liberar dashboard, leads e telas SDR sem backend, Prisma, Redis ou banco.",
  },
  {
    id: 11,
    slug: "avantdesk",
    title: "Zendesk Avantdesk",
    category: "Sistemas",
    shortCategory: "Helpdesk modular",
    description:
      "Suite com web, worker, services e infra para atendimento, views customizadas, webhooks, filas, inbound, JWT, schema e testes de RLS.",
    impact: "Cria uma base de atendimento extensível com separação clara entre interface, worker e serviços.",
    stack: ["Next.js", "Node.js", "Workers", "Queues", "Supabase", "Vitest"],
    examples: ["Worker de inbound", "Views customizadas", "Testes de schema e RLS"],
    featured: false,
    sourcePath: "ZENDESK",
    tone: "from-[#111111] via-[#134e4a] to-[#2dd4bf]",
    coverImage: "/projects/avantdesk/01-login.png",
    coverAlt: "Tela de login do Avantdesk",
    gallery: [
      {
        src: "/projects/avantdesk/01-login.png",
        alt: "Login do Avantdesk",
        caption: "Tela de autenticação do helpdesk, com identidade AvantDesk e formulário de acesso.",
      },
      {
        src: "/projects/avantdesk/02-tickets.png",
        alt: "Visualizações de tickets do Avantdesk",
        caption: "Workspace de tickets com views, filas, status, prioridade, solicitante, grupo, atribuição e modo Play.",
      },
      {
        src: "/projects/avantdesk/03-agent-dashboard.png",
        alt: "Dashboard do agente Avantdesk",
        caption: "Painel inicial do agente dentro da navegação de suporte.",
      },
      {
        src: "/projects/avantdesk/04-analytics.png",
        alt: "Relatórios do Avantdesk",
        caption: "Rota de analytics/relatórios dentro da suíte de atendimento.",
      },
      {
        src: "/projects/avantdesk/05-assistente.png",
        alt: "Configuração de assistente IA no Avantdesk",
        caption: "Configuração de assistente IA, uma das frentes de automação do helpdesk.",
      },
    ],
    overview:
      "Avantdesk é uma suite modular de atendimento inspirada em estruturas de helpdesk, com web app, worker, services e infra separados.",
    challenge:
      "Atendimento em escala precisa separar canais, tickets, knowledge base, regras, objetos e processamento assíncrono de mensagens.",
    solution:
      "O projeto divide responsabilidades entre interface, services, worker e infra, com testes para schema, JWT, RLS e rotas de webhook.",
    highlights: [
      "Pasta web, worker, services e infra.",
      "Mapeamento e handoff detalhados para conhecimento, workspace e dashboard.",
      "Filas inbound e rotas de webhook.",
      "Testes de health, logger, idempotência e RLS.",
    ],
    detailSections: [
      {
        title: "Arquitetura",
        body: "A separação entre app visual, worker e services deixa claro que o projeto foi pensado para operação real, não apenas interface.",
      },
      {
        title: "Estado da captura",
        body: "A captura local exigiu criar o helper ausente de perfil de agente e ativar um modo demo para sessão e tickets. Com isso, login, views, dashboard, analytics e IA renderizaram sem banco externo.",
      },
    ],
    captureNote: "Projeto rodado localmente com modo demo para Supabase e tickets, liberando as rotas principais sem acessar banco de produção.",
  },
  {
    id: 12,
    slug: "agent-debugger",
    title: "Agent Debugger",
    category: "Automações/IA",
    shortCategory: "QA de agentes",
    description:
      "Monorepo para auditoria e operabilidade de agentes com dashboard, pacotes de alertas, fila, monitoramento, banco e playbooks.",
    impact: "Ajuda a transformar agentes em operação confiável, com métricas, incidentes e rotinas de auditoria.",
    stack: ["Monorepo", "TypeScript", "Dashboard", "Supabase", "Queues", "Monitoring"],
    examples: ["Playbooks de incidente", "Auditoria de WhatsApp", "Backup e monitoramento"],
    featured: false,
    sourcePath: "agent-debugger",
    tone: "from-[#18181b] via-[#4c1d95] to-[#c084fc]",
    coverImage: "/projects/agent-debugger/01-analysis-board.png",
    coverAlt: "Prancha de análise técnica do Agent Debugger",
    gallery: [
      {
        src: "/projects/agent-debugger/01-analysis-board.png",
        alt: "Prancha técnica do Agent Debugger",
        caption: "Prancha gerada a partir da análise local do monorepo, resumindo dashboard, pacotes, auditorias, playbooks, incidentes e kill switch.",
      },
    ],
    overview:
      "Sistema de QA e operabilidade para agentes, com dashboard, pacotes internos, alertas, fila, banco, monitoramento e runbooks.",
    challenge:
      "Agentes em produção precisam de auditoria, memória de incidente, kill switch, playbooks e observabilidade. Sem isso, viram caixa preta.",
    solution:
      "O monorepo organiza dashboard e pacotes de operação para validar integrações, alertas, backups e saúde de agentes.",
    highlights: [
      "Dashboard interno com rotas de incidentes, playbooks, aprovações e runs.",
      "Pacotes de alerts, db, queue e monitoring.",
      "Documentação de smoke, operabilidade e gaps de produção.",
      "Scripts de auditoria que evitam imprimir segredos.",
    ],
    detailSections: [
      {
        title: "Diferencial",
        body: "O projeto mostra maturidade operacional: não foca só em construir agentes, mas em manter agentes confiáveis.",
      },
      {
        title: "Evidências",
        body: "A pasta docs/validation tem registros de build, smoke, domínio Vercel, RLS e auditorias.",
      },
    ],
    captureNote: "Projeto sem UI pública navegável nesta rodada; foi criada uma prancha visual de análise com base na estrutura real do monorepo.",
  },
  {
    id: 14,
    slug: "next-leads-meetime",
    title: "Lead Meetime Integrator",
    category: "Automações/IA",
    shortCategory: "Lead automation",
    description:
      "Automação que captura leads de formulários do GHL e anúncios do Meta Ads (tráfego orgânico e pago) e os envia automaticamente para o Meetime, eliminando entrada manual no CRM comercial.",
    impact: "Zero entrada manual de lead: do formulário ou anúncio direto ao CRM com cadencia e distribuição automáticos.",
    stack: ["Python", "Node.js", "GHL", "Meta Ads", "Meetime", "Webhooks", "Automação"],
    examples: ["Captura de leads via webhook GHL", "Integração com formulários Meta Ads", "Envio automático ao Meetime"],
    featured: false,
    sourcePath: "leads-meetime",
    tone: "from-[#111827] via-[#713f12] to-[#f59e0b]",
    coverImage: "/projects/next-leads-meetime/01-analysis-board.png",
    coverAlt: "Prancha de análise técnica do Lead Meetime Integrator",
    gallery: [
      {
        src: "/projects/next-leads-meetime/01-analysis-board.png",
        alt: "Prancha técnica do Lead Meetime Integrator",
        caption: "Prancha gerada a partir da análise local do backend, resumindo entrada por webhook, normalização, fila BullMQ, worker e envio ao Meetime.",
      },
    ],
    overview:
      "O projeto resolve a lacuna entre captura de lead e entrada no CRM. Toda vez que um lead preenche um formulário (GHL ou Meta Ads — tráfego pago ou orgânico), a automação recebe, normaliza e envia automaticamente para o Meetime, com cadencia correta e log rastreavel. Foi implantado para diferentes empresas, adaptando credenciais e configurações por ambiente.",
    challenge:
      "Times comerciais perdem leads por atraso ou esquecimento na entrada manual no CRM. Leads vindos de tráfego pago e orgânico chegam por canais diferentes (Meta Ads, GHL) e precisam de tratamento padronizado.",
    solution:
      "A automação recebe webhooks do GHL e Meta Ads, normaliza os dados de cada fonte e dispara a criação do lead no Meetime com a cadencia certa, sem intervenção humana.",
    highlights: [
      "Captura de leads via webhook de formulários GHL.",
      "Captura de leads de anúncios Meta Ads (tráfego pago e orgânico).",
      "Normalização e envio automático para o Meetime.",
      "Configurável por empresa: credenciais e ambientes isolados.",
      "Logs e rastreabilidade do fluxo de cada lead.",
    ],
    detailSections: [
      {
        title: "Fluxo",
        body: "Lead preenche formulário ou interage com anúncio → webhook chega → dados normalizados → Meetime criado automaticamente com cadencia e distribuição configuradas.",
      },
      {
        title: "Multi-empresa",
        body: "O mesmo mecanismo foi adaptado para diferentes empresas, cada uma com suas próprias credenciais GHL/Meetime e configurações de ambiente isoladas.",
      },
    ],
    captureNote: "Automação backend sem interface visual; foi criada uma prancha técnica para representar o fluxo real do projeto.",
  },
  {
    id: 15,
    slug: "cadastro-unificado",
    title: "Cadastro Unificado",
    category: "Sistemas",
    shortCategory: "Client registry",
    description:
      "Sistema Next/Supabase para cadastro e gestão de clientes, usuários, aprovações, notificações e dados empresariais unificados.",
    impact: "Centraliza registros e permissão de acesso em uma base única com RLS.",
    stack: ["Next.js", "Supabase", "RLS", "TypeScript", "Tests"],
    examples: ["Login e registro", "Aprovação de conta", "Cadastro de clientes"],
    featured: false,
    sourcePath: "CADASTRO-UNIFICADO",
    tone: "from-[#111827] via-[#475569] to-[#cbd5e1]",
    coverImage: "/projects/cadastro-unificado/05-prod-login-next.png",
    coverAlt: "Tela de login em producao do Cadastro Unificado",
    gallery: [
      {
        src: "/projects/cadastro-unificado/05-prod-login-next.png",
        alt: "Login desktop NEXT do Cadastro Unificado",
        caption: "Login em producao com seletor de ambiente NEXT e formulario de acesso.",
      },
      {
        src: "/projects/cadastro-unificado/06-prod-login-elevate.png",
        alt: "Login desktop ELEVATE do Cadastro Unificado",
        caption: "Troca de ambiente para ELEVATE antes da autenticacao, mantendo a identidade visual separada.",
      },
      {
        src: "/projects/cadastro-unificado/07-prod-next-dashboard.png",
        alt: "Dashboard NEXT do Cadastro Unificado",
        caption: "Dashboard NEXT em producao com totais de clientes, status, usuarios ativos, ultimos cadastros e atividades.",
      },
      {
        src: "/projects/cadastro-unificado/07-prod-next-clientes.png",
        alt: "Clientes NEXT do Cadastro Unificado",
        caption: "Base de clientes NEXT com tabela, filtros, paginacao, status, empresa e dados comerciais.",
      },
      {
        src: "/projects/cadastro-unificado/08-prod-next-clientes-modal.png",
        alt: "Modal de novo cliente no Cadastro Unificado",
        caption: "Fluxo de cadastro aberto em producao para mapear campos e comportamento sem salvar alteracoes.",
      },
      {
        src: "/projects/cadastro-unificado/07-prod-next-usuarios.png",
        alt: "Usuarios NEXT do Cadastro Unificado",
        caption: "Painel administrativo NEXT com usuarios, funcoes, status, criacao e acoes de gerenciamento.",
      },
      {
        src: "/projects/cadastro-unificado/07-prod-next-atividades.png",
        alt: "Atividades NEXT do Cadastro Unificado",
        caption: "Log NEXT com filtros por tipo de acao e periodo, exibindo edicoes, criacoes, exclusoes e vinculacoes.",
      },
      {
        src: "/projects/cadastro-unificado/12-prod-elevate-dashboard.png",
        alt: "Dashboard ELEVATE do Cadastro Unificado",
        caption: "Dashboard ELEVATE autenticado com metricas isoladas do ambiente e dados de clientes ativos.",
      },
      {
        src: "/projects/cadastro-unificado/12-prod-elevate-clientes.png",
        alt: "Clientes ELEVATE do Cadastro Unificado",
        caption: "Clientes ELEVATE em producao com registros, CNPJ, nicho, sistema, status e dados de contato.",
      },
      {
        src: "/projects/cadastro-unificado/12-prod-elevate-usuarios.png",
        alt: "Usuarios ELEVATE do Cadastro Unificado",
        caption: "Gerenciamento de usuarios ELEVATE com perfis comercial/admin e controle de status.",
      },
      {
        src: "/projects/cadastro-unificado/12-prod-elevate-atividades.png",
        alt: "Atividades ELEVATE do Cadastro Unificado",
        caption: "Historico ELEVATE mostrando auditoria de edicoes, exclusoes e vinculacoes por usuario.",
      },
    ],
    overview:
      "Sistema em producao para cadastro, clientes, usuarios, aprovacoes, logs e gestao multiambiente entre NEXT e ELEVATE.",
    challenge:
      "Operacoes com mais de uma empresa precisam manter clientes, usuarios e historico separados por ambiente, sem perder rastreabilidade centralizada.",
    solution:
      "O app combina login com seletor de ambiente, dashboards por empresa, CRUD de clientes, administracao de usuarios e log de atividades auditavel.",
    highlights: [
      "Login em producao validado nos ambientes NEXT e ELEVATE.",
      "Dashboard com clientes totais, ativos/inativos, compartilhados, usuarios ativos e graficos.",
      "Gestao de clientes com filtros, tabela responsiva, modal de novo cadastro e acoes por registro.",
      "Administracao de usuarios por funcao, empresa e status.",
      "Log de atividades com filtros por acao e periodo para auditoria operacional.",
      "Capturas desktop feitas com Playwright diretamente na URL publicada.",
    ],
    detailSections: [
      {
        title: "Ambientes",
        body: "O seletor de login alterna entre NEXT e ELEVATE, carregando dados, usuarios e metricas de cada operacao de forma independente.",
      },
      {
        title: "Mapa validado",
        body: "Foram navegadas as rotas de dashboard, clientes, usuarios e atividades nos dois ambientes.",
      },
    ],
    captureNote: "Projeto mapeado em producao com Playwright nos ambientes NEXT e ELEVATE; as capturas incluem login, dashboard, clientes, usuarios, atividades e modal.",
  },

  {
    id: 18,
    slug: "creative-dashboard",
    title: "Creative Dashboard",
    category: "Design/Marketing",
    shortCategory: "Creative ops",
    description:
      "Dashboard para criativos e performance com app Next, receiver de webhooks, sincronização de spend Meta e auditorias de entrega.",
    impact: "Ajuda marketing a cruzar criativo, gasto e entrega com confiabilidade de dados.",
    stack: ["Next.js", "Webhook Receiver", "Meta Ads", "Supabase", "Tests"],
    examples: ["Sync de spend Meta", "Auditoria de dados", "Gate de delivery"],
    featured: false,
    sourcePath: "creative-dashboard-next",
    tone: "from-[#111827] via-[#831843] to-[#f472b6]",
    coverImage: "/projects/creative-dashboard/01-login.png",
    coverAlt: "Tela de login do Creative Dashboard",
    gallery: [
      {
        src: "/projects/creative-dashboard/01-login.png",
        alt: "Tela de login do Creative Dashboard",
        caption: "Tela de login capturada localmente, usada como capa do projeto.",
      },
      {
        src: "/projects/creative-dashboard/02-dashboard.png",
        alt: "Dashboard principal do Creative Dashboard",
        caption: "Dashboard principal por tenant, com estrutura de filtros, período, leitura de criativos e auditoria de entrega.",
      },
      {
        src: "/projects/creative-dashboard/03-dashboard-7d.png",
        alt: "Dashboard Creative em período de 7 dias",
        caption: "Variação de período nos filtros, mostrando a estrutura de análise temporal.",
      },
      {
        src: "/projects/creative-dashboard/04-metas.png",
        alt: "Tela de metas do Creative Dashboard",
        caption: "Módulo de metas por tenant, ligado à rotina de performance e planejamento.",
      },
    ],
    overview:
      "Dashboard de marketing criativo com app Next e webhook receiver para sincronizar dados de spend e auditar entrega.",
    challenge:
      "Criativos e verba de mídia precisam ser avaliados juntos; caso contrário, é difícil saber o que realmente performa.",
    solution:
      "A aplicação combina interface, receiver de webhooks, sincronização Meta e auditorias para transformar dados em uma rotina de decisão.",
    highlights: [
      "App Next separado de webhook receiver.",
      "Scripts de sync Meta spend.",
      "Auditorias de dados e gates de entrega.",
      "Base Supabase.",
      "Capturas de login, dashboard, filtros e metas em modo demo.",
    ],
    detailSections: [
      {
        title: "Dados",
        body: "O webhook receiver inclui rotinas de sync, auditoria e validação, indicando preocupação com qualidade de dados.",
      },
      {
        title: "Captura",
        body: "Para o portfólio, a camada Supabase foi substituída por um modo demo local. Isso permitiu renderizar dashboard por tenant, período e metas sem puxar dados reais.",
      },
    ],
    captureNote: "Projeto rodado localmente com Supabase demo para liberar login, dashboard, filtros e metas sem credenciais reais.",
  },
  {
    id: 19,
    slug: "marketing-next",
    title: "Marketing Next",
    category: "Automações/IA",
    shortCategory: "Creative intelligence",
    description:
      "Suite de inteligência criativa para pesquisar perfis, hashtags, criativos da Meta Ads Library, vídeos e carrosséis, transformando referências em transcrições, hooks, cortes e readaptações com IA.",
    impact:
      "Tira a pesquisa criativa do modo manual: coleta conteúdo, interpreta peças, organiza achados e entrega insumos prontos para pauta, roteiro e adaptação de anúncios.",
    stack: ["React", "Vite", "Supabase", "Python", "Apify", "Claude", "Groq Whisper", "OpenRouter"],
    examples: ["Scrapers Instagram estático, carrossel e vídeo", "Ad Intelligence com Meta Ads Library", "Hooks, transcrições e readaptações"],
    featured: false,
    sourcePath: "MARKETING-NEXT",
    tone: "from-[#18181b] via-[#7e22ce] to-[#f0abfc]",
    coverImage: "/projects/marketing-next/cover.png",
    coverAlt: "Tela de login do Marketing Next",
    gallery: [
      {
        src: "/projects/marketing-next/cover.png",
        alt: "Login do Marketing Next",
        caption: "Capa refeita com a tela de login real, rodando localmente sem conexão com banco de produção.",
      },
      {
        src: "/projects/marketing-next/splash.png",
        alt: "Splash de entrada do Marketing Next",
        caption: "Abertura visual da ferramenta antes do formulário de acesso.",
      },
      {
        src: "/projects/marketing-next/02-inspiracao-perfis.png",
        alt: "Tela de perfis de inspiração do Marketing Next",
        caption: "Gestão de perfis de referência, filtros por período e entrada para novas coletas de inspiração.",
      },
      {
        src: "/projects/marketing-next/03-inspiracao-novo-perfil.png",
        alt: "Modal de novo perfil de inspiração",
        caption: "Cadastro de perfil com foto, Instagram próprio, quantidade de posts e lista de perfis-alvo para scrapping.",
      },
      {
        src: "/projects/marketing-next/04-scrapping-especifico.png",
        alt: "Tela de scrapping específico do Instagram",
        caption: "Fluxo para colar URLs específicas de posts/reels, escolher perfil e enviar prompt personalizado de análise.",
      },
      {
        src: "/projects/marketing-next/05-hashtags.png",
        alt: "Tela de coleta por hashtags do Instagram",
        caption: "Coleta por hashtags com perfil destino, período, limite de posts e prompt opcional para enriquecer a análise.",
      },
      {
        src: "/projects/marketing-next/06-transcritor-instagram.png",
        alt: "Transcritor Instagram do Marketing Next",
        caption: "Transcritor em lote para vídeos/reels com importação por perfil, fila de links, histórico e geração de roteiros.",
      },
      {
        src: "/projects/marketing-next/07-readaptados.png",
        alt: "Tela de posts readaptados do Marketing Next",
        caption: "Área de acompanhamento dos conteúdos readaptados, com exportação, métricas e filtros por usuário.",
      },
      {
        src: "/projects/marketing-next/08-ad-intelligence.png",
        alt: "Dashboard de Ad Intelligence",
        caption: "Módulo de monitoramento de concorrentes da Meta Ads Library com busca e cadastro de páginas.",
      },
      {
        src: "/projects/marketing-next/09-ad-intelligence-novo-concorrente.png",
        alt: "Modal de novo concorrente do Ad Intelligence",
        caption: "Cadastro de concorrente por nome, Page ID e agrupamento opcional para organizar análise competitiva.",
      },
      {
        src: "/projects/marketing-next/10-comparar-concorrentes.png",
        alt: "Tela de comparação de concorrentes",
        caption: "Comparação lado a lado de concorrentes para leitura de volume, padrões e performance criativa.",
      },
      {
        src: "/projects/marketing-next/11-tiktok-fontes.png",
        alt: "Fontes TikTok no Marketing Next",
        caption: "Módulo TikTok com cadastro de perfis e base para coleta e leitura de conteúdos curtos.",
      },
      {
        src: "/projects/marketing-next/12-tiktok-conteudos.png",
        alt: "Conteúdos TikTok coletados",
        caption: "Listagem centralizada dos posts coletados no TikTok, pronta para filtros e reaproveitamento criativo.",
      },
      {
        src: "/projects/marketing-next/13-youtube-fontes.png",
        alt: "Fontes YouTube no Marketing Next",
        caption: "Cadastro e gestão de canais do YouTube para ampliar a pesquisa de referências fora do Instagram.",
      },
      {
        src: "/projects/marketing-next/14-jobs.png",
        alt: "Painel de jobs do Marketing Next",
        caption: "Monitor de coletas e transcrições em andamento, com status, erros, progresso e atualização automática.",
      },
      {
        src: "/projects/marketing-next/15-usuarios.png",
        alt: "Tela de usuários e permissões do Marketing Next",
        caption: "Administração de usuários com permissões por módulo: Instagram, TikTok, YouTube e Facebook Ads.",
      },
    ],
    overview:
      "O Marketing Next combina um frontend operacional em React/Vite com fluxos Python para inteligência de conteúdo. A base cobre captura de posts estáticos, carrosséis e vídeos do Instagram, busca por hashtags, transcrição com Whisper, análise visual/semântica com modelos de IA, leitura de criativos da Meta Ads Library e geração de hooks/readaptações para transformar referência em material acionável.",
    challenge:
      "Times de marketing perdem tempo alternando entre plataformas, salvando referências manualmente, transcrevendo vídeos e tentando extrair padrões criativos sem histórico centralizado. O risco é produzir a partir de inspiração solta, sem contexto, sem ranking e sem reaproveitamento consistente.",
    solution:
      "A solução cria uma camada única para coletar, interpretar e reaproveitar conteúdo. Scrapers buscam posts e anúncios, serviços de IA descrevem imagens, transcrevem vídeos, extraem hooks e salvam resultados em tabelas estruturadas para consulta e operação pelo painel.",
    highlights: [
      "Fluxos separados para Instagram estático, carrossel e vídeo.",
      "Pipeline de Ad Intelligence com Apify, Meta Ads Library, download de mídia, transcrição e análise criativa.",
      "Transcrição de vídeos com Groq Whisper e interpretação visual com OpenRouter/Claude.",
      "Persistência em Supabase para posts, anúncios, análises, hooks e readaptações.",
      "Rotas de webhook e endpoints dedicados para coleta, ranking e geração de roteiro.",
    ],
    detailSections: [
      {
        title: "Coleta Instagram",
        body: "O backend separa fluxos para imagens estáticas, carrosséis e vídeos. Cada tipo passa por extração própria, enriquecimento com IA e armazenamento dos textos, transcrições e versões readaptadas.",
      },
      {
        title: "Ad Intelligence",
        body: "A camada de anúncios usa Apify e Meta Ads Library para coletar criativos, baixar mídias, transcrever vídeos quando necessário e gerar análise sobre formato, promessa, gancho, prova e ângulo de campanha.",
      },
      {
        title: "IA aplicada",
        body: "Modelos diferentes aparecem onde fazem sentido: Whisper para áudio, visão para carrosséis/imagens e LLMs para transformar conteúdo bruto em hooks, cortes, insights e roteiros reutilizáveis.",
      },
      {
        title: "Dependência externa",
        body: "Para o portfólio, a captura foi feita com variáveis locais de demonstração, sem acessar banco de produção ou APIs pagas. As rotas internas continuam documentadas como parte da análise técnica.",
      },
    ],
    captureNote:
      "Projeto rodado localmente em Vite. A galeria agora reúne login, splash e 14 telas internas capturadas em modo demo, liberando navegação sem banco de produção e sem acionar APIs pagas.",
  },
  {
    id: 20,
    slug: "lp-adscale",
    title: "LP Adscale",
    category: "Sites",
    shortCategory: "Landing page",
    description:
      "Landing page para produto Adscale com estrutura Next, assets públicos e foco em apresentação comercial.",
    impact: "Cria uma porta de entrada clara para venda e explicação do produto.",
    stack: ["Next.js", "Landing Page", "SEO", "Tailwind CSS"],
    examples: ["Hero comercial", "Seções de valor", "CTA de conversão"],
    featured: false,
    sourcePath: "LP-adscale",
    tone: "from-[#0f172a] via-[#0e7490] to-[#67e8f9]",
    coverImage: "/projects/lp-adscale/01-section-hero.png",
    coverAlt: "Landing page Adscale capturada localmente",
    gallery: [
      {
        src: "/projects/lp-adscale/01-section-hero.png",
        alt: "Hero da LP Adscale",
        caption: "Hero desktop com proposta central, CTA e posicionamento comercial da Adscale.",
      },
      {
        src: "/projects/lp-adscale/02-section-servicos.png",
        alt: "Seção de serviços da LP Adscale",
        caption: "Bloco de serviços com as frentes de growth, tráfego, CRM e otimização.",
      },
      {
        src: "/projects/lp-adscale/03-section-comparativo.png",
        alt: "Comparativo Agência Comum versus Adscale",
        caption: "Seção comparativa que diferencia a proposta da Adscale de uma agência tradicional.",
      },
      {
        src: "/projects/lp-adscale/04-section-cases.png",
        alt: "Cases da LP Adscale",
        caption: "Recorte de cases com prova social, resultados e estrutura de autoridade.",
      },
      {
        src: "/projects/lp-adscale/05-section-diagnostico.png",
        alt: "Diagnóstico CRO da LP Adscale",
        caption: "Formulário de diagnóstico CRO como ponto de conversão da landing.",
      },
    ],
    overview:
      "Landing page comercial para apresentar a Adscale com visual de tecnologia, cases, serviços e assets de marca.",
    challenge:
      "Uma oferta de marketing precisa explicar valor rápido e passar confiança visual antes de pedir contato.",
    solution:
      "A página usa hero, assets de serviços, cases e seções comerciais para construir narrativa e conversão.",
    highlights: [
      "Next.js com landing page responsiva.",
      "Assets ricos de serviços e cases.",
      "Capturas por seção em desktop.",
      "Foco em conversão e posicionamento.",
    ],
    detailSections: [
      {
        title: "Visual",
        body: "A captura local agora mostra seções individuais, evitando prints longos e mantendo foco em oferta, serviços, prova e conversão.",
      },
      {
        title: "Marketing",
        body: "A página organiza proposta, prova, cases e CTA para transformar tráfego em contato.",
      },
    ],
  },
  {
    id: 21,
    slug: "avantia-lp",
    title: "AVANT IA Landing",
    category: "Sites",
    shortCategory: "AI landing",
    description:
      "Landing page em Next para apresentar a oferta AVANT IA com estrutura leve, pública e pronta para deploy.",
    impact: "Transforma posicionamento de IA em uma página direta para captação.",
    stack: ["Next.js", "React", "Landing Page", "Vercel"],
    examples: ["Apresentação de oferta", "CTA principal", "Seções institucionais"],
    featured: false,
    sourcePath: "AVANTIA-LP",
    tone: "from-[#111111] via-[#312e81] to-[#a78bfa]",
    coverImage: "/projects/avantia-lp/01-section-hero.png",
    coverAlt: "Landing page AVANT IA capturada localmente",
    gallery: [
      {
        src: "/projects/avantia-lp/01-section-hero.png",
        alt: "Hero da landing AVANT IA",
        caption: "Hero da AVANT IA com identidade escura, marca, promessa e CTAs principais.",
      },
      {
        src: "/projects/avantia-lp/02-section-servicos.png",
        alt: "Serviços da AVANT IA",
        caption: "Seção de serviços recortada para mostrar as ofertas sem arrastar a página inteira.",
      },
      {
        src: "/projects/avantia-lp/03-section-sobre.png",
        alt: "Sobre a AVANT IA",
        caption: "Bloco institucional explicando posicionamento, tecnologia e contexto da empresa.",
      },
      {
        src: "/projects/avantia-lp/04-section-resultados.png",
        alt: "Seção de resultados AVANT IA",
        caption: "Resultados e indicadores como prova de valor dentro da narrativa da landing.",
      },
      {
        src: "/projects/avantia-lp/05-section-contato.png",
        alt: "Contato da AVANT IA",
        caption: "Seção final de contato, fechando a jornada de conversão.",
      },
    ],
    overview:
      "Landing page para apresentar a AVANT IA, com foco em oferta direta, marca e captação.",
    challenge:
      "Produtos de IA precisam traduzir tecnologia em promessa clara para o cliente entender rápido.",
    solution:
      "A página usa estrutura enxuta em Next para mostrar proposta, diferenciais e CTA.",
    highlights: [
      "Projeto Next simples e deployável.",
      "Prints reais por seção capturados localmente.",
      "Identidade visual própria.",
      "Foco em oferta de IA.",
    ],
    detailSections: [
      {
        title: "Uso",
        body: "Serve como página de entrada para apresentar serviços/produtos de IA da AVANT.",
      },
      {
        title: "Implementacao",
        body: "Estrutura leve, com componentes de hero e navbar, boa para evoluir com novas seções.",
      },
    ],
  },
  {
    id: 22,
    slug: "mgassessorialp",
    title: "MG Assessoria LP",
    category: "Sites",
    shortCategory: "Brand landing",
    description:
      "Landing page visual para MG Digital/Assessoria com assets de clientes, logos, feedbacks, fundador e pilares de serviço.",
    impact: "Apresenta autoridade, prova social e oferta com material visual real.",
    stack: ["Vite", "React", "Assets otimizados", "Vercel"],
    examples: ["Logos de clientes", "Feedbacks", "Pilares de serviço"],
    featured: false,
    sourcePath: "mgassessorialp",
    tone: "from-[#111111] via-[#713f12] to-[#fbbf24]",
    coverImage: "/projects/mgassessorialp/01-section-hero.png",
    coverAlt: "Landing page MG Assessoria capturada localmente",
    gallery: [
      {
        src: "/projects/mgassessorialp/01-section-hero.png",
        alt: "Hero da LP MG Assessoria",
        caption: "Hero desktop com oferta, prova visual e CTA principal da MG Assessoria.",
      },
      {
        src: "/projects/mgassessorialp/02-section-pilares.png",
        alt: "Pilares da MG Assessoria LP",
        caption: "Pilares e marcas atendidas, separados da página inteira para dar contexto visual limpo.",
      },
      {
        src: "/projects/mgassessorialp/03-section-servicos.png",
        alt: "Serviços da MG Assessoria LP",
        caption: "Serviços e diferenciais comerciais em bloco próprio.",
      },
      {
        src: "/projects/mgassessorialp/04-section-clientes.png",
        alt: "Clientes da MG Assessoria LP",
        caption: "Prova social com clientes, marcas e materiais de autoridade.",
      },
      {
        src: "/projects/mgassessorialp/05-section-formulario.png",
        alt: "Formulário da MG Assessoria LP",
        caption: "Formulário final de conversão com chamada para diagnóstico.",
      },
    ],
    overview:
      "Landing page de marca com forte uso de assets reais: clientes, feedbacks, fundador, collage e pilares de serviço.",
    challenge:
      "Assessoria e marketing vendem confiança. A página precisa provar autoridade visualmente, não apenas descrever serviços.",
    solution:
      "O projeto usa imagens reais, feedbacks, logos e seções de valor para sustentar a narrativa comercial.",
    highlights: [
      "Vite/React leve.",
      "Assets otimizados e muitos materiais visuais.",
      "Capturas reais por seção em desktop.",
      "Prova social com feedbacks e clientes.",
    ],
    detailSections: [
      {
        title: "Direcao visual",
        body: "A landing trabalha com elementos de marca, fotos, logos e prova social para parecer menos genérica e mais confiável.",
      },
      {
        title: "Conversão",
        body: "A estrutura da página conversa com visitantes que precisam entender serviço, autoridade e resultado antes de chamar.",
      },
    ],
  },
  {
    id: 23,
    slug: "elevate-lp",
    title: "Elevate LP",
    category: "Sites",
    shortCategory: "Campaign LPs",
    description:
      "Conjunto de landing pages para TikTok orgânico e tráfego, com testes e estrutura dedicada a campanhas.",
    impact: "Permite validar ofertas e canais separados sem misturar funis.",
    stack: ["Landing Pages", "TikTok", "Tests", "Campaigns"],
    examples: ["LP TikTok orgânico", "LP TikTok tráfego", "Teste de oferta"],
    featured: false,
    sourcePath: "ELEVATE-LP",
    tone: "from-[#111111] via-[#be123c] to-[#fb7185]",
    coverImage: "/projects/elevate-lp/01-section-hero.png",
    coverAlt: "Layout desktop da LP Elevate",
    gallery: [
      {
        src: "/projects/elevate-lp/01-section-hero.png",
        alt: "Hero da LP Elevate",
        caption: "Hero desktop da landing principal com promessa, CTA e fotografia da operação.",
      },
      {
        src: "/projects/elevate-lp/02-section-formulario.png",
        alt: "Formulário da LP Elevate",
        caption: "Bloco de diagnóstico/formulário, o principal ponto de conversão da campanha.",
      },
      {
        src: "/projects/elevate-lp/03-section-servicos.png",
        alt: "Serviços da LP Elevate",
        caption: "Serviços principais da assessoria de marketplace apresentados em seção própria.",
      },
      {
        src: "/projects/elevate-lp/04-section-resultados.png",
        alt: "Resultados da LP Elevate",
        caption: "Recorte de resultados e métricas para sustentar a prova de valor.",
      },
      {
        src: "/projects/elevate-lp/05-section-cases.png",
        alt: "Cases da LP Elevate",
        caption: "Cases de clientes com narrativa de resultado dentro da landing principal.",
      },
      {
        src: "/projects/elevate-lp/06-section-tiktok-organico.png",
        alt: "LP TikTok Orgânico da Elevate",
        caption: "Hero da variação TikTok orgânico, capturado como seção e não como página longa.",
      },
      {
        src: "/projects/elevate-lp/07-section-marketplace-trafego.png",
        alt: "LP Marketplace Tráfego da Elevate",
        caption: "Hero da variação marketplace/tráfego, mantendo a leitura da primeira dobra.",
      },
    ],
    overview:
      "Conjunto de landing pages e assets para campanhas de ecommerce/marketplace ligadas a TikTok orgânico e tráfego.",
    challenge:
      "Campanhas diferentes precisam de narrativas e assets próprios; usar uma página única para tudo enfraquece a oferta.",
    solution:
      "O projeto separa LPs, assets, prints e materiais de campanha para validar funis distintos.",
    highlights: [
      "Recortes por seção da landing principal.",
      "Assets específicos para TikTok orgânico e tráfego.",
      "Imagens de equipe, depoimentos, gráficos e serviços.",
      "Boa base visual para portfólio.",
    ],
    detailSections: [
      {
        title: "Material visual",
        body: "Esse projeto tinha muitos assets prontos, incluindo layout desktop completo exportado e prints de campanha.",
      },
      {
        title: "Estrategia",
        body: "A separação por canal permite testar comunicação, prova e CTA com mais precisão.",
      },
    ],
  },

];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
