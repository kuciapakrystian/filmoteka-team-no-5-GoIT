const e="cc5e154eef1a5f4b837eb970b7b620d1",a="https://api.themoviedb.org/3",t=document.querySelector(".cards-home-list");async function i(){let t=new URL(`${a}/genre/movie/list`);t.searchParams.append("api_key",e);let i=await fetch(t);return(await i.json()).genres}async function s(e){let a=await i();return e.map(({id:t,poster_path:i,title:s,release_date:n,genre_ids:r,original_title:o,popularity:d,overview:l}=e)=>{let c=i?`https://image.tmdb.org/t/p/w500${i}`:"https://i.ibb.co/r76r6Vt/oie-30214851-Ms-Wl-PTS0.png",p=n?n.split("-")[0]:"Unknown",h=r?function(e,a){let t=[];for(let i of a){if("N/A"===e||0===e.length){t.push("Other");break}e.includes(i.id)&&t.push(i.name)}return t.length>2&&t.splice(2,t.length-2,"Other"),t.join(", ")}(r,a):"Unknown";return`
      <li class='cards-home-movie_list_item' data-id="${t}" >
      <div href="" class='cards-home-movie-link' id=${t}>
      <div class="cards-home-movie-photo"
        data-id="${t}"
        data-poster_path="${i}"
        data-title="${s}"
        data-genre_ids="${h}"
        data-original_title="${o}"
        data-release_date="${n}"
      ></div>
        <img class="cards-home-movie-image" src=${c} alt='Poster ${o}' loading='lazy' />
        <div class='cards-home-movie-info'>
            <p class='cards-home-movie-title'>
              <b>${s.toUpperCase()}</b>
            </p>
            <p class='cards-home-movie-date'>
              <span>${h} | ${p}</span>
            </p>
        </div>
        </div>
      </li>
      `}).join("")}(async function(t){let i=new URL(`${a}/trending/movie/week`);i.searchParams.append("api_key",e),i.searchParams.append("page",1);let s=await fetch(i);return await s.json()})(1).then(e=>s(e.results)).then(e=>{t.insertAdjacentHTML("beforeend",e)});
//# sourceMappingURL=index.8a18b649.js.map
