// script.js: gerencia envio do formulário abrindo um mailto com os dados preenchidos
(function(){
  const form = document.getElementById('bookingForm');
  const openBtn = document.getElementById('openBooking');
  const clearBtn = document.getElementById('clearForm');
  const year = document.getElementById('year');
  year.textContent = new Date().getFullYear();

  // E-mail de contato - personalize conforme necessário
  const CONTACT_EMAIL = 'contato@gracielen.com.br'; // Assuma que seja alterado para o e-mail real

  // Permite trocar a foto de perfil localmente para preview (arraste/suba a imagem)
  const profilePhoto = document.getElementById('profilePhoto');
  // cria um pequeno controle invisível que o usuário pode usar para testar uma nova imagem
  const photoInput = document.createElement('input');
  photoInput.type = 'file';
  photoInput.accept = 'image/*';
  photoInput.style.display = 'none';
  document.body.appendChild(photoInput);

  // Ao selecionar um arquivo, mostramos preview local e, se for PNG com transparência, adicionamos classe
  photoInput.addEventListener('change', (ev) => {
    const file = ev.target.files && ev.target.files[0];
    if(!file) return;
    const url = URL.createObjectURL(file);
    profilePhoto.src = url;
    // tentamos detectar se a imagem tem canal alpha lendo tipo; melhor resultado se o arquivo for PNG
    if(file.type === 'image/png') profilePhoto.classList.add('transparent');
    else profilePhoto.classList.remove('transparent');
  });

  // Exponha um atalho simples: dar duplo-clique na foto abre seletor para testar substituição local
  profilePhoto && profilePhoto.addEventListener('dblclick', () => photoInput.click());

  openBtn && openBtn.addEventListener('click', () => {
    document.getElementById('name').focus();
    window.location.hash = '#agendamento';
  });

  clearBtn && clearBtn.addEventListener('click', () => {
    form.reset();
  });

  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const session = document.getElementById('session').value;
    const datetime = document.getElementById('datetime').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !email){
      alert('Por favor, preencha seu nome e e-mail.');
      return;
    }

    const subject = `Agendamento - ${session} - ${name}`;
    let body = `Olá Gracielen,%0D%0A%0D%0A`;
    body += `Gostaria de agendar: ${session}%0D%0A`;
    if(datetime) body += `Preferência de data/hora: ${datetime}%0D%0A`;
    body += `%0D%0ANome: ${name}%0D%0AE-mail: ${email}%0D%0A`;
    if(message) body += `%0D%0AMensagem: ${message}%0D%0A`;
    body += `%0D%0AObrigado(a),%0D%0A${name}`;

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Abre o cliente de e-mail do usuário com os campos preenchidos
    window.location.href = mailto;
  });
})();