const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

const btn = document.getElementById('menuBtn');
const mobile = document.getElementById('mobileNav');

if (btn && mobile){
  btn.addEventListener('click', () => {
    const open = !mobile.hasAttribute('hidden');
    if (open) mobile.setAttribute('hidden','');
    else mobile.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', String(!open));
  });

  mobile.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> mobile.setAttribute('hidden',''));
  });
}
