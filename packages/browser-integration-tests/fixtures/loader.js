!function(e,n,r,t,i,o,a,c,s,f){for(var u=f,forceLoad=!1,p=0;p<document.scripts.length;p++)if(document.scripts[p].src.indexOf(a)>-1){u&&"no"===document.scripts[p].getAttribute("data-lazy")&&(u=!1);break}var d=!1,l=[],_=function(e){("e"in e||"p"in e||e.f&&e.f.indexOf("capture")>-1||e.f&&e.f.indexOf("showReportDialog")>-1)&&u&&E(l),_.data.push(e)};function v(){_({e:[].slice.call(arguments)})}function h(e){_({p:"reason"in e?e.reason:"detail"in e&&"reason"in e.detail?e.detail.reason:e})}function E(a){if(!d){d=!0;var f=n.scripts[0],u=n.createElement(r);u.src=c,u.crossOrigin="anonymous",u.addEventListener("load",(function(){try{e.removeEventListener(t,v),e.removeEventListener(i,h),e.SENTRY_SDK_SOURCE="loader";var n=e[o],r=n.init;n.init=function(e){var t=s;for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);!function(e,n){var r=e.integrations||[];if(!Array.isArray(r))return;var t=r.map((function(e){return e.name}));e.tracesSampleRate&&-1===t.indexOf("BrowserTracing")&&r.push(new n.BrowserTracing);(e.replaysSessionSampleRate||e.replaysOnErrorSampleRate)&&-1===t.indexOf("Replay")&&r.push(new n.Replay);e.integrations=r}(t,n),r(t)},function(n,r){try{for(var t=0;t<n.length;t++)"function"==typeof n[t]&&n[t]();var i=_.data,o=!(void 0===(u=e.__SENTRY__)||!u.hub||!u.hub.getClient());i.sort((function(e){return"init"===e.f?-1:0}));var a=!1;for(t=0;t<i.length;t++)if(i[t].f){a=!0;var c=i[t];!1===o&&"init"!==c.f&&r.init(),o=!0,r[c.f].apply(r,c.a)}!1===o&&!1===a&&r.init();var s=e.onerror,f=e.onunhandledrejection;for(t=0;t<i.length;t++)"e"in i[t]&&s?s.apply(e,i[t].e):"p"in i[t]&&f&&f.apply(e,[i[t].p])}catch(e){console.error(e)}var u}(a,n)}catch(e){console.error(e)}})),f.parentNode.insertBefore(u,f)}}_.data=[],e[o]=e[o]||{},e[o].onLoad=function(e){l.push(e),u&&!forceLoad||E(l)},e[o].forceLoad=function(){forceLoad=!0,u&&setTimeout((function(){E(l)}))},["init","addBreadcrumb","captureMessage","captureException","captureEvent","configureScope","withScope","showReportDialog"].forEach((function(n){e[o][n]=function(){_({f:n,a:arguments})}})),e.addEventListener(t,v),e.addEventListener(i,h),u||setTimeout((function(){E(l)}))}
(
  window,
  document,
  'script',
  'error',
  'unhandledrejection',
  'Sentry',
  'loader.js',
  __LOADER_BUNDLE__,
  __LOADER_OPTIONS__,
  __LOADER_LAZY__
);