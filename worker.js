const PCT_API = "https://migrated.crumbs.host/api.php";
const MIGRATIONS_API = "https://migrated.crumbs.host/api_migrations.php";

const html = String.raw`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#090710">
<meta name="description" content="BulbyBots — independent tools, Pi Network data and on-chain insight.">
<title>BulbyBots — Projects, Data & Discoveries</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="icon" type="image/png" href="https://crumbs.bulbybots.site/tt_pi_32.png">
<script>try{if(localStorage.getItem("crumbs-theme")==="pi")document.documentElement.dataset.theme="violet"}catch(e){}</script>
<style>
:root{color-scheme:dark;--bg:#090710;--panel:#0c1118;--line:rgba(210,185,255,.14);--muted:#a49bb8;--text:#f6f2ff;--teal:#79f5de;--violet:#aa91ff;--green:#79f5de}
html[data-theme="violet"]{--teal:#c0a3ff;--violet:#7cefe0;--green:#c0a3ff;--line:rgba(192,163,255,.2)}
*{box-sizing:border-box}
html{min-height:100%;scroll-behavior:smooth}
body{margin:0;min-height:100vh;overflow-x:hidden;background:var(--bg);color:var(--text);font-family:"DM Sans",Inter,ui-sans-serif,system-ui,sans-serif}
body:before{content:"";position:fixed;inset:0;z-index:-2;pointer-events:none;background:radial-gradient(ellipse at 8% 8%,rgba(60,235,210,.13),transparent 38%),radial-gradient(ellipse at 92% 10%,rgba(155,91,255,.15),transparent 40%)}
.ambient{position:fixed;inset:0;pointer-events:none;z-index:-1;opacity:.45;background-image:radial-gradient(circle at 24% 17%,#a9a2ff 1px,transparent 1.5px),radial-gradient(circle at 72% 29%,#79f5de 1px,transparent 1.5px),radial-gradient(circle at 88% 54%,#e7b3ff 1px,transparent 1.5px),radial-gradient(circle at 11% 73%,#79f5de 1px,transparent 1.5px);background-size:370px 290px,430px 350px,510px 390px,460px 330px}
bulbybot-header{display:block;width:100%;position:relative;z-index:5}
.header-shell{width:min(1800px,calc(100% - clamp(36px,5.6vw,92px)));margin:0 auto}
.container{width:min(1800px,calc(100% - clamp(36px,10.4vw,168px)));margin:0 auto}
.hero{padding:62px 0 34px}
.eyebrow{font:600 11px "IBM Plex Mono",monospace;letter-spacing:.19em;text-transform:uppercase;color:var(--teal)}
h1{max-width:1050px;margin:18px 0;font:600 clamp(42px,6.6vw,72px)/1.04 "Space Grotesk",sans-serif;letter-spacing:-.055em}
.gradient{background:linear-gradient(100deg,#f2fbff 4%,#8be9e4 38%,#c9adff 76%,#f4f8ff);-webkit-background-clip:text;background-clip:text;color:transparent}
.intro{max-width:690px;margin:0;color:#b7afc7;font-size:16px;line-height:1.75}
.pills{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
.pill{padding:9px 13px;border:1px solid var(--line);border-radius:999px;background:rgba(255,255,255,.025);color:#d1c9df;font:11px "IBM Plex Mono",monospace}
.pill b{color:var(--teal);font-weight:500}
.section-heading{display:flex;justify-content:space-between;align-items:end;gap:20px;margin:24px 0 16px}
.section-heading h2{margin:0;font:600 20px "Space Grotesk",sans-serif;letter-spacing:-.02em}
.section-heading p{margin:6px 0 0;color:var(--muted);font-size:12px}
.cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.card{--accent:var(--teal);position:relative;min-width:0;overflow:hidden;padding:22px;border:1px solid var(--line);border-radius:20px;background:linear-gradient(145deg,rgba(15,28,29,.91),rgba(10,12,20,.92));box-shadow:0 20px 70px rgba(0,0,0,.2);transition:transform .2s,border-color .2s,box-shadow .2s}
.card.migrations{--accent:var(--violet);background:linear-gradient(145deg,rgba(22,20,37,.92),rgba(10,12,20,.94))}
.card:before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:linear-gradient(90deg,var(--accent),transparent 78%)}
.card:hover{transform:translateY(-3px);border-color:color-mix(in srgb,var(--accent) 45%,transparent);box-shadow:0 22px 70px rgba(0,0,0,.3)}
.card-head{display:flex;align-items:center;gap:12px;min-width:0}
.project-icon{display:grid;place-items:center;flex:0 0 42px;width:42px;height:42px;border:1px solid color-mix(in srgb,var(--accent) 35%,transparent);border-radius:13px;background:color-mix(in srgb,var(--accent) 9%,transparent);color:var(--accent);font-size:21px}
.card-title{min-width:0}
.card-title h3{margin:0;font:600 18px "Space Grotesk",sans-serif}
.subtitle{margin-top:4px;color:var(--muted);font-size:11px}
.live{margin-left:auto;flex:0 0 auto;padding:5px 8px;border:1px solid var(--line);border-radius:999px;color:#c9c1d8;font:9px "IBM Plex Mono",monospace;white-space:nowrap}
.live:before{content:"";display:inline-block;width:6px;height:6px;margin-right:5px;border-radius:50%;background:var(--green);box-shadow:0 0 8px var(--green)}
.metric{margin:22px 0 13px;padding:18px 16px 16px;border:1px solid color-mix(in srgb,var(--accent) 25%,transparent);border-radius:15px;background:linear-gradient(120deg,color-mix(in srgb,var(--accent) 7%,rgba(4,13,18,.7)),rgba(4,10,17,.5))}
.metric-label{color:var(--muted);font-size:10px;letter-spacing:.07em;text-transform:uppercase}
.metric-value{margin-top:11px;color:var(--accent);font:600 clamp(23px,2.65vw,34px)/1.2 "IBM Plex Mono",monospace;letter-spacing:-.055em;overflow-wrap:anywhere}
.metric-value.loading{color:#9c9ab0;animation:pulse 1.5s ease-in-out infinite}
.metric-value.error{font:500 14px "DM Sans",sans-serif;letter-spacing:0;color:#ffb5c0}
.metric-note{margin-top:8px;color:#8f9fa8;font-size:10px;line-height:1.5}
.card-description{min-height:34px;margin:0 0 16px;color:#aaa4b8;font-size:11px;line-height:1.6}
.card-footer{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:15px;border-top:1px solid var(--line)}
.card-footer a{color:var(--accent);font-size:12px;font-weight:700;text-decoration:none}
.card-footer a:hover{text-decoration:underline;text-underline-offset:4px}
.updated{color:#8f8a9e;text-align:right;font:9px "IBM Plex Mono",monospace}
.more{display:flex;align-items:center;gap:14px;margin:26px 0 44px;padding:20px;border:1px dashed rgba(210,185,255,.2);border-radius:18px;background:rgba(255,255,255,.015)}
.plus{display:grid;place-items:center;flex:0 0 36px;width:36px;height:36px;border:1px solid var(--line);border-radius:12px;color:#c5bed5;font-size:20px}
.more h3{margin:0;font:600 13px "Space Grotesk",sans-serif}
.more p{margin:5px 0 0;color:var(--muted);font-size:11px;line-height:1.6}
footer{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:20px 0 28px;border-top:1px solid var(--line);color:#8f879e;font-size:10px}
footer a{color:#bcb1d0;text-decoration:none}
footer a:hover{color:var(--teal)}
@keyframes pulse{50%{opacity:.5}}
@media(max-width:900px){.container{width:calc(100% - 48px)}.hero{padding-top:48px}.card{padding:18px}.metric-value{font-size:clamp(22px,3vw,30px)}}
@media(max-width:680px){.container{width:calc(100% - 32px)}.hero{padding:42px 0 24px}h1{font-size:clamp(39px,10vw,58px)}.intro{font-size:14px}.section-heading{align-items:start}.cards{grid-template-columns:1fr;gap:14px}.card{padding:18px}.metric{margin-top:18px}.metric-value{font-size:clamp(25px,7vw,34px)}.card-description{min-height:0}.more{align-items:start;padding:16px}footer{padding-bottom:22px}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;animation:none!important;transition:none!important}.card:hover{transform:none}}
</style>
</head>
<body>
<div class="ambient" aria-hidden="true"></div>
<bulbybot-header active="home" brand="CRUMBS" theme="aurora"></bulbybot-header>
<div class="container">
<main>
<section class="hero">
<div class="eyebrow">Independent tools · On-chain insight</div>
<h1><span class="gradient">Follow the data.<br>Explore the projects.</span></h1>
<p class="intro">A home for the trackers, dashboards and experiments being built under BulbyBots. Start with PCT Funds and Pi Migration Insight — more projects are on the way.</p>
<div class="pills"><span class="pill"><b>02</b> active projects</span><span class="pill">Live data</span><span class="pill">More to come</span></div>
</section>
<section aria-labelledby="projects-title">
<div class="section-heading"><div><h2 id="projects-title">Explore the projects</h2><p>Live headline figures from the existing project data feeds.</p></div></div>
<div class="cards">
<article class="card pct">
<div class="card-head"><div class="project-icon" aria-hidden="true">↗</div><div class="card-title"><h3>PCT Funds</h3><div class="subtitle">Allocation tracing &amp; wallet flows</div></div><span class="live">LIVE DATA</span></div>
<div class="metric"><div class="metric-label">Total Pi moved</div><div class="metric-value loading" id="pct-value" aria-live="polite">Loading live total…</div><div class="metric-note" id="pct-note">Reading the PCT Funds overview feed</div></div>
<p class="card-description">Follow the Core Team’s Pi allocation through traced wallet flows and verified paths.</p>
<div class="card-footer"><a href="https://pct-funds.bulbybots.site/" target="_blank" rel="noopener noreferrer">Open PCT Funds ↗</a><span class="updated" id="pct-updated">Waiting for data</span></div>
</article>
<article class="card migrations">
<div class="card-head"><div class="project-icon" aria-hidden="true">⌘</div><div class="card-title"><h3>Migration Insight</h3><div class="subtitle">Migration activity &amp; mainnet intelligence</div></div><span class="live">LIVE DATA</span></div>
<div class="metric"><div class="metric-label">Total migrations</div><div class="metric-value loading" id="mig-value" aria-live="polite">Loading live total…</div><div class="metric-note" id="mig-note">Reading the migration overview feed</div></div>
<p class="card-description">Explore migration data, migration history and network activity analysis.</p>
<div class="card-footer"><a href="https://migrations.bulbybots.site/" target="_blank" rel="noopener noreferrer">Open Migration Insight ↗</a><span class="updated" id="mig-updated">Waiting for data</span></div>
</article>
</div>
<div class="more"><div class="plus" aria-hidden="true">+</div><div><h3>More projects are on the way</h3><p>This directory is designed to grow. New tools and dashboards can be added without disturbing the existing projects.</p></div></div>
</section>
</main>
<footer><span>© <span id="year"></span> BulbyBots · Independent Pi Network tools</span><span><a href="https://crumbs.bulbybots.site/">Crumbs</a> · <a href="https://crumbs.bulbybots.site/bubblemap/">Bubblemaps</a> · <a href="https://crumbs.bulbybots.site/nodecalc/">Nodecalc</a></span></footer>
</div>
<script src="https://bulbybot-header.bulbybot.workers.dev/bulbybot-header.js?v=20261013-tablet-nav-fix"></script>
<script>
(function(){
  var year=document.getElementById("year");
  if(year)year.textContent=String(new Date().getFullYear());
  var header=document.querySelector("bulbybot-header");
  try{
    if(header){
      header.setAttribute("theme",localStorage.getItem("crumbs-theme")==="pi"?"violet":"aurora");
      header.addEventListener("bulbybot-theme-toggle",function(event){
        var violet=event.detail&&event.detail.theme==="violet";
        if(violet)document.documentElement.dataset.theme="violet";
        else delete document.documentElement.dataset.theme;
        try{localStorage.setItem("crumbs-theme",violet?"pi":"green")}catch(e){}
      });
    }
  }catch(e){}
  function formatNumber(value,decimals){
    return Number(value).toLocaleString("en-US",{minimumFractionDigits:decimals,maximumFractionDigits:decimals});
  }
  function showError(prefix,message){
    var value=document.getElementById(prefix+"-value");
    value.classList.remove("loading");
    value.classList.add("error");
    value.textContent="Temporarily unavailable";
    document.getElementById(prefix+"-note").textContent=message;
    document.getElementById(prefix+"-updated").textContent="Not connected";
  }
  async function loadPCT(){
    try{
      var response=await fetch("/api/pct",{headers:{Accept:"application/json"},cache:"no-store"});
      if(!response.ok)throw new Error("HTTP "+response.status);
      var raw=await response.json();
      var data=raw&&raw.data&&raw.hop1LeftPi===undefined?raw.data:raw;
      var total=Number(data.hop1LeftPi);
      if(!Number.isFinite(total)||total<0)throw new Error("Missing total");
      var value=document.getElementById("pct-value");
      value.classList.remove("loading","error");
      value.textContent=formatNumber(total,2)+" π";
      document.getElementById("pct-note").textContent="From the PCT Funds live overview";
      document.getElementById("pct-updated").textContent="Updated "+new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
    }catch(error){showError("pct","Could not read the live PCT overview.");}
  }
  async function loadMigrations(){
    try{
      var response=await fetch("/api/migrations?action=overview",{headers:{Accept:"application/json"},cache:"no-store"});
      if(!response.ok)throw new Error("HTTP "+response.status);
      var raw=await response.json();
      if(raw&&raw.data)raw=raw.data;
      var summary=raw.summary||raw.totals||raw.overview||raw;
      var first=Number(summary.first_count??summary.first_migrations??summary.firstMigrations);
      var second=Number(summary.second_count??summary.second_migrations??summary.secondMigrations);
      var total=Number(summary.total_count??summary.total_migrations??summary.totalMigrations);
      if(!Number.isFinite(total)||total<0)total=first+second;
      if(!Number.isFinite(total)||total<0||!Number.isFinite(first)||!Number.isFinite(second))throw new Error("Missing total");
      var value=document.getElementById("mig-value");
      value.classList.remove("loading","error");
      value.textContent=formatNumber(total,0);
      document.getElementById("mig-note").textContent="1st + 2nd migration records in the live overview";
      document.getElementById("mig-updated").textContent="Updated "+new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
    }catch(error){showError("mig","Could not read the live migration overview.");}
  }
  loadPCT();
  loadMigrations();
  window.setInterval(function(){loadPCT();loadMigrations();},300000);
})();
</script>
</body>
</html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", {status:405,headers:{Allow:"GET, HEAD"}});
    }
    if (url.pathname === "/api/pct" || url.pathname === "/api/migrations") {
      const upstream = url.pathname === "/api/pct" ? new URL(PCT_API) : new URL(MIGRATIONS_API);
      if (url.pathname === "/api/pct") upstream.searchParams.set("action","overview");
      else for (const [key,value] of url.searchParams) upstream.searchParams.set(key,value);
      try {
        const response = await fetch(upstream.toString(), {headers:{Accept:"application/json"},cf:{cacheTtl:60,cacheEverything:true}});
        const headers = new Headers(response.headers);
        headers.set("Cache-Control","public, max-age=60");
        headers.set("X-Content-Type-Options","nosniff");
        headers.delete("content-encoding");
        headers.delete("content-length");
        return new Response(request.method === "HEAD" ? null : response.body,{status:response.status,headers});
      } catch (error) {
        return Response.json({ok:false,error:"Live data feed unavailable"},{status:502,headers:{"Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
      }
    }
    if (url.pathname !== "/" && url.pathname !== "/index.html") {
      return new Response("Not found",{status:404,headers:{"Content-Type":"text/plain; charset=utf-8"}});
    }
    return new Response(request.method === "HEAD" ? null : html,{headers:{
      "Content-Type":"text/html; charset=utf-8",
      "Cache-Control":"public, max-age=60, s-maxage=300",
      "X-Content-Type-Options":"nosniff",
      "Referrer-Policy":"strict-origin-when-cross-origin",
      "Content-Security-Policy":"default-src 'self'; script-src 'self' 'unsafe-inline' https://bulbybot-header.bulbybot.workers.dev https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https://cloudflareinsights.com; img-src 'self' https://crumbs.bulbybots.site data:; base-uri 'none'; frame-ancestors 'none'"
    }});
  }
};
