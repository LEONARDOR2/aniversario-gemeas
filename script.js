// Personalize os nomes e as mensagens aqui.
const birthday = {
  sisters: [
    { name: 'Andreia', message: 'Hoje é seu dia, e eu queria te lembrar do quanto você é especial para mim.\n\nQue seu novo ano venha cheio de sorrisos sinceros, sonhos realizados e gente que te faça bem. Eu vou estar aqui para torcer por você em cada conquista.\n\nFeliz aniversário! Que a vida te abrace com todo o carinho que você merece. ♡' },
    { name: 'Andreza', message: 'Dividir esse dia com você é mais um motivo para celebrar a sorte de ter você na minha vida.\n\nQue você continue encontrando alegria nas pequenas coisas e coragem para ir atrás dos seus sonhos. E que nunca se esqueça de que pode contar comigo.\n\nFeliz aniversário! Estou torcendo para que esse seja um ano lindo para você. ♡' }
  ]
};
const letter = document.querySelector('#letter');
birthday.sisters.forEach((sister, index) => {
  document.querySelector(`#name-${index}`).textContent = sister.name;
  document.querySelector(`[data-sister="${index}"]`).addEventListener('click', () => {
    document.querySelector('#letter-title').textContent = `Para você, ${sister.name}`;
    document.querySelector('#letter-text').textContent = sister.message;
    letter.showModal();
  });
});
document.querySelector('#close-letter').addEventListener('click', () => letter.close());
letter.addEventListener('click', event => {
  if (event.target !== letter) return;
  const bounds = letter.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) letter.close();
});
document.querySelector('#go-together').addEventListener('click', () => {
  letter.close();
  document.querySelector('#surprise').focus({ preventScroll: true });
  document.querySelector('#juntas').scrollIntoView();
});
document.querySelector('#surprise').addEventListener('click', () => {
  document.querySelector('#final-message').hidden = false;
  document.querySelector('#surprise').textContent = 'Celebrar de novo 🎉';
  document.querySelector('#final-message').scrollIntoView({ block: 'nearest' });
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const container = document.querySelector('#confetti');
  container.replaceChildren();
  for (let i = 0; i < 65; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetto';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = ['#f3b7c8', '#f5d77b', '#fff9f1', '#c95c7c'][i % 4];
    piece.style.animationDelay = `${Math.random() * .7}s`;
    piece.style.setProperty('--drift', `${Math.random() * 160 - 80}px`);
    piece.addEventListener('animationend', () => piece.remove(), { once: true });
    container.append(piece);
  }
});
