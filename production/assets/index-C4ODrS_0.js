(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const d=e=>{console.info("Hallo "+e)},n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function m(e,o=0){return(n[e[o+0]]+n[e[o+1]]+n[e[o+2]]+n[e[o+3]]+"-"+n[e[o+4]]+n[e[o+5]]+"-"+n[e[o+6]]+n[e[o+7]]+"-"+n[e[o+8]]+n[e[o+9]]+"-"+n[e[o+10]]+n[e[o+11]]+n[e[o+12]]+n[e[o+13]]+n[e[o+14]]+n[e[o+15]]).toLowerCase()}let i;const a=new Uint8Array(16);function g(){if(!i){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");i=crypto.getRandomValues.bind(crypto)}return i(a)}const y=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),u={randomUUID:y};function p(e,o,s){var t;if(u.randomUUID&&!e)return u.randomUUID();e=e||{};const c=e.random??((t=e.rng)==null?void 0:t.call(e))??g();if(c.length<16)throw new Error("Random bytes length must be >= 16");return c[6]=c[6]&15|64,c[8]=c[8]&63|128,m(c)}const f="virgo",h="male",U="chicken",b="Hello, this is from hallo.txt";d("Virgo");console.info(p());console.log("Hello world");console.log(f);console.log(h);console.log(U);console.log(b);
