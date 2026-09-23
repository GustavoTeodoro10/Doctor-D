# Doctor'D Nutrição Esportiva e Clínica

Site one-page institucional para a **Doctor'D Nutrição Esportiva e Clínica** (Diego Moraes), em Mauá – SP.

Projeto estático: **HTML + CSS + JS puro + Tailwind CSS via CDN**, sem build/bundler. Basta abrir/publicar os arquivos.

---

## 🗂️ Estrutura do projeto

```
Doctor'D/
├── index.html                          # Página única (todas as seções, via âncoras)
├── assets/
│   ├── css/
│   │   └── style.css                   # Estilos autorais (paleta, componentes, animações)
│   ├── js/
│   │   └── main.js                     # Menu mobile, scroll-reveal, accordion do FAQ, header sticky
│   └── img/
│       ├── logo-doctor-d.jpg           # Logo oficial (foto de perfil do Instagram @doctor_dnutricao)
│       ├── clinica-recepcao.jpg        # Foto real da recepção (parede com a logomarca aplicada)
│       ├── clinica-bioimpedancia-scan.jpg
│       ├── clinica-bioimpedancia-tela.jpg
│       └── favicon.jpg                 # Favicon gerado a partir do logo
├── .claude/
│   └── launch.json                     # Config only para pré-visualização local em dev (servidor estático)
└── README.md
```

Todas as imagens em `/assets/img/` foram **baixadas diretamente do Instagram (@doctor_dnutricao) e do perfil do Google Meu Negócio do cliente** — nenhuma foi recriada, gerada por IA ou obtida de banco de imagens.

---

## 🚀 Como rodar localmente

Não há build. Qualquer servidor estático funciona:

```bash
# Opção 1 — Python (já usado no preview deste projeto)
python -m http.server 5173

# Opção 2 — Node
npx serve .
```

Depois acesse `http://localhost:5173`.

> Abrir `index.html` direto no navegador (protocolo `file://`) também funciona, mas alguns navegadores restringem `fetch`/fontes externas nesse modo — prefira sempre um servidor local.

## 🌐 Deploy

Como é um site 100% estático, pode ser publicado sem nenhuma configuração especial em:
- **GitHub Pages** (Settings → Pages → branch `main` → pasta raiz)
- **Netlify** ou **Vercel** (arraste a pasta ou conecte o repositório — sem build command)
- Qualquer hospedagem compartilhada tradicional (via FTP)

---

## ⚠️ Pendências sinalizadas (não preenchidas com dado fictício)

Seguindo a regra de não inventar informação, os itens abaixo **não foram encontrados** nas fontes públicas autorizadas (Instagram e Google Meu Negócio) e precisam ser resolvidos com o cliente:

| Item | Status | Onde está no código |
|---|---|---|
| **CRN** (Conselho Regional de Nutricionistas) | Não encontrado em nenhuma fonte pública. Publicado sem o número, conforme validado com a agência. | Adicionar no rodapé (`index.html`, seção `<footer>`) e/ou na seção "Método" assim que o cliente informar. |
| **E-mail de contato** | Não encontrado nas redes do cliente. Rodapé publicado apenas com WhatsApp e endereço. | Se o cliente fornecer um e-mail, adicionar um novo `<li>` no bloco "Contato" do `<footer>`. |
| **Grade completa de horário de funcionamento** | O Google Meu Negócio só expôs o resumo "Abre qua. às 06:00" na visualização sem login; a grade completa da semana não pôde ser confirmada. Site direciona para o WhatsApp ("Horários sob consulta"). | Seção `#localizacao` em `index.html`. |
| **Valores dos planos (R$)** | Não há preços publicados nas redes do cliente. Os cards da seção "Planos" (Avaliação Avulsa / 90 dias / 180 dias) mostram os serviços inclusos, sem valor — mesmo padrão adotado pelo site-modelo nutrikelimattos.com.br. CTA leva ao WhatsApp para consulta de valores. | Seção `#oferta` em `index.html`. |
| **Google Analytics / Meta Pixel** | Nenhum ID real de rastreamento foi fornecido — não é possível inventar um. O bloco do Google Analytics (GA4) está pronto e comentado no `<head>` do `index.html`, bastando inserir o Measurement ID real (`G-XXXXXXXXXX`) e descomentar. | `<head>` de `index.html`, logo após o `<script type="application/ld+json">`. |
| **Domínio próprio** | O site foi escrito com URLs placeholder `https://www.doctordnutricao.com.br/` nas tags de SEO/Open Graph (`<link rel="canonical">`, `og:url`, `og:image`). Atualizar para o domínio real assim que for registrado/publicado. | `<head>` de `index.html`. |

---

## 🎨 Identidade visual (fonte: redes sociais do cliente)

- **Paleta:** preto/grafite (`#100E0B`), dourado/bronze metálico (`#B4893C`) e branco/mármore (`#F8F4EC`) — extraída do logotipo real e do ambiente físico fotografado da clínica.
- **Logo:** utilizado exatamente como baixado do Instagram, sem qualquer alteração, recriação ou re-estilização.
- **Tipografia:** Fraunces (títulos/serifada, personalidade editorial) + Manrope (texto/UI, alta legibilidade) — escolha autoral do estúdio, não extraída das redes.

## 🏗️ Estrutura de layout (referência: sites-modelo)

Layout inspirado em `nutridenisecruz.com.br` (hero com foto full-bleed, faixa de estatística, seção de localização) e `nutrikelimattos.com.br` (badges de credibilidade no hero, cards de planos em 3 níveis sem preço numérico, FAQ em acordeão, botão flutuante de WhatsApp). Nenhuma cor, fonte ou elemento de identidade visual desses sites foi reaproveitado.

## 📇 Dados reais utilizados

- **WhatsApp:** (11) 97686-5826
- **Endereço:** Av. da Saudade, 1174 - Vila Vitória, Mauá - SP, 09360-000
- **Instagram:** [@doctor_dnutricao](https://www.instagram.com/doctor_dnutricao)
- **Google:** [share.google/YlHHeYy6FH6d3kSAl](https://share.google/YlHHeYy6FH6d3kSAl) — nota 5,0 (15 avaliações)

---

Site desenvolvido por [TeoCode](https://teocode.com.br/).
