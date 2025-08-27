'use strict';

const overly = document.querySelector('.overly');
const buttons = document.querySelectorAll('.show-model');
const modals = document.querySelectorAll('.model');
const closeBtns = document.querySelectorAll('.close-model');


buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    document.getElementById(targetId).classList.remove('hidden');
    overly.classList.remove('hidden');
  });
});


closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.add('hidden');
    overly.classList.add('hidden');
  });
});


overly.addEventListener('click', () => {
  modals.forEach(m => m.classList.add('hidden'));
  overly.classList.add('hidden');
});
