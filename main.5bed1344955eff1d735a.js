(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(n,e,o){"use strict";o.r(e);o("lmye"),o("D/wG"),o("wCa+"),o("JBxO"),o("FdtR");!function(){console.log("%c Task-01","color: bisque; font-size: 24px");var n=function(n){return new Promise((function(e){setTimeout((function(){e(n)}),n)}))},e=function(n){return console.log("Resolved after "+n+"ms")};n(2e3).then(e),n(1e3).then(e),n(1500).then(e)}(),setTimeout((function(){console.log("%c Task-02","color: bisque; font-size: 24px");var n=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],e=function(n,e){var o=n.map((function(n){return n.name===e?Object.assign({},n,{active:!n.active}):n}));return new Promise((function(n){n(o)}))},o=function(n){return console.table(n)};e(n,"Mango").then(o),e(n,"Lux").then(o)}),3e3),setTimeout((function(){console.log("%c Task-03","color: bisque; font-size: 24px");var n=function(n){var e,o,t=(e=200,o=500,Math.floor(Math.random()*(o-e+1)+e));return new Promise((function(e,o){setTimeout((function(){Math.random()>.3&&e({id:n.id,delay:t}),o(n.id)}),t)}))},e=function(n){console.log("Transaction "+n.id+" processed in "+n.delay+"ms")},o=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};n({id:70,amount:150}).then(e).catch(o),n({id:71,amount:230}).then(e).catch(o),n({id:72,amount:75}).then(e).catch(o),n({id:73,amount:100}).then(e).catch(o)}),3500)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.5bed1344955eff1d735a.js.map