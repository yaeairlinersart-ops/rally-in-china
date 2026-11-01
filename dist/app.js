const modal = document.querySelector('#modal');
let trigger;
function showPreparing(event) {
  event.preventDefault();
  trigger = event.currentTarget;
  modal.showModal();
}
document.querySelector('#explore').addEventListener('click', showPreparing);
document.querySelectorAll('nav a').forEach(link => {
  link.setAttribute('aria-haspopup', 'dialog');
  link.addEventListener('click', showPreparing);
});
document.querySelector('.close').onclick = () => modal.close();
document.querySelector('#dismiss').onclick = () => modal.close();
modal.addEventListener('close', () => trigger?.focus());
modal.addEventListener('click', event => {
  if (event.target !== modal) return;
  const rect = modal.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) modal.close();
});
