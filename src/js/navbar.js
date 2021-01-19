// Navlinks
// const about = document.querySelector('.nav-about');
// const portfolio = document.querySelector('.nav-portfolio');
// const contact = document.querySelector('.nav-contact');

// Sections
const sectionAbout = document.querySelector('section#about');
const sectionPortfolio = document.querySelector('section#portfolio');
const footer = document.querySelector('footer');

document.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  if (scrollTop >= sectionAbout.offsetTop && scrollTop < sectionPortfolio.offsetTop) {
    console.log('about');
  }
  if (scrollTop >= sectionPortfolio.offsetTop && scrollTop < footer.offsetTop) {
    console.log('portfolio');
  }
  if (scrollTop >= footer.offsetTop) {
    console.log('contact');
  }
});