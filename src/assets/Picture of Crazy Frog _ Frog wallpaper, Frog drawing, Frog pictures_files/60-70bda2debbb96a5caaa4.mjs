(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[60],{"+lzj":function(e,t,n){n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return m}));var r=n("fyR6"),a=n("vzKb");const i={cumulativeLayoutShiftScore:0,firstInputDelay:null,longTaskDurations:[],largestContentfulPaint:null,elementTimings:[]},o=()=>{i.longTaskDurations=[]},c=Object(r.a)(()=>i.elementTimings),s=()=>c.get(),u=e=>{e&&c.save(),i.elementTimings=[]},d=()=>i;let l=0;const p=()=>l,m=()=>{Object(a.a)({type:"element",buffered:!0},e=>{i.elementTimings=i.elementTimings.concat(e.getEntries().reduce((e,{identifier:t,loadTime:n,renderTime:r})=>e.concat("string"==typeof t&&"number"==typeof n&&"number"==typeof r?[{identifier:t,loadTime:n,renderTime:r}]:[]),[]))}),Object(a.a)({entryTypes:["longtask"]},e=>{e.getEntries().map(e=>i.longTaskDurations.push(e.duration))},()=>o()),Object(a.a)({type:"first-input",buffered:!0},(e,t)=>{const n=e.getEntries()[0];n&&n.startTime&&n.processingStart&&(i.firstInputDelay={startTime:n.startTime,endTime:n.processingStart}),t.disconnect()},()=>{i.firstInputDelay=null}),Object(a.a)({type:"largest-contentful-paint",buffered:!0},e=>{const t=e.getEntries(),n=t.length,r=t[n-1];r&&(l=n,i.largestContentfulPaint=r.renderTime||r.loadTime||null)}),Object(a.a)({type:"layout-shift",buffered:!0},e=>{e.getEntries().forEach(e=>{e.hadRecentInput||(i.cumulativeLayoutShiftScore+=e.value)})})}},"B/lV":function(e,t,n){const r=e=>{const t=e.replace(new RegExp("^"+(window.location.origin||"")),""),n=document&&document.querySelector(`head > script[src='${t}']`);return!!n&&n.hasAttribute("defer")},a=e=>["pinimg","pinterest","pinterdev"].every(t=>!e.includes(t+".com/"));t.a=(e,t)=>{const n=(({name:e,initiatorType:t})=>{switch(t){case"xmlhttprequest":return"xmlhttprequest";case"img":return"image";case"video":return"video";default:{const t=e.split("."),n=(t.length>1&&t.pop()||"").toLowerCase();return["js","mjs"].includes(n)?"script":"css"===n?"css":["mp4","m4v","mov"].includes(n)?"video":["bmp","gif","jpg","jpeg","png","tiff","webp","svg"].includes(n)?"image":"other"}}})(e),{name:i}=e;return{category:n,isDeferred:"script"===n&&r(i),isExternal:a(i),isVisuallyCompleteRequired:"image"===n&&t.includes(i),timing:e}}},EHyI:function(e,t,n){n.d(t,"a",(function(){return o}));var r=()=>{var e;return!(null===(e=window.performance)||void 0===e||!e.timing)},a=n("XtwW"),i=n("gg0E");function o(e){return!("desktop"===e&&!r())&&(!!a.a&&Object(i.a)())}},FylZ:function(e,t,n){function r(){let e="";for(let t=0;t<16;t+=1){e+="0123456789abcdef"[Math.floor(16*Math.random())]}return e}n.d(t,"a",(function(){return r}))},LvPn:function(e,t,n){n.d(t,"a",(function(){return c}));var r=n("FylZ"),a=n("pody"),i=n("nEAA");const o=({category:e,isDeferred:t,isExternal:n})=>[e].concat(t?["deferred"]:[]).concat(n?["external"]:[]).join("_");function c(e,t){const{category:n,timing:c,isDeferred:s,isExternal:u,isVisuallyCompleteRequired:d}=e;return c.responseEnd&&("image"!==n||d)?{name:o(e),id:Object(r.a)(),parentId:t,startTime:c.startTime,endTime:c.responseEnd,annotationMap:Object(a.a)(c),binaryAnnotationMap:{category:Object(i.d)(n),decodedBodySize:Object(i.b)(c.decodedBodySize||0),initiatorType:Object(i.d)(c.initiatorType),isDeferred:Object(i.a)(s),isExternal:Object(i.a)(u),name:Object(i.d)(c.name),nextHopProtocol:Object(i.d)(c.nextHopProtocol),transferSize:Object(i.b)(c.transferSize||0)}}:null}},ONNR:function(e,t,n){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return C}));var r,a,i,o,c=function(e,t){return{name:e,value:void 0===t?-1:0,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},s=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=!1,d=function(e,t){u||"undefined"!=typeof InstallTrigger||(addEventListener("beforeunload",(function(){})),u=!0),addEventListener("visibilitychange",(function n(r){"hidden"===document.visibilityState&&(e(r),t&&removeEventListener("visibilitychange",n,!0))}),!0)},l=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},p=new WeakSet,m=function(e,t,n){var r;return function(){t.value>=0&&(n||p.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(r||0),(t.delta||void 0===r)&&(r=t.value,e(t)))}},f=function(e,t){var n,r=c("CLS",0),a=function(e){e.hadRecentInput||(r.value+=e.value,r.entries.push(e),n())},i=s("layout-shift",a);i&&(n=m(e,r,t),d((function(){i.takeRecords().map(a),n()})),l((function(){r=c("CLS",0),n=m(e,r,t)})))},b=-1,v=function(){return"hidden"===document.visibilityState?0:1/0},O=function(){d((function(e){var t=e.timeStamp;b=t}),!0)},g=function(){return b<0&&(b=v(),O(),l((function(){setTimeout((function(){b=v(),O()}),0)}))),{get timeStamp(){return b}}},j=function(e,t){var n,r=g(),a=c("FCP"),i=s("paint",(function(e){"first-contentful-paint"===e.name&&(i&&i.disconnect(),e.startTime<r.timeStamp&&(a.value=e.startTime,a.entries.push(e),p.add(a),n()))}));i&&(n=m(e,a,t),l((function(r){a=c("FCP"),n=m(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-r.timeStamp,p.add(a),n()}))}))})))},y={passive:!0,capture:!0},h=new Date,w=function(e,t){r||(r=t,a=e,i=new Date,E(removeEventListener),T())},T=function(){if(a>=0&&a<i-h){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+a};o.map((function(t){t(e)})),o=[]}},S=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){w(e,t),a()},r=function(){a()},a=function(){removeEventListener("pointerup",n,y),removeEventListener("pointercancel",r,y)};addEventListener("pointerup",n,y),addEventListener("pointercancel",r,y)}(t,e):w(t,e)}},E=function(e){["mousedown","keydown","touchstart","pointerdown"].map((function(t){return e(t,S,y)}))},_=function(e,t){var n,i=g(),u=c("FID"),f=function(e){e.startTime<i.timeStamp&&(u.value=e.processingStart-e.startTime,u.entries.push(e),p.add(u),n())},b=s("first-input",f);n=m(e,u,t),b&&d((function(){b.takeRecords().map(f),b.disconnect()}),!0),b&&l((function(){var i;u=c("FID"),n=m(e,u,t),o=[],a=-1,r=null,E(addEventListener),i=f,o.push(i),T()}))},C=function(e,t){var n,r=g(),a=c("LCP"),i=function(e){var t=e.startTime;t<r.timeStamp&&(a.value=t,a.entries.push(e)),n()},o=s("largest-contentful-paint",i);if(o){n=m(e,a,t);var u=function(){p.has(a)||(o.takeRecords().map(i),o.disconnect(),p.add(a),n())};["keydown","click"].map((function(e){addEventListener(e,u,{once:!0,capture:!0})})),d(u,!0),l((function(r){a=c("LCP"),n=m(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-r.timeStamp,p.add(a),n()}))}))}))}}},Og0o:function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));const r="closeupImage",a=()=>{if(!document.querySelector)return null;const e=document.querySelector('head>link[rel="preload"][as="image"][href^="https://i.pinimg.com/"]');return e instanceof HTMLLinkElement?e.href:null}},fZG9:function(e,t,n){n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return j}));var r=n("K8G+"),a=n("bNC6"),i=n("HMdf"),o=n("+lzj"),c=n("SyXB"),s=n("nEAA");const u=(e,t)=>(e||[]).reduce((e,n)=>({...e,["experiment."+n]:Object(s.d)(t(n))}),{}),d=(e,t)=>"number"==typeof t?e(t):null,l=e=>e.reduce((e,t)=>e+t,0),p=(e,t)=>Object.keys(t).reduce((n,r)=>({...n,[`${e}${r}`]:t[r]}),{}),m=e=>{if(!e.length)return{};const t=e.map(({startTime:e,requestStart:t,responseStart:n,responseEnd:r})=>{const a=t||e;return{startTime:e,requestStart:a,responseStart:n||a,responseEnd:r}}),n=l(t.map(e=>e.requestStart-e.startTime)),r=l(t.map(e=>e.responseStart-e.requestStart)),a=l(t.map(e=>e.responseEnd-e.responseStart)),i=n+r+a,o=l(e.map(e=>e.decodedBodySize||0));return{decodedBodySize:Object(s.b)((c=o,Number(Number(c/1024).toFixed(3)))),"duration.all":Object(s.b)(i),"duration.requestStartToResponseStart":Object(s.b)(r),"duration.responseStartToResponseEnd":Object(s.b)(a),"duration.startToRequestStart":Object(s.b)(n)};var c},f=e=>{const t=e.filter(e=>!!e.responseEnd);return{...e.length?{...m(t),"count.completed":Object(s.b)(t.length)}:{},"count.all":Object(s.b)(e.length)}},b=e=>{const t=e.reduce((e,t)=>(e[t.category]=(e[t.category]||[]).concat([t]),e),{}),n={script:t.script,script_deferred:e.filter(e=>e.isDeferred),external:e.filter(e=>e.isExternal),css:t.css,image:t.image,video:t.video,xmlhttprequest:t.xmlhttprequest,visually_complete:e.filter(e=>e.isVisuallyCompleteRequired)};return Object.keys(n).reduce((e,t)=>({...e,...p(`resource.${t}.`,f((n[t]||[]).map(e=>e.timing)))}),{})},v=(e,t)=>{const{devicePixelRatio:n,navigator:i,innerWidth:o,innerHeight:c}=window,{deviceMemory:u,hardwareConcurrency:d,platform:l,userAgent:p}=i,{appType:m,appVersion:f,browserName:b,browserVersion:v,deviceType:O,isAppShell:g,isAuthenticated:j,isBot:y,isSocialBot:h,locale:w,osName:T,stageName:S}=t,E="desktop"===O?m||5:m||6;let _;const{navigationType:C}=e;let L=null;if("initial_app_load"===C){var I;_=1;const e=null===(I=Object(r.a)("navigation")[0])||void 0===I?void 0:I.transferSize;L=e?parseFloat((.001*e).toFixed(1)):null}else _=4;return{"app.type":Object(s.c)(E),"app.version":Object(s.d)(f),"browser.name":Object(s.d)(b),"browser.version":Object(s.d)(v),"cpu.speed":Object(s.c)(d),"device.memory":Object(s.c)(u),"device.type":Object(s.c)(0),"device.typeName":Object(s.d)(O),"device.version":Object(s.d)("unknown"),"pwt.cause":Object(s.c)(_),"pwt.result":Object(s.c)(1),"view.type":Object(s.b)(0),"viewport.height":Object(s.b)(c||0),"viewport.width":Object(s.b)(o||0),devicePixelRatio:Object(s.b)(n||0),isAppShell:Object(s.a)(g),isAuthenticated:Object(s.a)(j),isBot:Object(s.a)(y),isSocialBot:Object(s.a)(h),locale:Object(s.d)(w),osName:Object(s.d)(T),...null!==L&&{htmlResponseSize:Object(s.b)(L)},platform:Object(s.d)(l||null),profilerVersion:Object(s.d)("3"),pwtActionName:Object(s.c)(Object(a.a)(e)),stageName:Object(s.d)(S),userAgent:Object(s.d)(p)}},O=({annotateExperiments:e,metricId:t,pwtStaticContext:n,binaryAnnotations:r={},performanceResourceTimings:a=[]})=>{let o={};{const{connection:e,hardwareConcurrency:t,deviceMemory:n}=window.navigator;o={"net.effectiveType":Object(s.d)((null==e?void 0:e.effectiveType)||null),"net.rtt":Object(s.b)(d(e=>10*Math.round(e/10),null==e?void 0:e.rtt)),"net.speed":Object(s.b)(Object(i.b)(a,!1)),"cpu.threads":Object(s.c)(t),"memory.size":Object(s.b)(n)}}return{...u(e,n.getExperimentGroup),...v(t,n),...r,...o,stopwatchVersion:Object(s.c)(1)}},g=(e,t,n)=>{var r;const{navigator:a}=window,{connection:u,serviceWorker:p}=a,{surface:m,navigationType:f,isAuthenticated:b}=e,{cumulativeLayoutShiftScore:v,longTaskDurations:O}=Object(o.e)();return{...O.length?{"longTask.count":Object(s.b)(O.length),"longTask.maxDuration":Object(s.b)(Math.max(...O)),"longTask.totalDuration":Object(s.b)(l(O))}:{},cumulativeLayoutShiftScore:Object(s.b)(100*v),"masonry.paginationMarkCount":Object(s.b)(Object(c.e)(c.a,t)),"metricId.isAuthenticated":Object(s.a)(b),"metricId.navigationType":Object(s.d)(f),"metricId.surface":Object(s.d)(m),"net.effectiveType":Object(s.d)((null==u?void 0:u.effectiveType)||null),"net.rtt":Object(s.b)(d(e=>10*Math.round(e/10),null==u?void 0:u.rtt)),"net.speed":Object(s.b)(Object(i.b)(n)),resourceBufferClearedCount:Object(s.c)(Object(c.e)("resourceBufferCleared",t)),scrollDuringLayout:Object(s.a)(Object(c.f)("scrollDuringLayout",t)),serviceWorker:Object(s.a)(p?!!p.controller:null),serviceWorkerState:Object(s.d)((null==p||null===(r=p.controller)||void 0===r?void 0:r.state)||null)}},j=({annotateExperiments:e,binaryAnnotations:t={},entries:n,metricId:r,performanceResources:a,pwtEndTime:i,pwtStaticContext:o})=>({...t,...b(a),...u(e,o.getExperimentGroup),...v(r,o),...g(r,i,n)})},"gz6+":function(e,t,n){n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return s}));var r=n("pody"),a=n("+lzj");const i=e=>({...Object(r.a)(e),domComplete:e.domComplete||0,domContentLoadedEventEnd:e.domContentLoadedEventEnd||0,domContentLoadedEventStart:e.domContentLoadedEventStart||0,domInteractive:e.domInteractive||0,loadEventEnd:e.loadEventEnd||0,loadEventStart:e.loadEventStart||0}),o=()=>{const{firstInputDelay:e,largestContentfulPaint:t}=Object(a.e)();return{firstInputDelayStart:(null==e?void 0:e.startTime)||0,firstInputDelayEnd:(null==e?void 0:e.endTime)||0,largestContentfulPaint:t||0}},c=(e,t)=>Object.keys(t).reduce((n,r)=>({...n,[`${e}${r}`]:t[r]}),{}),s=(e,t)=>Object.keys(e).reduce((n,r)=>t.includes(r)?{...n,[r]:e[r]}:n,Object.freeze({}))},mRg4:function(e,t,n){n.d(t,"a",(function(){return g}));let r=null;var a=(e,t)=>(r=r||{results:[],context:t},r.results.push(e),r),i=n("FZ8N"),o=n("LrH5"),c=n("bNC6"),s=n("3/Bf"),u=n("o9su"),d=n("FylZ");const l=(e,t)=>Object.keys(e).reduce((n,r)=>{const a=e[r];return a&&(n[r]={timestamp:t+a}),n},{}),p=({span:e,timeOrigin:t})=>{return{id:e.id,parent_id:e.parentId||null,result:1,name:e.name,timestamp:t+e.startTime,duration:e.endTime-e.startTime,annotations:l(e.annotationMap,t),binary_annotations:(n=e.binaryAnnotationMap,Object.keys(n).reduce((e,t)=>{const r=n[t];if(!r)return e;const{value:a,type:i}=r;return null==a?e:e.concat({name:t,value:a,annotation_type:i})},[]))};var n},m=(e,{startTime:t,endTime:n,annotationMap:r,binaryAnnotationMap:a,parentId:i,traceId:o})=>({name:"pwt/"+e,startTime:t,endTime:n,annotationMap:r,binaryAnnotationMap:a,parentId:i,id:o}),f=({annotations:e})=>e.reduce((e,{key:t,timestamp:n})=>({...e,["server_"+t]:{timestamp:n}}),{}),b=(e,t)=>({...e,annotations:{...f(t),...e.annotations},binary_annotations:[...t.binary_annotations,...e.binary_annotations]}),v=({traceId:e,actionName:t,result:n,timeOrigin:r,serverDataToJoin:a})=>{let i=p({span:m(t,n),timeOrigin:r}),o=null;return a&&(i=b(i,a),o=((e,t,n)=>{const r=Object(u.a)();return(null==r?void 0:r.responseEnd)?b(p({span:{name:"html",startTime:0,endTime:(null==r?void 0:r.responseEnd)||1,annotationMap:{},binaryAnnotationMap:{},id:e.server_span_id||Object(d.a)(),parentId:t},timeOrigin:n}),e):null})(a,e,r)),{trace_id:e,spans:[i,...o?[o]:[],...n.spans.map(e=>p({span:e,timeOrigin:r}))]}},O=Object(o.a)("reportResult");function g({metricId:e,pwtStaticContext:t,result:n,isAuth:r}){const{ajax:o,serverData:u}=t,d=Object(c.b)(e),l=`${n.type}.${d}`,p=void 0!==r&&{tags:{isAuth:r}}||void 0;if(Object(s.c)(n.reason?l.concat("."+n.reason):l,p),"COMPLETE"!==n.type)return void O("Abort metric "+d,n);const m=null!==(f=window.performance)&&void 0!==f&&f.now?Date.now()-window.performance.now():"unknown";var f,b;if("unknown"===m)return O(`Unable to convert to absolute times for ${d} due to missing time origin`),void Object(s.c)("missingTimeOrigin."+d,p);if(i.c&&(window.PWT_LAB_DATA=a(n,t)),n.spans.length&&(n.spans=n.spans.map(e=>(e.parentId||e.id===n.traceId||"network_resources"===e.name||(e.parentId=n.traceId),e))),!i.c){const r=e.navigationType&&"initial_app_load"===e.navigationType,a=n.traceId,c=v({traceId:a,actionName:d,result:n,timeOrigin:m,serverDataToJoin:r&&u||null});o({type:"POST",url:"/_/_/trace/trace/",data:{report_data:JSON.stringify(c),report_context:JSON.stringify((b=t,{debugTrace:i.a,locale:b.locale,stageName:b.stageName,userId:b.isAuthenticated?b.userId:null}))}}),O(`PinTrace ${d} will be available shortly: https://pintrace.pinadmin.com/zipkin/traces/${a}`,{duration:n.endTime-n.startTime,result:n,pwtStaticContext:t})}}},nEAA:function(e,t,n){n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c}));const r=e=>"number"==typeof e?Math.round(e):e,a=e=>({type:"I16",value:r(e)}),i=e=>({type:"I32",value:r(e)}),o=e=>({type:"STRING",value:e}),c=e=>({type:"BOOL",value:e})},o9su:function(e,t,n){var r=n("XtwW");t.a=()=>{const[e]=r.a?r.a.getEntriesByType("navigation"):[];return e}},pody:function(e,t,n){t.a=e=>({connectEnd:e.connectEnd||0,connectStart:e.connectStart||0,domainLookupEnd:e.domainLookupEnd||0,domainLookupStart:e.domainLookupStart||0,fetchStart:e.fetchStart||0,requestStart:e.requestStart||0,redirectEnd:e.redirectEnd||0,redirectStart:e.redirectStart||0,responseEnd:e.responseEnd||0,responseStart:e.responseStart||0,secureConnectionStart:e.secureConnectionStart||0,startTime:e.startTime||0,workerStart:e.workerStart||0,unloadEventStart:e.unloadEventStart||0,unloadEventEnd:e.unloadEventEnd||0})},xfna:function(e,t,n){n.d(t,"a",(function(){return H})),n.d(t,"b",(function(){return W})),n.d(t,"c",(function(){return G}));var r=n("q1tI"),a=n("EHyI");var i=e=>{const{deviceType:t,isBot:n,isSocialBot:r}=e;return`coreWebVitalsLite.v1.${(r?"socialBot":n&&"bot")||"nonbot"}.${t}`},o=n("7w6Q"),c=n("LrH5"),s=n("ONNR");const u=Object(c.a)("LayoutShiftDebugger"),d=e=>e instanceof HTMLElement&&e.dataset&&(e.dataset.layoutShiftBoundaryId||e.dataset.testId)||e.parentNode&&d(e.parentNode)||null;var l=({staticContext:e,getCurrentRoute:t,getLastNavigationTime:n})=>{let r=[];const a=i(e)+".CLS";let c=0;const l=()=>{var e;c=null!==(e=window.performance)&&void 0!==e&&e.now?window.performance.now():0};window.addEventListener("scroll",l),window.addEventListener("beforeunload",()=>window.removeEventListener("scroll",l)),Object(s.a)(({entries:e})=>{const a=t(),i=n(),o=e.slice(r.length);r=r.concat(o.map(e=>({shift:e,route:a,hadRecentNavigation:i>0&&i+500>e.startTime,hadRecentScroll:c>0&&c+500>e.startTime})))},!0);let p=0;const m=setInterval(()=>{if(r.length===p)return;const e=r.slice(p);p=r.length;let t=Object.freeze({});e.forEach(({shift:{value:e,sources:n},route:r,hadRecentNavigation:a,hadRecentScroll:i})=>{if(!n||!n.length)return;const o=e/n.length;n.forEach(({node:e})=>{const n=e?d(e)||"ROOT":"NODE_REMOVED",c={route:r,boundaryId:n,hadRecentNavigation:a,hadRecentScroll:i},s=JSON.stringify(c);t={...t,[s]:{score:((t[s]||{}).score||0)+o,tags:c}}})}),Object.keys(t).forEach(e=>{const{score:n,tags:r}=t[e];o.a.count(a+".shifts",(e=>Math.round(1e3*e))(n),1,{...r})});const n=e.reduce((e,{shift:{value:t}})=>e+t,0);u("Debug CLS boundaries",n,t,e)},1e3);window.addEventListener("beforeunload",()=>clearInterval(m))};var p=e=>{switch(e){case"/":return"homefeed";case"/pin/:id":return"pin_closeup";case"/pin/:id/visual-search":return"flashlight";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/search/:scope":return"search";case"/topics/:interest":return"topic";default:return null}},m=n("gg0E"),f=n("SyXB"),b=n("FZ8N"),v=n("3/Bf"),O=n("+lzj"),g=n("HMdf");const j=()=>({current:0,entries:[],firstTs:Number.NEGATIVE_INFINITY,id:`v1-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,max:0,prevTs:Number.NEGATIVE_INFINITY});var y=e=>{let t,n=j();const r=()=>{"hidden"===document.visibilityState&&(void 0===t||n.max>t)&&(t=n.max,e({name:"CLS",value:n.max,delta:0,id:n.id,entries:n.entries}))},a=e=>{e.hadRecentInput||((e.startTime-n.firstTs>5e3||e.startTime-n.prevTs>1e3)&&(n.firstTs=e.startTime,n.current=0),n.prevTs=e.startTime,n.current+=e.value,n.max=Math.max(n.max,n.current),n.entries.push(e),r())},i=((e,t)=>{try{if(window.PerformanceObserver.supportedEntryTypes.includes(e)){const n=new window.PerformanceObserver(e=>e.getEntries().map(t));return n.observe({type:e,buffered:!0}),n}}catch(n){}return null})("layout-shift",a);var o;i&&((e=>{const t=t=>{"pagehide"!==t.type&&"hidden"!==document.visibilityState||e()};window.addEventListener("visibilitychange",t,!0),window.addEventListener("pagehide",t,!0)})(()=>{i.takeRecords().map(a),r()}),o=()=>{n=j(),t=void 0},window.addEventListener("pageshow",e=>{e.persisted&&o()},!0))},h=n("o9su");var w=()=>Object(O.c)().reduce((e,{identifier:t,loadTime:n,renderTime:r})=>e[t+"_loadTime"]?e[t+"_dupe_loadTime"]?{...e,[t+"_dupe_loadTime"]:n,[t+"_dupe_renderTime"]:r}:e:{...e,[t+"_loadTime"]:n,[t+"_renderTime"]:r},Object.freeze({})),T=n("pody"),S=n("gz6+"),E=n("Og0o");var _=e=>{switch(e){case"pin_closeup":{const e=Object(E.b)();return(e=>{const t=Object(g.d)();return e.reduce((e,{name:n,match:r})=>t.filter(e=>r(e)).slice(0,2).reduce((e,t,r)=>({...e,...Object(S.a)(`${n}${r?"_dupe1":""}_`,Object(T.a)(t))}),e),Object.freeze({}))})([{name:"mainImage",match:({name:t})=>t===e},{name:"PinResource",match:({name:e})=>e.includes("PinResource")}])}default:return{}}},C=n("B/lV"),L=n("vzKb"),I=n("FylZ"),x=n("mRg4"),A=n("LvPn"),k=n("fZG9");const R=Object(c.a)("Vitals"),N=({annotateExperiments:e,annotateMarks:t,annotateResourceTimingForSurface:n,name:r,pwtStaticContext:a})=>{const i=(()=>{let e=[],t=null;if(window.PerformanceObserver){const n=1e3;t=Object(L.a)({entryTypes:["resource"]},t=>{e=e.concat(t.getEntries()),e.length>n&&(e=e.slice(-n))})}return{get:()=>e,disconnect:()=>{t&&t.disconnect()}}})();let o=!0,c={};return Object(v.c)("TIMING."+r,{tags:{isAuth:a.isAuthenticated}}),{stop:s=>{if(!o)return;o=!1,i.disconnect();const u={type:"stopwatch",name:r,navigationType:"initial_app_load"},d=Object(I.a)(),l=Object(h.a)(),p=i.get(),m={type:"COMPLETE",traceId:Object(I.a)(),startTime:0,endTime:s,spans:[{name:"network_resources",id:d,startTime:0,endTime:s,annotationMap:{},binaryAnnotationMap:{},parentId:null},...p.map(e=>Object(A.a)(Object(C.a)(e,[]),d)).filter(Boolean)],annotationMap:{...Object(S.a)("resource_",n?_(n):{}),...Object(S.a)("element_",w()),...Object(S.a)("mark_",t&&t.length?Object(S.d)(Object(f.d)(),t):{}),...Object(S.a)("browser_",l?Object(S.b)(l):{})},binaryAnnotationMap:Object(k.a)({annotateExperiments:e,metricId:u,pwtStaticContext:a,performanceResourceTimings:p,binaryAnnotations:c})};Object(x.a)({metricId:u,pwtStaticContext:a,result:m,isAuth:a.isAuthenticated})},addBinaryAnnotation:(e,t,n)=>{R(`adding binary annotation {${e}: ${String(t)}}`),c={...c,[e]:{value:t,type:n}}}}};const D=Object(c.a)("Vitals"),M={pin_closeup:{LCP:"pin_closeup_lcp",FID:"pin_closeup_fid"},board:{LCP:"board_lcp",FID:"board_fid"}},P=({surface:e,isAuthenticated:t})=>{if(t)return[];switch(e){case"pin_closeup":return["mweb_srcset_original_image","mweb_pin_page_ssr_lite"];case"board":return["mweb_unauth_ssr_board_page"];default:return[]}},B=({pwtStaticContext:e,surface:t})=>{const n="pin_closeup"===t||"board"===t?(({pwtStaticContext:e,surface:t})=>{const n=N({annotateExperiments:P({surface:t,isAuthenticated:e.isAuthenticated}),annotateResourceTimingForSurface:t,annotateMarks:["initialAppLoad","RenderReactContainer",...e.isAuthenticated?[]:["firstClientRenderUnauthPageWrapper","mountUnauthPageWrapper"],..."pin_closeup"===t?["firstClientRenderCloseupPage","firstClientRenderCloseupImage"]:[]],name:M[t].LCP,pwtStaticContext:e}),r=N({name:M[t].FID,pwtStaticContext:e});return(e,t)=>{"LCP"===e?n.stop(t):"FID"===e&&r.stop(t)}})({pwtStaticContext:e,surface:t}):null,r={},a=(a,c)=>{if(!r[a]){r[a]=!0;const s=i(e);if("LCPCount"===a){const n="enabled"===e.getExperimentGroup("mweb_pin_page_ssr_lite"),r=`${s}.${t}.${n?"mweb_pin_page_ssr_lite.":""}${a}`;o.a.count(r+".sum",c,1),o.a.increment(r+".size",1)}else o.a.timing(`${s}.${t}.${a}`,c,1),n&&n(a,c)}};Object(s.c)(({value:e})=>a("FID",(e=>Number(e.toFixed(2)))(e))),Object(s.d)(({value:e})=>{a("LCPCount",Object(O.d)()),a("LCP",(e=>10*Math.round(e/10))(e))}),Object(s.b)(({value:e})=>a("FCP",e))},z=e=>{const{isAuthenticated:t}=e,n=i(e)+".CLS";let r=null;y(({id:e,value:a})=>{const i=(c=a)<=.1?"good":c<=.25?"adequate":"poor";var c,s;r&&e===r.id?a>r.value&&(r.invalidation||(r={...r,invalidation:"score"},o.a.increment(n+".firstReportScoreWasInvalid",1,{bucket:r.bucket,isAuthenticated:t}),D("First record score was invalid")),"scoreAndBucket"!==!r.invalidation&&i!==r.bucket&&(r={...r,invalidation:"scoreAndBucket"},o.a.increment(n+".firstReportBucketWasInvalid",1,{bucket:r.bucket,isAuthenticated:t}),D("First record bucket was invalid"))):(r={id:e,value:a,bucket:i},o.a.timing(n+".firstRecordScore",(s=a,Math.ceil(100*s)),1),o.a.increment(n+".firstRecord",1,{bucket:i,isAuthenticated:t}),D("CLS report",a))})};var F=n("EC67"),$=n("nKUr");const q=Object(r.createContext)(null),V=Object(r.createContext)(null);function H({children:e,immutableLocation:t,resourceTimingCacheSize:n,routerHistoryAction:i,staticContext:o}){const c=Object(r.useRef)(null),s=Object(r.useRef)(null),u=Object(r.useRef)(t),d=Object(r.useRef)(!0),{path:j}=Object(F.k)(),y=Object(r.useRef)(j),h=Object(a.a)(o.deviceType);if(Object(r.useEffect)(()=>{y.current=j},[j]),Object(r.useEffect)(()=>{if(Object(g.f)({size:n||1e3}),Object(O.f)(),Object(v.c)("totalSessionVolume"),window.performance?["clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","mark","measure","now","setResourceTimingBufferSize"].forEach(e=>{window.performance[e]||Object(v.c)("not_supported.window.performance."+e)}):Object(v.c)("not_supported.window.performance"),window.PerformanceObserver||Object(v.c)("not_supported.window.PerformanceObserer"),Object(m.a)()||Object(v.c)("not_supported.grid_profiler"),d.current=!1,h&&"Chrome"===o.browserName&&!b.c){z(o),l({staticContext:o,getCurrentRoute:()=>y.current,getLastNavigationTime:()=>s.current||0});const e=p(j);e&&B({pwtStaticContext:o,surface:e})}},[]),u.current!==t){u.current=t,s.current=null!==(w=window.performance)&&void 0!==w&&w.now?window.performance.now():null;const{current:e}=s;if(!d.current){const t=!c.current;Object(v.c)("routeStart",{tags:{action:i}}),Object(g.a)(t),Object(O.a)(t),Object(O.b)(),Object(f.b)();const{customBufferSize:n,defaultBufferSize:r}=Object(g.e)();e&&(Object(v.c)("routeStart.customBufferSize",{count:n}),Object(v.c)("routeStart.defaultBufferSize",{count:r}),c.current={time:e,action:i})}}var w;return Object($.jsx)(q.Provider,{value:h?o:null,children:Object($.jsx)(V.Provider,{value:c.current,children:e})})}const W=()=>Object(r.useContext)(V),G=()=>Object(r.useContext)(q)}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/60-70bda2debbb96a5caaa4.mjs.map