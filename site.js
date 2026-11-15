(function(){
  var root=document.documentElement;
  function setLang(l){root.lang=l;try{localStorage.setItem('ll-lang',l)}catch(e){}
    document.querySelectorAll('[data-set]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.set===l)});}
  document.querySelectorAll('[data-set]').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.set)})});
  setLang(root.lang);
  var nav=document.getElementById('nav');
  if(nav){var f=function(){nav.classList.toggle('solid',scrollY>60)};addEventListener('scroll',f,{passive:true});f();}
  var rv=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});rv.forEach(function(el){io.observe(el)});}
  else rv.forEach(function(el){el.classList.add('in')});
  var lb=document.getElementById('lb');
  if(lb){var li=lb.querySelector('img');
    document.querySelectorAll('.shot img').forEach(function(im){im.parentNode.addEventListener('click',function(){li.src=im.src;li.alt=im.alt;lb.classList.add('open')})});
    lb.addEventListener('click',function(){lb.classList.remove('open')});
    addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('open')});}
})();
