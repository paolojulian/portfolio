// Navbar
const navbar = document.querySelector('nav#navbar');
const home = navbar.querySelector('.home');
const about = navbar.querySelector('.about');
const portfolio = navbar.querySelector('.portfolio');
const contact = navbar.querySelector('.contact');

// Sections
const sectionAbout = document.querySelector('section#about');
const sectionPortfolio = document.querySelector('section#portfolio');
const footer = document.querySelector('footer');

/**
 * Highlight navlink
 * @param { HTMLElement } el 
 */
const highlightNavlink = (el) => {
  const activeNavlink = navbar.querySelector('.active')
  if (activeNavlink) {
    activeNavlink.classList.remove('active');
  }

  el.classList.add('active');
}

function onScroll() {
  const pos = window.scrollY;

  // Sticky navbar
  if (pos >= sectionAbout.offsetTop) {
    navbar.classList.remove('nav-bottom');
    navbar.classList.add('nav-fixed');
  } else {
    navbar.classList.remove('nav-fixed');
    navbar.classList.add('nav-bottom');
  }

  // Top
  if (pos >= 0 && pos < sectionAbout.offsetTop) {
    highlightNavlink(home);
  }
  
  // About
  if (pos >= sectionAbout.offsetTop && pos < sectionPortfolio.offsetTop) {
    highlightNavlink(about);
  }

  // Portfolio
  if (pos >= sectionPortfolio.offsetTop && pos < footer.offsetTop) {
    highlightNavlink(portfolio);
  }

  // Contact
  if (pos >= footer.offsetTop) {
    highlightNavlink(contact);
  }
}

document.addEventListener('scroll', onScroll);
