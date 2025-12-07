import{a as f,S as m,i}from"./assets/vendor-Cq7ZUixy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",y="47301858-8ff081a19a6e75e487e16544c";function h(o){return f.get(d,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new m(".gallery a");function L(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:u,downloads:p})=>`
      <li class="photo-card">
        <a href="${a}">
          <img src="${s}" alt="${e}" width="360" height="200" />
        </a>
        <ul class="props">
          <li>Likes <span class="props-value">${r}</span></li>
          <li>Views <span class="props-value">${n}</span></li>
          <li>Comments <span class="props-value">${u}</span></li>
          <li>Downloads <span class="props-value">${p}</span></li>
        </ul>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",t),g.refresh()}function b(){l.innerHTML=""}function S(){c.style.display="block"}function q(){c.style.display="none"}const v=document.querySelector(".form"),w=document.querySelector(".searchbar");v.addEventListener("submit",o=>{o.preventDefault();const t=w.value.trim();if(t===""){i.error({title:"Error",message:"Search query cannot be empty!"});return}b(),S(),h(t).then(({data:s})=>{if(s.hits.length===0){i.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(s.hits.slice(0,9))}).catch(s=>{i.error({title:"Error",message:`Something went wrong: ${s.message}`})}).finally(()=>{q()})});
//# sourceMappingURL=index.js.map
