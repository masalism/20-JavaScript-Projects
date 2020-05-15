const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
toggle.addEventListener('click', (e) =>
    document.body.classList.toggle('show-nav')
);

// Show modal
open.addEventListener('click', (e) => modal.classList.add('show-modal'));

// Hide modal

close.addEventListener('click', (e) => modal.classList.remove('show-modal'));

// hide modal on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);