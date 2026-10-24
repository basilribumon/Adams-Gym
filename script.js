const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#enquiryForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const message = [
    `Hi Adams Gym! I'm ${data.get('name')}.`,
    `I'm interested in: ${data.get('interest')}.`,
    `You can reach me at: ${data.get('contact')}.`,
    data.get('message') ? `A little more about me: ${data.get('message')}` : ''
  ].filter(Boolean).join('\n');
  document.querySelector('.form-response').textContent = `Copy this message and send it to @adams__gym__ on Instagram:\n${message}`;
  window.open('https://www.instagram.com/adams__gym__/', '_blank', 'noopener,noreferrer');
});
