// ===== Footer year =====
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// ===== Mobile menu toggle =====
const btn = document.getElementById('menuBtn');
const mobile = document.getElementById('mobileNav');

if (btn && mobile) {
  const closeMenu = () => {
    mobile.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    mobile.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
  };

  btn.addEventListener('click', () => {
    const isOpen = !mobile.hasAttribute('hidden');
    if (isOpen) closeMenu();
    else openMenu();
  });

  // Close when clicking any link inside dropdown
  mobile.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });

  // Close if user taps outside the menu (mobile/desktop)
  document.addEventListener('click', (e) => {
    const clickedInsideMenu = mobile.contains(e.target);
    const clickedButton = btn.contains(e.target);
    if (!clickedInsideMenu && !clickedButton) closeMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}
