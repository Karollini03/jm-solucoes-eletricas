// Preenche dados dinâmicos do config.js
document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
  el.href = `https://wa.me/${CONFIG.whatsapp}?text=Olá! Gostaria de solicitar um orçamento.`;
});
document.querySelectorAll('a[href*="instagram.com"]').forEach(el => {
  el.href = CONFIG.instagram;
});
document.querySelectorAll('a[href*="facebook.com"]').forEach(el => {
  el.href = CONFIG.facebook;
});
document.querySelector('a[href^="tel:"]').href = CONFIG.telefone;
document.querySelector('.contact__info-value').textContent = CONFIG.telefoneExibido;

const sections = ['inicio', 'servicos', 'galeria', 'contato'];
function setActiveSection(sectionId) {  /*definir a secao ativa */
  const navLinks = document.querySelectorAll('.header__nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === sectionId) {
      link.classList.add('active');
    }
  });
}
function handleScroll() {   /*rastrear o scroll da pagina */
  const scrollPosition = window.scrollY + 150;
  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      const offsetBottom = offsetTop + section.offsetHeight;
      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        setActiveSection(sectionId);
        break;
      }
    }
  }
}
window.addEventListener('scroll', handleScroll);
handleScroll();