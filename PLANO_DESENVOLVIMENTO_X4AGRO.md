# Plano de Desenvolvimento — Site Institucional X4AGRO

## Contexto

A X4AGRO é a vertical de agronegócio da X4PAY Assessoria. O site institucional deve ser uma landing page focada em **compliance e governança para o agronegócio brasileiro**, posicionando a X4AGRO como parceira estratégica na proteção patrimonial de produtores rurais.

O site deve **reutilizar a mesma stack e estrutura de componentes do site X4PAY** (React + TailwindCSS + Framer Motion), adaptando a identidade visual para o universo do agro.

---

## 1. Identidade Visual

### Paleta de Cores (adaptar no tailwind.config.js)

| Token           | Hex       | Uso                                         |
|-----------------|-----------|---------------------------------------------|
| `verde-escuro`  | `#2A5936` | Cor principal, headers, navbar, footer       |
| `verde-medio`   | `#23592B` | Botões, CTAs hover, backgrounds alternados   |
| `verde-claro`   | `#3B8C4A` | Badges, ícones de check, destaques positivos |
| `marrom`        | `#59341E` | Títulos, logo text, acentos terrosos         |
| `bege`          | `#A6918A` | Backgrounds suaves, seções alternadas        |
| `branco`        | `#F2F2F2` | Background principal, texto sobre escuro     |
| `escuro`        | `#1A1A1A` | Seção de cases de fraude, fundo dramático    |
| `vermelho`      | `#DC2626` | Ícones negativos (X) na comparação reativo   |
| `amarelo`       | `#D4A017` | Destaques de valores de prejuízo             |

### Tipografia
- Manter as mesmas fontes do site X4PAY para consistência de marca.
- Se houver uma display font, usá-la nos títulos grandes das seções Hero e Cases.

### Logo
- Usar o logo X4AGRO (mesmo estilo do X4PAY mas com "AGRO" no lugar de "PAY").
- Se não houver arquivo SVG do logo X4AGRO, usar texto estilizado: "X4" em marrom (#59341E) + "AGRO" em verde-escuro (#2A5936), bold.

---

## 2. Estrutura de Seções (10 seções)

O site é uma single-page landing com scroll suave entre seções. Seguir o mesmo padrão de componentes do X4PAY.

### Seção 1: Hero
**Componente:** `HeroSection` (adaptar do X4PAY)

- **Título:** "O Agronegócio Evoluiu."
- **Subtítulo (itálico):** "A sua gestão também precisa!"
- **Parágrafo:** "O sucesso no campo hoje vai além da safra. Envolve navegar um cenário complexo de regulamentações, mercado e riscos internos. Esta é a nova fronteira da gestão rural."
- **CTA Principal:** "Agende seu Diagnóstico Gratuito" → link para WhatsApp ou seção de contato
- **CTA Secundário:** "Saiba Mais" → scroll para próxima seção
- **Visual:** Background com imagem de lavoura/campo com overlay verde escuro semitransparente. Ícone de folha/planta como elemento decorativo.

---

### Seção 2: O que é Compliance na Prática
**Componente:** `ComplianceSection`

- **Título:** "O que é um Programa de Compliance na prática?"
- **Subtítulo:** "É um sistema de gestão inteligente desenhado para proteger seu negócio de dentro para fora. É a arquitetura da sua fortaleza!"
- **Layout:** Grid 2x2 (ou 4 colunas em desktop) com cards/ícones:

| Card | Título | Descrição |
|------|--------|-----------|
| 1 | Políticas Claras | Cria regras claras para todos os processos financeiros e operacionais. |
| 2 | Controles Internos | Garante que as políticas sejam seguidas. |
| 3 | Treinamentos | Capacita gestores para entender os riscos e saber como agir. |
| 4 | Monitoramento e Canal de Denúncias | Verifica se o sistema funciona e oferece um caminho seguro para relatar irregularidades. |

- **Ícones sugeridos:** Usar ícones de colunas gregas/pilares (remetendo à metáfora de fortaleza) ou ícones Lucide: `Shield`, `Eye`, `GraduationCap`, `Megaphone`.
- **Estilo:** Fundo branco/bege claro. Cards com borda sutil verde.

---

### Seção 3: Pilares Obrigatórios da Operação
**Componente:** `PilaresSection`

- **Título:** "Pilares Obrigatórios da Sua Operação"
- **Layout:** Grid de 5 cards (3+2 ou 5 em linha no desktop):

| Card | Sigla | Título | Descrição |
|------|-------|--------|-----------|
| 1 | CAR | Cadastro Ambiental Rural | Registro eletrônico nacional, essencial para a regularização ambiental e cumprimento do Código Florestal. |
| 2 | — | Licenciamento Ambiental | Exigência legal para atividades agroindustriais específicas, emitida por órgãos estaduais ou municipais. |
| 3 | SISBOV | Rastreabilidade | Sistema de identificação que, embora muitas vezes voluntário, torna-se obrigatório para acesso a mercados específicos. |
| 4 | NRs | Normas Trabalhistas | Cumprimento integral da legislação, incluindo Normas Regulamentadoras de segurança e saúde no trabalho rural. |
| 5 | MAPA/SIF | Inspeção Sanitária | Registros e inspeções obrigatórias para a produção e comercialização de produtos de origem animal e vegetal, garantindo a segurança alimentar. |

- **Estilo:** Cards brancos com borda superior verde. Ícones verdes dentro de cada card.
- **Fundo:** Bege claro (#F5F0ED) ou branco.

---

### Seção 4: Casos Reais — O Risco Interno
**Componente:** `CasosReaisSection`

- **Título de transição (impacto):** "O maior risco pode estar dentro de casa!"
- **Subtítulo:** Apresentar como alerta vermelho/sirene.
- **Layout:** Carrossel horizontal ou grid 2x2 de cards com fundo escuro (#1A1A1A).

**Case 1:**
- Local: Sorriso, MT
- Propriedade: 12.000 hectares | Produção: Soja e Milho | Faturamento: R$ 90 milhões
- Autor: Gerente Financeiro
- Método: Falsificação de notas fiscais de insumos e desvio de pagamentos para contas de "laranjas"
- **Prejuízo: R$ 4.2 MM** (destacar em amarelo/badge)

**Case 2:**
- Local: Rio Verde, GO
- Propriedade: 8.500 hectares | Produção: Pecuária de corte (confinamento) | Faturamento: R$ 150 milhões
- Autor: Coordenador de Logística
- Método: Criação de "fretes fantasmas" e conluio com transportadoras para inflar custos e dividir a diferença
- **Prejuízo: R$ 7.8 MM**

**Case 3:**
- Local: Luis Eduardo Magalhães, BA
- Propriedade: 25.000 hectares | Produção: Algodão e Soja | Faturamento: R$ 220 milhões
- Autor: Comprador Sênior
- Método: Falsificação de notas fiscais de insumos e desvio de pagamentos para contas de "laranjas"
- **Prejuízo: R$ 11 MM**

**Case 4:**
- Local: Uberaba, MG
- Propriedade: 4.000 hectares | Produção: Cana-de-açúcar e pecuária de elite | Faturamento: R$ 65 milhões
- Autor: Funcionário do Departamento Pessoal
- Método: Inclusão de "funcionários fantasmas" na folha de pagamento e desvio dos salários ao longo de 5 anos
- **Prejuízo: R$ 2.5 MM**

**Case 5:**
- Local: Cascavel, PR
- Propriedade: 2.800 hectares | Produção: Avicultura e Grãos | Faturamento: R$ 110 milhões
- Autor: Parente encarregado das vendas
- Método: Venda de parte da produção de grãos "por fora" com desvio dos recebíveis para conta pessoal, sem registro contábil
- **Prejuízo: R$ 9.3 MM**

- **Estilo:** Fundo escuro (#1A1A1A). Cards verdes (#2A5936) com texto branco. Badge de prejuízo em destaque (fundo branco, texto verde). Animação de entrada (Framer Motion stagger).
- **Elemento visual:** Ícone de sirene vermelha no título de transição.

---

### Seção 5: Perguntas Provocativas (Checklist de Autoavaliação)
**Componente:** `AutoavaliacaoSection`

- **Título:** "Sua operação está realmente protegida?"
- **Layout:** Lista de perguntas estilo checklist ou accordion. Cada pergunta pode ter um ícone de interrogação ou alerta.

**Perguntas:**
1. Quantas pessoas têm acesso às contas correntes da empresa hoje?
2. A empresa tem níveis de hierarquia para aprovar as movimentações bancárias?
3. Quem assina os relatórios das conferências diárias dos movimentos bancários da empresa?
4. Sua empresa tem todos os contratos com os fornecedores?
5. A empresa está em conformidade com leis trabalhistas e ambientais?
6. Sua empresa tem as devidas políticas de Compliance?
7. A empresa hoje atende às certificações para a conformidade legal no agronegócio brasileiro?

- **Estilo:** Fundo escuro (#1A1A1A) ou verde-escuro. Perguntas em texto branco grande (serif ou display font). Cada pergunta entra com animação ao scroll. Pode ser um formato de cards empilhados ou blocos horizontais.
- **CTA no final:** "Se você hesitou em alguma resposta, é hora de agir." → botão para contato.

---

### Seção 6: Reativo vs. Estratégico
**Componente:** `ComparativoSection`

- **Título:** "Sua gestão é reativa ou estratégica?"
- **Layout:** Duas colunas lado a lado.

**Coluna Esquerda — "Modelo Reativo: Apagar Incêndios"** (fundo escuro/preto)
- ❌ Custos inesperados com multas e litígios.
- ❌ Crises de reputação e perda de contratos.
- ❌ Perdas financeiras por falta de controle.
- ❌ Incerteza e vulnerabilidade constante.

**Coluna Direita — "Modelo Estratégico: Construir a Fortaleza"** (fundo verde-escuro)
- ✅ Previsibilidade e proteção patrimonial.
- ✅ Credibilidade com bancos e investidores.
- ✅ Controle e transparência total sobre a operação.
- ✅ Crescimento sustentável e valorização do negócio.

- **Estilo:** Visual de alto contraste. Usar ícones ❌ vermelhos e ✅ verdes. Animação de reveal ao scroll.

---

### Seção 7: Nosso Programa Completo
**Componente:** `ProgramaSection`

- **Título:** "Um programa completo para a sua tranquilidade"
- **Layout:** Lista vertical ou grid de 7 itens com ícones de check verde:

1. **Diagnóstico Inicial:** Análise detalhada de riscos e processos existentes.
2. **Criação de Políticas:** Desenvolvimento de manuais e políticas de conformidade personalizadas.
3. **Relatórios de Conformidade:** Reports claros e objetivos sobre a saúde do seu sistema de governança.
4. **Controles Internos:** Implementação de mecanismos de verificação e aprovação.
5. **Auditorias Periódicas:** Verificações regulares para garantir a eficácia e a aderência ao programa.
6. **Canal de Denúncias:** Estruturação de um canal seguro e confidencial para relatos.
7. **Treinamentos Especializados:** Capacitação para gestores e familiares sobre as novas políticas e riscos.

- **Estilo:** Fundo branco ou bege. Cards ou lista com ícones verdes à esquerda.

---

### Seção 8: Retorno Sobre a Proteção
**Componente:** `RetornoSection`

- **Título:** "O Retorno Sobre a Proteção"
- **Subtítulo:** "Um programa de compliance bem implementado se paga!"
- **Layout:** 4 cards ou blocos:

1. **Redução de riscos financeiros:** Blindagem contra fraudes, desvios e má gestão, protegendo seu caixa e seu patrimônio.
2. **Aumento da credibilidade:** Demonstra solidez e governança, facilitando o acesso a crédito com melhores condições.
3. **Maior controle e transparência:** Visibilidade total sobre contratos, pagamentos e recebimento de subsídios.
4. **Valorização da propriedade:** Uma fazenda com governança robusta tem maior valor de mercado e uma reputação sólida, tornando-se um legado mais seguro.

- **Estilo:** Fundo verde escuro com texto branco, ou fundo branco com cards verdes. Logo X4AGRO como elemento decorativo.

---

### Seção 9: Timeline — Processo em 90 Dias
**Componente:** `TimelineSection`

- **Título:** "Nosso processo é claro e ágil do início ao fim."
- **Layout:** Linha horizontal com 3 etapas (stepper/timeline):

| Etapa | Período | Título | Descrição |
|-------|---------|--------|-----------|
| 1 | Dias 1-30 | Diagnóstico e mapeamento de riscos | Realizamos um mergulho profundo nos seus processos atuais para identificar as principais vulnerabilidades e pontos de melhoria. |
| 2 | Dias 31-60 | Construção do programa | Desenvolvemos as políticas, controles internos e a estrutura do canal de denúncias, tudo sob medida para a sua operação. |
| 3 | Dias 61-90 | Implementação e treinamento | Colocamos os controles em prática, treinamos as equipes-chave (gestores e familiares) e iniciamos o monitoramento contínuo. |

- **Estilo:** Badges verdes numerados (ETAPA 1, 2, 3). Linha conectora horizontal. Animação sequencial (cada etapa revela ao scroll). Fundo claro.

---

### Seção 10: CTA Final / Contato
**Componente:** `ContatoSection` (adaptar do X4PAY)

- **Título:** "Vamos Proteger o Futuro do Seu Negócio?"
- **Subtítulo:** "O primeiro passo é entender suas vulnerabilidades específicas. Agende uma conversa para realizarmos um diagnóstico inicial, sem compromisso."
- **Dados de contato:**
  - WhatsApp: 81 9 8814-3087 (com link direto wa.me)
  - Email: contato@x4payassessoria.com
- **Formulário:** Nome, Email, Telefone, Nome da Propriedade, Mensagem (opcional). Botão "Agendar Diagnóstico".
- **Estilo:** Background com imagem de plantação com overlay verde. Texto branco. Formulário em card branco.

---

## 3. Componentes Compartilhados

Reutilizar do X4PAY (adaptar cores e textos):

| Componente X4PAY | Adaptação X4AGRO |
|-------------------|-------------------|
| `Navbar` | Trocar logo, links, cores. Links: Início, Compliance, Riscos, Programa, Processo, Contato |
| `Footer` | Trocar textos, manter estrutura. Adicionar "X4AGRO — Uma vertical X4PAY" |
| `Button` / `CTA` | Manter variantes, trocar cores para verde-medio/verde-claro |
| `SectionTitle` | Reutilizar, ajustar fonte/cor |
| `Card` | Reutilizar base, criar variantes (card escuro para cases, card claro para pilares) |
| `FAQ` / `Accordion` | Adaptar para as perguntas provocativas |
| `ContactForm` | Reutilizar, adicionar campo "Nome da Propriedade" |

---

## 4. Navbar — Links de Navegação

```
Logo X4AGRO | Início | Compliance | Riscos | Programa | Processo | Contato | [Botão CTA: Agendar Diagnóstico]
```

Scroll suave para cada seção (mesmo comportamento do X4PAY).

---

## 5. Footer

- Logo X4AGRO
- Texto: "X4AGRO — Compliance e Governança para o Agronegócio | Uma vertical X4PAY Assessoria"
- Links: WhatsApp, Email, Site X4PAY
- Copyright: "© 2025 X4PAY Assessoria. Todos os direitos reservados."

---

## 6. SEO & Meta Tags

```html
<title>X4AGRO — Compliance e Governança para o Agronegócio</title>
<meta name="description" content="Proteja seu negócio rural com programas de compliance sob medida. Diagnóstico de riscos, controles internos, auditorias e treinamentos para produtores rurais." />
<meta name="keywords" content="compliance agronegócio, governança rural, gestão fazenda, controles internos agro, auditoria rural, X4AGRO" />
```

---

## 7. Animações (Framer Motion)

Manter o mesmo padrão de animações do X4PAY:
- **Fade-in + slide-up** ao scroll para cada seção
- **Stagger children** nos grids de cards
- **Scale on hover** nos cards e botões
- **Seção Cases:** entrada mais dramática (fade from dark, stagger delay maior)
- **Timeline:** revelação sequencial das 3 etapas
- **Perguntas provocativas:** cada pergunta entra uma por uma com delay

---

## 8. Responsividade

- **Mobile-first** (como o X4PAY)
- Cards em grid: 1 coluna mobile → 2 colunas tablet → 3-4 colunas desktop
- Timeline: vertical no mobile, horizontal no desktop
- Comparativo Reativo vs. Estratégico: empilhado no mobile, lado a lado no desktop
- Navbar: hamburger menu no mobile

---

## 9. Rotas

Site é single-page (sem React Router, ou rota única `/`). Toda navegação é via scroll. Manter mesmo padrão do X4PAY.

---

## 10. Estrutura de Arquivos Sugerida

```
frontend/src/
├── components/
│   ├── Navbar.jsx          (adaptar do X4PAY)
│   ├── Footer.jsx          (adaptar do X4PAY)
│   ├── HeroSection.jsx
│   ├── ComplianceSection.jsx
│   ├── PilaresSection.jsx
│   ├── CasosReaisSection.jsx
│   ├── AutoavaliacaoSection.jsx
│   ├── ComparativoSection.jsx
│   ├── ProgramaSection.jsx
│   ├── RetornoSection.jsx
│   ├── TimelineSection.jsx
│   ├── ContatoSection.jsx
│   └── ui/                 (reutilizar do X4PAY)
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── SectionTitle.jsx
│       └── ...
├── assets/
│   ├── logo-x4agro.svg
│   └── images/             (imagens agro: lavoura, campo, etc.)
├── App.jsx
├── index.css
└── main.jsx
```

---

## 11. Checklist de Implementação

- [ ] Criar branch ou projeto separado para X4AGRO
- [ ] Copiar estrutura base do X4PAY
- [ ] Atualizar `tailwind.config.js` com nova paleta
- [ ] Substituir logo por X4AGRO
- [ ] Implementar HeroSection
- [ ] Implementar ComplianceSection (4 pilares)
- [ ] Implementar PilaresSection (5 obrigatórios)
- [ ] Implementar CasosReaisSection (5 cases, fundo escuro)
- [ ] Implementar AutoavaliacaoSection (7 perguntas)
- [ ] Implementar ComparativoSection (reativo vs. estratégico)
- [ ] Implementar ProgramaSection (7 entregáveis)
- [ ] Implementar RetornoSection (4 benefícios)
- [ ] Implementar TimelineSection (3 etapas em 90 dias)
- [ ] Implementar ContatoSection com formulário
- [ ] Adaptar Navbar e Footer
- [ ] Testar responsividade (mobile/tablet/desktop)
- [ ] Configurar meta tags SEO
- [ ] Deploy
