(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", (e) => {
    if (e.target === refs.modal) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();

const modal = document.getElementById('order-modal');
const closeBtn = document.getElementById('modal-close');
const cartButtons = document.querySelectorAll('.card button, .card-btn, button'); 

cartButtons.forEach(btn => {
  if (btn.textContent.trim().toLowerCase().includes('кошик')) {
    btn.addEventListener('click', () => {
      modal.classList.remove('is-hidden');
      document.body.style.overflow = 'hidden';
    });
  }
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.add('is-hidden');
  document.body.style.overflow = '';
}

// Знаходимо елементи в DOM
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector(".nav");

// Слухаємо клік на кнопці
burgerBtn.addEventListener("click", () => {
  // toggle() — додає клас якщо його немає, прибирає якщо є
  nav.classList.toggle("is-open");

  // Оновлюємо aria-label залежно від стану

  const isOpen = nav.classList.contains("is-open");

  burgerBtn.setAttribute(
    "aria-label",

    isOpen ? "Закрити меню" : "Відкрити меню",
  );
});

// Закриваємо меню при кліку поза ним
document.addEventListener("click", (event) => {
  // event.target — елемент, на який клікнули
  // contains() — перевіряє, чи є елемент всередині nav
  const isClickInsideNav = nav.contains(event.target);

  if (!isClickInsideNav && event.target !== burgerBtn) {
    nav.classList.remove("is-open");
  }
});