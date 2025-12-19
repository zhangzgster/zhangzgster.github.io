const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

function cloneNavForDrawer() {
  if (!links) return null;
  const drawer = links.cloneNode(true);
  drawer.classList.remove('nav-links');
  drawer.classList.add('nav-drawer');
  return drawer;
}

if (toggle) {
  const topbar = document.querySelector('.topbar');
  const drawer = cloneNavForDrawer();
  if (drawer && topbar) {
    topbar.appendChild(drawer);
    drawer.style.display = 'none';
    toggle.addEventListener('click', () => {
      const visible = drawer.style.display === 'grid';
      drawer.style.display = visible ? 'none' : 'grid';
    });
  }
}

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 260) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
