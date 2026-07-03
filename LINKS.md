# O que cada link do site faz — guia para explicar ao cliente

Resumo direto de cada botão/link, onde aparece e qual o objetivo. Importante: **a landing NÃO faz a inscrição** — ela apenas direciona para a plataforma de inscrição que o evento já usa.

---

## Landing pública (`index.html`)
Objetivo da página: informar o atleta e **levar até a inscrição** e o contato.

| Botão / link | Para onde vai | Objetivo |
|---|---|---|
| **Inscreva-se** (topo) | `[[LINK_INSCRICAO]]` | Levar para a plataforma de inscrição do evento |
| **Garanta sua inscrição** (hero) | `[[LINK_INSCRICAO]]` | Mesmo destino — captura a decisão logo no início |
| **Ver modalidades** (hero) | Âncora `#modalidades` | Rolagem para as provas (5k, 10k, caminhada, kids) |
| **Quero participar** (Sobre) | `[[LINK_INSCRICAO]]` | Reforço de inscrição no meio da página |
| **Quero me inscrever** (faixa de vagas) | `[[LINK_INSCRICAO]]` | Inscrição com gatilho de escassez (600 vagas) |
| **Escolher minha modalidade** | `[[LINK_INSCRICAO]]` | Inscrição logo após ver as modalidades |
| **Baixar regulamento (PDF)** | `[[LINK_REGULAMENTO]]` | Dar segurança e resolver dúvidas formais |
| **Garantir minha inscrição** (fim) | `[[LINK_INSCRICAO]]` | Última chamada de inscrição |
| **Tirar dúvidas no WhatsApp** | `[[WHATSAPP]]` | Atendimento rápido antes de decidir |
| **Seja patrocinador →** / **Patrocine** | `media-kit.html` | Levar empresas para a página comercial |
| **Menu** (A corrida, Modalidades, Percurso, Kit, Dúvidas) | Âncoras internas | Navegação dentro da página |
| **Rodapé:** e-mail / WhatsApp / Instagram | `[[EMAIL]]` · `[[WHATSAPP]]` · `[[INSTAGRAM]]` | Canais de contato e redes |

> Há vários botões “Inscreva-se” ao longo da página **de propósito**: todos vão para o mesmo link e servem para capturar a decisão em qualquer ponto da rolagem.

---

## Media kit (`media-kit.html`)
Objetivo da página: **vender cotas de patrocínio**. Toda ação leva ao contato comercial.

| Botão / link | Para onde vai | Objetivo |
|---|---|---|
| **Falar com a comissão** (topo/hero) | `[[WHATSAPP]]` | Abrir conversa comercial |
| **Ver as cotas** (hero) | Âncora `#cotas` | Levar direto para as cotas |
| **Quero a Master / Tenho interesse / Quero apoiar** | `[[WHATSAPP]]` | Demonstrar interesse em uma cota específica |
| **Quero patrocinar** (fim) | `[[WHATSAPP]]` | Última chamada de contato |
| **Baixar apresentação (PDF)** | `[[LINK_PDF_MEDIAKIT]]` | Material para o patrocinador reenviar internamente |
| **Ver a corrida** | `index.html` | Mostrar a página pública ao patrocinador |
| **E-mail** (CTA/rodapé) | `[[EMAIL]]` | Contato comercial por e-mail |

---

## O que preencher em cada campo `[[...]]`

| Campo | O que colocar |
|---|---|
| `[[LINK_INSCRICAO]]` | Link da plataforma de inscrição do evento (a que vocês já usam) |
| `[[LINK_REGULAMENTO]]` | Link/arquivo do regulamento em PDF |
| `[[WHATSAPP]]` | `https://wa.me/55` + DDD + número (atendimento e comercial) |
| `[[EMAIL]]` | E-mail de contato do evento |
| `[[INSTAGRAM]]` | Link do perfil no Instagram |
| `[[LINK_PDF_MEDIAKIT]]` | Link do media kit em PDF (para patrocinadores) |

O passo a passo de como substituir está no `COMO-EDITAR.md`.
