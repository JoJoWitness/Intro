const hamburger = document.querySelector('.hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const navLinks = document.querySelector('.navLinks');
    if (navLinks) {
      navLinks.classList.toggle('expanded');
    }
  });
}
