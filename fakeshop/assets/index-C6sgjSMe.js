(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const p=document.querySelector("#app");if(!p)throw new Error("Failed to locate #app container");document.title="FakeShop — Fresh Finds Every Week";const m="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1600&q=80",u=`
  <article class="flex flex-col gap-4 rounded-3xl border border-slate-800/60 bg-slate-900/50 p-6 shadow-2xl shadow-slate-950/40">
    <div class="h-56 w-full animate-pulse rounded-2xl bg-slate-800/60"></div>
    <div class="h-6 w-3/4 animate-pulse rounded-full bg-slate-800/60"></div>
    <div class="h-4 w-full animate-pulse rounded-full bg-slate-800/60"></div>
    <div class="h-4 w-5/6 animate-pulse rounded-full bg-slate-800/60"></div>
    <div class="mt-auto flex items-center justify-between">
      <div class="h-6 w-20 animate-pulse rounded-full bg-slate-800/60"></div>
      <div class="h-10 w-28 animate-pulse rounded-full bg-slate-800/60"></div>
    </div>
  </article>
`;p.innerHTML=`
  <div class="min-h-screen bg-slate-950 font-sans text-slate-100">
    <header class="relative isolate overflow-hidden">
      <img
        src="${m}"
        alt="Fashionable clothing hanging in a boutique"
        class="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
      <div class="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 sm:py-28 lg:px-8">
        <span class="inline-flex max-w-max items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">
          FakeShop
        </span>
        <h1 class="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Step into the season&rsquo;s boldest looks crafted for every day legends.
        </h1>
        <p class="max-w-2xl text-base text-slate-200 sm:text-lg">
          Discover curated drops, limited collabs, and timeless essentials all in one place.
          Shop now, and let FakeShop style the moments that matter.
        </p>
        <div class="mt-4 flex flex-wrap items-center gap-4">
          <a
            href="#new-arrivals"
            class="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
          >
            Explore New Arrivals
          </a>
          <p class="text-sm text-slate-300">
            Free delivery on orders over $75 · Returns within 30 days
          </p>
        </div>
      </div>
    </header>

    <main id="new-arrivals" class="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:px-8">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Latest Drops</h2>
          <p class="mt-2 text-sm text-slate-300">
            Highlights from this week’s curated collection.
          </p>
        </div>
        <span id="product-status" class="text-sm text-slate-400">Loading products…</span>
      </div>
      <section class="mt-10">
        <div
          id="product-grid"
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
          aria-busy="true"
        >
          ${Array.from({length:9}).map(()=>u).join("")}
        </div>
      </section>
    </main>

    <footer class="border-t border-slate-900/70 bg-slate-950/80">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>&copy; ${new Date().getFullYear()} FakeShop. Crafted for dreamers and go-getters.</p>
        <p>Questions? Email <a class="text-emerald-300 hover:text-emerald-200" href="mailto:support@fakeshop.com">support@fakeshop.com</a></p>
      </div>
    </footer>
  </div>
`;const l=document.querySelector("#product-grid"),c=document.querySelector("#product-status"),g=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),i=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),f=e=>{const a=typeof e.Price=="number"&&!Number.isNaN(e.Price)?g.format(e.Price):"Contact us",r=e.ImageURL??e.UmageURL??m,o=e.ImageURL?' data-gseo="ImageURL"':e.UmageURL?' data-gseo="UmageURL"':"",t=e.Category?`<span data-gseo="Category" class="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200">${i(e.Category)}</span>`:"";return`
    <article class="flex h-full flex-col gap-4 rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/40 transition hover:-translate-y-1 hover:shadow-emerald-500/10">
      <div class="relative overflow-hidden rounded-2xl bg-slate-900/80">
        <img
          ${o}
          src="${r}"
          alt="${i(e.Name)}"
          class="aspect-[4/5] w-full object-cover object-center transition duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div class="flex flex-1 flex-col gap-3">
        ${t}
        <h3 data-gseo="Name" class="text-xl font-semibold text-white">${i(e.Name)}</h3>
        <p data-gseo="Description" class="text-sm leading-relaxed text-slate-300">
          ${i(e.Description)}
        </p>
      </div>
      <div class="mt-auto flex items-center justify-between">
        <span data-gseo="Price" class="text-lg font-semibold text-emerald-300">${a}</span>
        <button
          type="button"
          class="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
        >
          Add to cart
        </button>
      </div>
    </article>
  `},x=e=>{if(l){if(e.length===0){l.innerHTML=`
      <p class="col-span-full rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 text-center text-sm text-slate-300">
        New drops arrive every week. Check back soon for the latest from FakeShop.
      </p>
    `;return}l.innerHTML=e.map(f).join("")}},d=(e,a)=>{c&&(c.textContent=e),l&&l.setAttribute("aria-busy",String(a))},h=async()=>{try{d("Loading products…",!0);const e=await fetch("https://nahornyioleh.be/fakedata/product_data.json",{headers:{Accept:"application/json"}});if(!e.ok)throw new Error(`Request failed with status ${e.status}`);const a=await e.json();if(!Array.isArray(a))throw new Error("Unexpected response format — expected a product list");const r=a.slice(0,9);x(r),d("Showing this week’s highlights",!1)}catch(e){console.error(e),d("We had trouble loading products. Please refresh to try again.",!1),l&&(l.innerHTML=`
        <p class="col-span-full rounded-3xl border border-rose-500/40 bg-rose-500/10 p-8 text-center text-sm text-rose-200">
          Something went wrong while loading the FakeShop catalog. Hang tight and try again in a moment.
        </p>
      `)}};h();
