# 1ª Corrida da Ternura — Site (landing + media kit)

Projeto web da 1ª Corrida da Ternura — evento de corrida e caminhada no Santuário da Divina e Trina Ternura, Guarapuava/PR, em 15/11/2026. Duas páginas responsivas que dividem a mesma identidade visual: uma pública (atletas) e uma comercial (patrocinadores).

Código limpo, sem dependências de build. HTML + CSS + um arquivo de JS. Fontes via Google Fonts. Pronto para evoluir.

---

## Estrutura de arquivos

```
site-corrida-da-ternura/
├── index.html              → Landing pública (participantes)
├── media-kit.html          → Media kit online (patrocinadores)
├── css/
│   └── styles.css          → Design system compartilhado (cores, tipografia, componentes)
├── js/
│   └── main.js             → Menu mobile, header ao rolar, animações de entrada
├── assets/
│   ├── logo-principal.svg      → Logo horizontal (uso geral)
│   ├── logo-vertical.svg       → Logo empilhada
│   ├── logo-simbolo.svg        → Símbolo isolado
│   ├── logo-mono-claro.svg     → 1 cor p/ fundo claro
│   ├── logo-mono-escuro.svg    → 1 cor p/ fundo escuro
│   ├── favicon.svg             → Favicon
│   └── img/                    → (coloque aqui fotos e logos de patrocinadores)
├── GUIA-IDENTIDADE.md      → Guia rápido da marca (paleta, fontes, logo, tom)
├── WIREFRAMES.md           → Mapa de seções das duas páginas
├── COMO-EDITAR.md          → Como trocar textos, imagens, links, contatos e logos
└── README.md               → Este arquivo
```

---

## Como ver localmente

Abra `index.html` no navegador (duplo clique). Para tudo funcionar 100% (caminhos relativos), o ideal é rodar um servidor local simples:

```bash
# Python (já vem no Mac/Linux)
cd site-corrida-da-ternura
python3 -m http.server 8000
# abra http://localhost:8000
```

---

## Como publicar (deploy)

Qualquer hospedagem de site estático serve. Opções gratuitas e simples:

- **Netlify:** arraste a pasta `site-corrida-da-ternura` em app.netlify.com/drop.
- **Vercel:** `vercel` na pasta, ou conecte um repositório.
- **GitHub Pages:** suba a pasta num repositório e ative o Pages.

Depois, aponte o domínio (ex.: `corridadaternura.com.br`) para o serviço escolhido.

Sugestão de URLs:

- `/` → landing (`index.html`)
- `/media-kit` → media kit (`media-kit.html`)

---

## Antes de publicar (checklist)

- [ ] Preencher os campos `[[...]]` (link de inscrição, WhatsApp, e-mail, Instagram) — ver `COMO-EDITAR.md`.
- [ ] Adicionar fotos reais em `assets/img/` e trocar os placeholders.
- [ ] Adicionar as logos dos patrocinadores.
- [ ] Criar as imagens de compartilhamento `assets/og-image.jpg` e `assets/og-image-mediakit.jpg` (1200×630).
- [ ] Publicar o regulamento em PDF e linkar.
- [ ] Conferir os valores das cotas no media kit (hoje “sob consulta”).

---

## Notas técnicas

- **Responsivo:** desktop, tablet e mobile (menu hambúrguer, tabela com rolagem lateral, cards empilhados).
- **Acessibilidade:** contraste AA, navegação por teclado, `alt` nas imagens, foco visível, respeito a `prefers-reduced-motion`.
- **Performance:** sem frameworks, CSS único, fontes com `display=swap`. Otimize as imagens (WebP) ao adicioná-las.
- **SEO/compartilhamento:** `<title>`, `meta description` e Open Graph já configurados nas duas páginas.

---

## Próximos passos sugeridos

- Apontar o botão “Inscreva-se” para a plataforma de inscrição que o evento já utiliza (a landing só direciona — não hospeda a inscrição).
- Adicionar GA4 / Meta Pixel para medir inscrições e gerar relatório de exposição aos patrocinadores.
- Produzir os mockups de marca (camiseta, número, arco) para a etapa de fechamento comercial.
- Evoluir para um CMS leve, caso queira editar sem mexer no código.
