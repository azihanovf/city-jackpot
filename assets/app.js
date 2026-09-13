
const progress=document.querySelector('.progress');
const reveals=document.querySelectorAll('.reveal');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'}
updateProgress();addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress);
if(reduced){reveals.forEach(x=>x.classList.add('visible'))}else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});reveals.forEach(x=>io.observe(x))}
document.querySelectorAll('.faq-trigger').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq-item'),open=item.classList.contains('active');document.querySelectorAll('.faq-item').forEach(x=>{x.classList.remove('active');x.querySelector('.faq-trigger')?.setAttribute('aria-expanded','false')});if(!open){item.classList.add('active');btn.setAttribute('aria-expanded','true')}}));
const backdrop=document.getElementById('modal-backdrop');let current=null;
function openModal(id){const el=document.getElementById(id);if(!el)return;current=el;el.hidden=false;backdrop.hidden=false;document.body.classList.add('modal-open');}
function closeModal(){if(current)current.hidden=true;current=null;backdrop.hidden=true;document.body.classList.remove('modal-open');}
document.querySelectorAll('[data-modal-target]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();openModal(el.dataset.modalTarget)}));
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));backdrop.addEventListener('click',closeModal);addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const banner=document.getElementById('cookie-banner');if(localStorage.getItem('cj_cookie_ok')!=='1')banner.hidden=false;document.getElementById('accept-cookies')?.addEventListener('click',()=>{localStorage.setItem('cj_cookie_ok','1');banner.hidden=true});
