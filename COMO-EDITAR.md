# Como editar o site — guia prático

Você não precisa saber programar para atualizar o essencial. Abra os arquivos `.html` num editor de texto (VS Code, Bloco de Notas, Sublime) e troque o que estiver indicado. Sempre faça uma cópia de segurança antes.

---

## 1. Campos rápidos `[[...]]` (faça isto primeiro)

> Quer entender o **objetivo de cada link** para explicar ao cliente? Está tudo no `LINKS.md`.

Procure (Ctrl+F) por estes marcadores em `index.html` e `media-kit.html` e substitua **incluindo os colchetes**:

| Marcador | Trocar por | Onde aparece |
|---|---|---|
| `[[LINK_INSCRICAO]]` | URL da plataforma de inscrição | Landing (botões de inscrição) |
| `[[LINK_REGULAMENTO]]` | URL/arquivo do regulamento em PDF | Landing (cronograma) |
| `[[WHATSAPP]]` | `https://wa.me/55DDDNÚMERO` | Ambas |
| `[[EMAIL]]` | `contato@corridadaternura.com.br` | Ambas |
| `[[INSTAGRAM]]` | `https://instagram.com/seuperfil` | Rodapé |
| `[[LINK_PDF_MEDIAKIT]]` | URL do media kit em PDF | Media kit (CTA) |

> Dica WhatsApp: `https://wa.me/5542999999999` (55 = Brasil, 42 = DDD, sem espaços ou traços).

---

## 2. Trocar textos

Todo o texto visível está dentro dos arquivos `.html`, entre as tags. Ex.: para mudar o título do hero, procure por `Corra com` em `index.html` e edite. Não altere o que está dentro de `<... >` (as tags) nem os nomes de classe.

---

## 3. Trocar imagens

O site já vem com **placeholders** que funcionam sem nenhuma imagem. Para colocar fotos reais:

1. Salve a imagem em `assets/img/` (ex.: `sobre.jpg`).
2. No HTML, encontre o bloco `<div class="media-ph ...">...</div>` e troque por:
   ```html
   <img src="assets/img/sobre.jpg" alt="Descrição da foto" style="border-radius:22px;width:100%">
   ```
3. **Imagem de compartilhamento (WhatsApp/redes):** crie `assets/og-image.jpg` (1200×630px) — já referenciada no `<head>`.
4. **Fundo do hero (opcional):** para usar foto no topo, adicione no CSS do `.hero` uma camada de imagem antes do gradiente (veja comentário em `css/styles.css`).

---

## 4. Logos de patrocinadores

Na landing, seção **Organização & apoio**, troque cada `<div class="sponsor-slot">...</div>` por:

```html
<img class="sponsor-slot" src="assets/img/patrocinador.png" alt="Nome do patrocinador" style="object-fit:contain;padding:10px;background:#fff">
```

Use PNG com fundo transparente sempre que possível.

---

## 5. Cotas, valores e benefícios (media kit)

- Os textos das cotas estão na seção `id="cotas"` de `media-kit.html`.
- A tabela comparativa está na seção `id="beneficios"`. Para mudar um item, troque `✓` / `–` / o texto da célula.
- Os valores estão como **“sob consulta”**. Para exibir preços, substitua esse texto pelo valor desejado.

---

## 6. Cores e fontes (avançado)

Tudo é controlado por variáveis em `css/styles.css`, no bloco `:root{ ... }`. Trocar um HEX ali atualiza o site inteiro. As fontes vêm do Google Fonts pelo `<link>` no `<head>` de cada página.

---

## 7. Favicon

Já configurado (`assets/favicon.svg`). Para gerar versões `.ico`/PNG, use um gerador de favicon a partir do SVG e adicione as linhas `<link rel="icon" ...>` no `<head>`.
