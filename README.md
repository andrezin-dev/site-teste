# Landing page - Gracielen (Terapeuta e Mentora)

Esta é uma landing page simples e profissional criada em HTML/CSS/JS puros. Ideal para apresentar a profissional, seus serviços e permitir agendamento inicial via e-mail (sem servidor).

O que foi criado:
- `index.html` — página principal com seções: Sobre, Serviços e Agendamento.
- `styles.css` — estilos básicos e responsivos.
- `script.js` — lógica do formulário que abre o cliente de e-mail do usuário (mailto) preenchido.

Como usar:
1. Abra o arquivo `index.html` no navegador (duplo-clique ou arraste para o navegador).
2. Para testar o envio de agendamento, preencha o formulário e clique em "Enviar solicitação". Isso abrirá seu cliente de e-mail com os dados preenchidos.

Personalizações recomendadas:
- Substitua `contato@gracielen.com.br` no `script.js` pelo e-mail real de contato.
- Substitua o texto de formação e a foto por informações reais de Gracielen.
- Se quiser agendamento automático, substitua o `mailto` por uma integração com um serviço (Google Calendar API, Calendly, ou backend que envie e-mails).

Remover fundo da foto (opções)
- Opção rápida (recomendada): use uma ferramenta automática como remove.bg ou PhotoRoom para gerar um PNG com fundo transparente. Depois substitua `assets/grasielen.jpg` por `assets/grasielen.png` (fundo transparente). A página aplicará o visual 'cutout' automaticamente.
- Opção manual (gratuita): abra a foto no Photopea (https://www.photopea.com/), use a ferramenta de seleção rápida ou a função "Remover fundo" e exporte como PNG com transparência.

Como testar/usar a foto enviada
- Coloque o arquivo da foto em `assets/grasielen.jpg` (ou `assets/grasielen.png` se com fundo removido).
- Para testar localmente sem editar arquivos: abra `index.html`, vá até a foto da hero e dê um duplo-clique nela — você poderá subir um arquivo local para preview (ele não será enviado ao servidor; é apenas um preview local).

Observação técnica
- Remover totalmente o fundo automaticamente no navegador com alta qualidade requer processamento (ex.: OpenCV GrabCut ou APIs de remoção de fundo). Para resultados melhores e rápidos eu recomendo gerar um PNG transparente com remove.bg / Photopea e me fornecer o PNG (ou subir em `assets/`); se quiser, posso remover o fundo pra você se você me enviar o arquivo original como upload (ou permitir o uso de um serviço externo com chave de API).

Observações:
- A sessão "Tira-dúvidas (Grátis)" foi incluída conforme solicitado.
- Este projeto é intencionalmente sem backend para ser fácil de publicar (GitHub Pages, Netlify ou servidor estático).

Se quiser, posso:
- Adicionar integração com Calendly ou Google Calendar;
- Gerar um formulário que envia para um servidor (ex.: via Formspree) para não depender do cliente de e-mail;
- Ajustar o layout com imagem real e textos adicionais.
