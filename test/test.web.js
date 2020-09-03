var HybrixTest=function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){n(1);const s=n(2);n(3);t.cli=e=>{const t=[],n=[];let r="\n";r+="   #   SAMPLE                                    SEED                    \n",r+="      ┌────┬─────┬──────┬────┬──────┬──────┬────┬────┬────┬──────┬──────┬────┬────┐\n",r+="      │Test│Sampl│Detail│Vald│Balnce│Unspnt│Hist│Tran│Vald│Balnce│Unspnt│Sign│Hash│\n";for(let i in e.assets){r+="      ├────┼─────┼──────┼────┼──────┼──────┼────┼────┼────┼──────┼──────┼────┼────┤\n",r+=i.substr(0,5)+"     ".substr(0,5-i.length)+" │";const o=s.renderSymbol(s.renderCellCLI,i,e.assets[i],t,n);r+=o[0]+"│",r+=o[1]+" │",r+=" "+o[2]+" │",r+=o[3]+"│",r+=" "+o[4]+" │",r+=" "+o[5]+" │",r+=o[6]+"│",r+=o[7]+"│",r+=o[8]+"│",r+=" "+o[9]+" │",r+=" "+o[10]+" │",r+=o[11]+"│",r+=o[12]+"│",r+="\n"}r+="      └────┴─────┴──────┴────┴──────┴──────┴────┴────┴────┴──────┴──────┴────┴────┘\n",r+="\n",r+="New Issues:\n",n.sort();for(let e=0;e<n.length;++e)r+=" - "+n[e]+"\n";r+="\n",r+="Known Issues:\n",t.sort();for(let e=0;e<t.length;++e)r+=" - "+t[e]+"\n";return r+="\n",r+="      SUCCESS RATE: "+Math.floor(100*((e.total-e.failures)/e.total||0))+"%\n",r},t.web=e=>{const t=[],n=[];let r='\n<style>\n:target {\n background-color: yellow;\n}\n</style>\n<table><tr><td>Symbol</td><td colspan="2"></td><td colspan="7" style="text-align:center;">Sample</td><td colspan="5"  style="text-align:center;">Seed</td></tr>';r+="<tr><td></td><td>Test</td><td>Sample</td><td>Details</td><td>Valid</td><td>Balance</td><td>Unspent</td>",r+="<td>History</td>",r+="<td>Transaction</td>",r+="<td>Valid</td><td>Balance</td><td>Unspent</td>",r+="<td>Sign</td><td>Hash</td></tr>";for(let i in e.assets)r+="<tr>",r+="<td>"+i+"</td>",r+=s.renderSymbol(s.renderCellWeb,i,e.assets[i],t,n,!1).join(""),r+="</tr>";r+="</table>",r+="<h3>New Issues</h3>",r+="<ul>",n.sort();for(let e=0;e<n.length;++e)r+="<li>"+n[e]+"</li>";r+="</ul>",r+='<h3><a href="https://gitlab.com/groups/hybrix/-/issues?milestone_title=Coin+support+%3A+Test+Issues" target="_blank">Known Issues</a></h3>',r+="<ul>",t.sort();for(let e=0;e<t.length;++e)r+="<li>"+t[e]+"</li>";return r+="</ul>",r+="<h1>"+(e.total-e.failures)/e.total*100+"%</h1>",r}},function(e,t){function n(e){if("object"!=typeof e||null===e)return!1;const t=[].slice.call(arguments);return t.shift(),t.reduce((t,n)=>e.hasOwnProperty(n)&&t,!0)}function s(e){return e.fee&&("string"==typeof e.fee||"number"==typeof e.fee||"object"==typeof e.fee&&null!==e.fee)}function r(e){return"string"==typeof e&&e.startsWith("valid")}function i(e,t,n){if(t.hasOwnProperty("factor")){const n=Number(t.factor);return"string"==typeof e&&(-1!==e.toString().indexOf(".")&&e.split(".")[1].length===n||0===n&&e.length===n)}return!1}function o(e){return null!=e&&!("string"==typeof e&&e.startsWith("ERROR"))}t.test=function(e){return n(e)},t.sample=function(e){return n(e,"address","transaction")},t.details=function(e){return n(e,"symbol","name","factor","contract","mode","keygen-base")&&s(e)},t.sampleValid=r,t.sampleBalance=i,t.sampleUnspent=o,t.sampleHistory=function(e){return e instanceof Array},t.sampleTransaction=function(e){return n(e,"id","timestamp","amount","symbol","source","target")&&s(e)},t.seedValid=r,t.seedBalance=i,t.seedUnspent=o,t.seedSign=function(e){return"string"==typeof e&&!e.startsWith("ERROR")},t.seedSignHash=function(e,t,n,s){if(console.log(s),"string"!=typeof s.seedSign||s.seedSign.startsWith("ERROR"))return!1;if(n.hasOwnProperty("hash")){const t=n.hash;return e===t||"dynamic"===t&&"00000000"!==e}return!1}},function(e,t,n){const s=n(3),r=(e,t,n,s,r,i)=>{const o=[];for(let a in n){const l=n[a],u=e(t,a,l.valid,l.known,l.result,s,r,i);o.push(u)}return o};function i(e){return void 0===e?"undefined":JSON.stringify(e)}const o=(e,t,n,s,r,o,a,l)=>{const u=i(r).replace(/"/g,"");return`\n<testcase id="${e+"_"+t+" host"}" name="${e+"_"+t}" time="0.001">${n?"":`<failure message="${u}" type="ERROR"></failure>`}</testcase>`},a=(e,t,n,r,i,o,a,l)=>{const u=i?` target="_blank" href="${i}"`:"",d=i?"":` <a style="color:red;"target="_blank" href="${s.link(e,t,n,r)}"><b>Create issue</b></a>`;return`\n    ${l?`<span class="hostIssueTitle">${e.toUpperCase()}</span>`:""}\n    <b style="color:red;">\n      ${l?"- Host ping failed":o}\n    </b> :\n    <a name="${a+u}">\n      ${r}\n    </a>\n    ${d}\n  `},l=(e,t,n,s,r)=>`<td style="text-align:center;background-color:${e}" title="${t}"><a style="text-decoration:none; width: 100%;height: 100%;display: block;" href="#${n}">&nbsp;</a>${r?'<span class="hostName">'+s+"</span>":""}</td>`;t.xml=(e,t)=>{const n=[],s=[];let i="";for(let a in e.assets)i+=r(o,a,e.assets[a],n,s,t).join("");return i='<?xml version="1.0" encoding="UTF-8" ?><testsuites id="hybrix" name="hybrix" tests="'+e.total+'" failures="'+e.failures+'" time="0.001"><testsuite id="testsuite.hybrix" name="hybrix" tests="'+e.total+'" failures="'+e.failures+'" time="0.001">'+i,i+="</testsuite></testsuites>",i},t.json=e=>i(e),t.renderCellWeb=(e,t,n,s,r,o,u,d)=>{const c=i(r).replace(/"/g,""),f="string"==typeof n?"Success"===n:n,p=d?Object.keys(r)[0]:t,h=e+" "+p,m=e+"_"+p,g=s||{},y=d?p:g.message||void 0;if(s){const t=f?"purple":"orange";return o.push(a(e,p,g,y,g.link,h,m,d)),l(t,c,m,h,d)}return f?`<td style="text-align:center;background-color:green" title="${c}">&nbsp;</td>`:(u.push(a(e,p,g,c,g.link,h,m,d)),l("red",c,m,h,d))},t.stringify=i,t.renderSymbol=r,t.renderCellCLI=(e,t,n,s,r,o,a)=>{const l=i(r).replace(/"/g,"");return s?n?(s.link?o.push("[36m"+e+" "+t+"[0m : "+s.message):o.push("[36m"+e+" "+t+"[0m : "+s.message+" [31m [Create issue][0m"),"[36m OK [0m"):(s.link?o.push("[33m"+e+" "+t+"[0m : "+s.message+" (Returned "+l+")"):o.push("[33m"+e+" "+t+"[0m : "+s.message+" [31m [Create issue][0m"),"[33mWARN[0m"):n?"[32m OK [0m":(a.push("[31m"+e+" "+t+"[0m : returned "+l+" [31m [Create issue][0m"),"[31mFAIL[0m")}},function(e,t){e.exports={link:function(e,t,n,s){const r=n&&n.message?n.message:"returned "+s;return`https://gitlab.com/hybrix/hybrixd/node/issues/new?issue[description]=${encodeURIComponent('/label ~"\\* Development Team \\*"\n/milestone %"DEV - asset maintenance - 2020-Q1"\n'+r)}&issue[title]=${encodeURIComponent(e+" "+t+" "+r)}`}}},function(e,t,n){const s=n(0),r=n(5),i=n(8);window.go=i.go(r,s)},function(e,t,n){const s=n(6),r=n(0),i=n(2),o=n(1),a=n(7).DEFAULT_TEST_SYMBOLS;function l(e,t){return new s(e).div(new s(10).pow(t)).toFixed()}function u(e){return e=void 0===e?{}:e,["sample","details","test"].forEach(t=>{void 0===e[t]&&(e[t]={})}),e}const d=e=>({test:{data:(e=u(e)).test,step:"id"},sample:{data:e.sample,step:"id"},details:{data:e.details,step:"id"},sampleValid:{data:e.sampleValid,step:"id"},sampleBalance:{data:e.sampleBalance,step:"id"},sampleUnspent:{data:e.sampleUnspent,step:"id"},sampleHistory:{data:e.sampleHistory,step:"id"},sampleTransaction:{data:e.sampleTransaction,step:"id"},seedValid:{data:e.seedValid,step:"id"},seedBalance:{data:e.seedBalance,step:"id"},seedUnspent:{data:e.seedUnspent,step:"id"},seedSign:{data:e.seedSign,step:"id"},seedSignHash:{data:{data:e.seedSign},step:"hash"}}),c=Object.keys(d({}));function f(e,t,n){return"string"!=typeof e&&"number"!=typeof e?NaN:"string"==typeof t&&/^(\d|\.)+$/.test(t)||"number"==typeof t?n["fee-symbol"]===n.symbol?new s(e).add(new s(t)).toFixed():e:"object"==typeof t&&null!==t?t.hasOwnProperty(n.symbol)?new s(e).add(new s(t[n.symbol])).toFixed():e:NaN}function p(e){return{data:[{symbol:e},"addAsset",{_options:{passErrors:!0},sample:{data:{query:"/asset/"+e+"/sample"},step:"rout"},test:{data:{query:"/asset/"+e+"/test"},step:"rout"},details:{data:{query:"/asset/"+e+"/details"},step:"rout"},address:{data:{symbol:e},step:"getAddress"},publicKey:{data:{symbol:e},step:"getPublicKey"}},"parallel",t=>{const n=(t=u(t)).test.amount||l(1e3,t.details.factor);return{_options:{passErrors:!0},sample:{data:t.sample,step:"id"},test:{data:t.test,step:"id"},details:{data:t.details,step:"id"},address:{data:t.address,step:"id"},sampleValid:{data:{query:"/asset/"+e+"/validate/"+t.sample.address},step:"rout"},sampleBalance:{data:{query:"/asset/"+e+"/balance/"+t.sample.address},step:"rout"},sampleUnspent:{data:{query:"/asset/"+e+"/unspent/"+t.sample.address+"/"+f(n,t.details.fee,t.details)+"/"+t.address+"/"+t.sample.publicKey},step:"rout"},sampleHistory:{data:{query:"/asset/"+e+"/history/"+t.sample.address},step:"rout"},sampleTransaction:{data:{query:"/asset/"+e+"/transaction/"+t.sample.transaction},step:"rout"},seedValid:{data:{query:"/asset/"+e+"/validate/"+t.address},step:"rout"},seedBalance:{data:{query:"/asset/"+e+"/balance/"+t.address},step:"rout"},seedUnspent:{data:{query:"/asset/"+e+"/unspent/"+t.address+"/"+f(n,t.details.fee,t.details)+"/"+t.sample.address+"/"+t.publicKey},step:"rout"}}},"parallel",t=>{const n=(t=u(t)).test.amount||l(1e3,t.details.factor);return{_options:{passErrors:!0},test:{data:t.test,step:"id"},sample:{data:t.sample,step:"id"},details:{data:t.details,step:"id"},sampleValid:{data:t.sampleValid+" "+t.sample.address,step:"id"},sampleBalance:{data:t.sampleBalance,step:"id"},sampleUnspent:{data:t.sampleUnspent,step:"id"},sampleHistory:{data:t.sampleHistory,step:"id"},sampleTransaction:{data:t.sampleTransaction,step:"id"},seedValid:{data:t.seedValid+" "+t.address,step:"id"},seedBalance:{data:t.seedBalance,step:"id"},seedUnspent:{data:t.seedUnspent,step:"id"},seedSign:{data:{symbol:e,amount:n,target:t.sample.address,validate:!1,unspent:t.test.hasOwnProperty("unspent")?t.test.unspent:t.seedUnspent,time:t.test.time},step:"rawTransaction"}}},"parallel",d,"parallel"],step:"sequential"}}const h=(e,t)=>n=>{const s={};let r=0,i=0;for(let a in n){s[a]={};const l=n[a];if(e.includes(a)&&void 0!==l){const e=l.details||{},n=l.test||{};for(let u in l){const d=l[u];if(o.hasOwnProperty(u)){const t=o[u](d,e,n,l);let r;t||r||++i,s[a][u]={valid:t,known:r,result:d,messages:["TODO"]}}else{const e=t?t[a+"_"+u]:void 0;s[a][u]={valid:!1,known:e,result:d,messages:["No validation available"]},++i}++r}}else for(let e of c){const n=t?t[a+"_"+e]:void 0;s[a][e]={valid:!1,known:n,result:null,messages:["Asset not available"]},++r,++i}}const a={assets:{},total:r,failures:i};return Object.keys(s).sort().forEach(e=>{a.assets[e]=s[e]}),a};t.runTests=function(e,t,n,s,r,i){const o={};e=e&&"*"!==e?e.split(","):a;for(let t of e)o[t]=p(t);t.sequential([{username:"POMEW4B5XACN3ZCX",password:"TVZS7LODA5CSGP6U"},"session",{host:n},"addHost",o,"parallel",h(e,i)],s,e=>{console.error(e)},r)},t.web=r.web,t.cli=r.cli,t.xml=i.xml,t.renderSymbol=r.renderSymbol},function(e,t,n){var s;!function(r){"use strict";function i(e,t){var n,s,r,i,o,a,l,u,d=e.constructor,c=d.precision;if(!e.s||!t.s)return t.s||(t=new d(e)),E?h(t,c):t;if(l=e.d,u=t.d,o=e.e,r=t.e,l=l.slice(),i=o-r){for(0>i?(s=l,i=-i,a=u.length):(s=u,r=o,a=l.length),i>(a=(o=Math.ceil(c/L))>a?o+1:a+1)&&(i=a,s.length=1),s.reverse();i--;)s.push(0);s.reverse()}for(0>(a=l.length)-(i=u.length)&&(i=a,s=u,u=l,l=s),n=0;i;)n=(l[--i]=l[i]+u[i]+n)/R|0,l[i]%=R;for(n&&(l.unshift(n),++r),a=l.length;0==l[--a];)l.pop();return t.d=l,t.e=r,E?h(t,c):t}function o(e,t,n){if(e!==~~e||t>e||e>n)throw Error(O+e)}function a(e){var t,n,s,r=e.length-1,i="",o=e[0];if(r>0){for(i+=o,t=1;r>t;t++)s=e[t]+"",(n=L-s.length)&&(i+=c(n)),i+=s;o=e[t],(n=L-(s=o+"").length)&&(i+=c(n))}else if(0===o)return"0";for(;o%10==0;)o/=10;return i+o}function l(e,t){var n,s,r,i,o,l=0,d=0,c=e.constructor,f=c.precision;if(u(e)>16)throw Error(S+u(e));if(!e.s)return new c(w);for(null==t?(E=!1,o=f):o=t,i=new c(.03125);e.abs().gte(.1);)e=e.times(i),d+=5;for(o+=Math.log(U(2,d))/Math.LN10*2+5|0,n=s=r=new c(w),c.precision=o;;){if(s=h(s.times(e),o),n=n.times(++l),a((i=r.plus(P(s,n,o))).d).slice(0,o)===a(r.d).slice(0,o)){for(;d--;)r=h(r.times(r),o);return c.precision=f,null==t?(E=!0,h(r,f)):r}r=i}}function u(e){for(var t=e.e*L,n=e.d[0];n>=10;n/=10)t++;return t}function d(e,t,n){if(t>e.LN10.sd())throw E=!0,n&&(e.precision=n),Error(N+"LN10 precision limit exceeded");return h(new e(e.LN10),t)}function c(e){for(var t="";e--;)t+="0";return t}function f(e,t){var n,s,r,i,o,l,c,p,m,g=1,y=e,b=y.d,v=y.constructor,x=v.precision;if(y.s<1)throw Error(N+(y.s?"NaN":"-Infinity"));if(y.eq(w))return new v(0);if(null==t?(E=!1,p=x):p=t,y.eq(10))return null==t&&(E=!0),d(v,p);if(p+=10,v.precision=p,s=(n=a(b)).charAt(0),i=u(y),!(Math.abs(i)<15e14))return c=d(v,p+2,x).times(i+""),y=f(new v(s+"."+n.slice(1)),p-10).plus(c),v.precision=x,null==t?(E=!0,h(y,x)):y;for(;7>s&&1!=s||1==s&&n.charAt(1)>3;)s=(n=a((y=y.times(e)).d)).charAt(0),g++;for(i=u(y),s>1?(y=new v("0."+n),i++):y=new v(s+"."+n.slice(1)),l=o=y=P(y.minus(w),y.plus(w),p),m=h(y.times(y),p),r=3;;){if(o=h(o.times(m),p),a((c=l.plus(P(o,new v(r),p))).d).slice(0,p)===a(l.d).slice(0,p))return l=l.times(2),0!==i&&(l=l.plus(d(v,p+2,x).times(i+""))),l=P(l,new v(g),p),v.precision=x,null==t?(E=!0,h(l,x)):l;l=c,r+=2}}function p(e,t){var n,s,r;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(s=t.search(/e/i))>0?(0>n&&(n=s),n+=+t.slice(s+1),t=t.substring(0,s)):0>n&&(n=t.length),s=0;48===t.charCodeAt(s);)++s;for(r=t.length;48===t.charCodeAt(r-1);)--r;if(t=t.slice(s,r)){if(r-=s,n=n-s-1,e.e=T(n/L),e.d=[],s=(n+1)%L,0>n&&(s+=L),r>s){for(s&&e.d.push(+t.slice(0,s)),r-=L;r>s;)e.d.push(+t.slice(s,s+=L));t=t.slice(s),s=L-t.length}else s-=r;for(;s--;)t+="0";if(e.d.push(+t),E&&(e.e>q||e.e<-q))throw Error(S+n)}else e.s=0,e.e=0,e.d=[0];return e}function h(e,t,n){var s,r,i,o,a,l,d,c,f=e.d;for(o=1,i=f[0];i>=10;i/=10)o++;if(0>(s=t-o))s+=L,r=t,d=f[c=0];else{if((c=Math.ceil((s+1)/L))>=(i=f.length))return e;for(d=i=f[c],o=1;i>=10;i/=10)o++;r=(s%=L)-L+o}if(void 0!==n&&(a=d/(i=U(10,o-r-1))%10|0,l=0>t||void 0!==f[c+1]||d%i,l=4>n?(a||l)&&(0==n||n==(e.s<0?3:2)):a>5||5==a&&(4==n||l||6==n&&(s>0?r>0?d/U(10,o-r):0:f[c-1])%10&1||n==(e.s<0?8:7))),1>t||!f[0])return l?(i=u(e),f.length=1,t=t-i-1,f[0]=U(10,(L-t%L)%L),e.e=T(-t/L)||0):(f.length=1,f[0]=e.e=e.s=0),e;if(0==s?(f.length=c,i=1,c--):(f.length=c+1,i=U(10,L-s),f[c]=r>0?(d/U(10,o-r)%U(10,r)|0)*i:0),l)for(;;){if(0==c){(f[0]+=i)==R&&(f[0]=1,++e.e);break}if(f[c]+=i,f[c]!=R)break;f[c--]=0,i=1}for(s=f.length;0===f[--s];)f.pop();if(E&&(e.e>q||e.e<-q))throw Error(S+u(e));return e}function m(e,t){var n,s,r,i,o,a,l,u,d,c,f=e.constructor,p=f.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new f(e),E?h(t,p):t;if(l=e.d,c=t.d,s=t.e,u=e.e,l=l.slice(),o=u-s){for((d=0>o)?(n=l,o=-o,a=c.length):(n=c,s=u,a=l.length),o>(r=Math.max(Math.ceil(p/L),a)+2)&&(o=r,n.length=1),n.reverse(),r=o;r--;)n.push(0);n.reverse()}else{for(r=l.length,(d=(a=c.length)>r)&&(a=r),r=0;a>r;r++)if(l[r]!=c[r]){d=l[r]<c[r];break}o=0}for(d&&(n=l,l=c,c=n,t.s=-t.s),a=l.length,r=c.length-a;r>0;--r)l[a++]=0;for(r=c.length;r>o;){if(l[--r]<c[r]){for(i=r;i&&0===l[--i];)l[i]=R-1;--l[i],l[r]+=R}l[r]-=c[r]}for(;0===l[--a];)l.pop();for(;0===l[0];l.shift())--s;return l[0]?(t.d=l,t.e=s,E?h(t,p):t):new f(0)}function g(e,t,n){var s,r=u(e),i=a(e.d),o=i.length;return t?(n&&(s=n-o)>0?i=i.charAt(0)+"."+i.slice(1)+c(s):o>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(0>r?"e":"e+")+r):0>r?(i="0."+c(-r-1)+i,n&&(s=n-o)>0&&(i+=c(s))):r>=o?(i+=c(r+1-o),n&&(s=n-r-1)>0&&(i=i+"."+c(s))):((s=r+1)<o&&(i=i.slice(0,s)+"."+i.slice(s)),n&&(s=n-o)>0&&(r+1===o&&(i+="."),i+=c(s))),e.s<0?"-"+i:i}function y(e,t){return e.length>t?(e.length=t,!0):void 0}function b(e){if(!e||"object"!=typeof e)throw Error(N+"Object expected");var t,n,s,r=["precision",1,v,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<r.length;t+=3)if(void 0!==(s=e[n=r[t]])){if(!(T(s)===s&&s>=r[t+1]&&s<=r[t+2]))throw Error(O+n+": "+s);this[n]=s}if(void 0!==(s=e[n="LN10"])){if(s!=Math.LN10)throw Error(O+n+": "+s);this[n]=new this(s)}return this}var w,v=1e9,x={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},E=!0,N="[DecimalError] ",O=N+"Invalid argument: ",S=N+"Exponent out of range: ",T=Math.floor,U=Math.pow,_=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,R=1e7,L=7,k=9007199254740991,q=T(k/L),M={};M.absoluteValue=M.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e},M.comparedTo=M.cmp=function(e){var t,n,s,r,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(s=i.d.length,t=0,n=(r=e.d.length)>s?s:r;n>t;++t)if(i.d[t]!==e.d[t])return i.d[t]>e.d[t]^i.s<0?1:-1;return s===r?0:s>r^i.s<0?1:-1},M.decimalPlaces=M.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*L;if(t=e.d[t])for(;t%10==0;t/=10)n--;return 0>n?0:n},M.dividedBy=M.div=function(e){return P(this,new this.constructor(e))},M.dividedToIntegerBy=M.idiv=function(e){var t=this.constructor;return h(P(this,new t(e),0,1),t.precision)},M.equals=M.eq=function(e){return!this.cmp(e)},M.exponent=function(){return u(this)},M.greaterThan=M.gt=function(e){return this.cmp(e)>0},M.greaterThanOrEqualTo=M.gte=function(e){return this.cmp(e)>=0},M.isInteger=M.isint=function(){return this.e>this.d.length-2},M.isNegative=M.isneg=function(){return this.s<0},M.isPositive=M.ispos=function(){return this.s>0},M.isZero=function(){return 0===this.s},M.lessThan=M.lt=function(e){return this.cmp(e)<0},M.lessThanOrEqualTo=M.lte=function(e){return this.cmp(e)<1},M.logarithm=M.log=function(e){var t,n=this,s=n.constructor,r=s.precision,i=r+5;if(void 0===e)e=new s(10);else if((e=new s(e)).s<1||e.eq(w))throw Error(N+"NaN");if(n.s<1)throw Error(N+(n.s?"NaN":"-Infinity"));return n.eq(w)?new s(0):(E=!1,t=P(f(n,i),f(e,i),i),E=!0,h(t,r))},M.minus=M.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?m(t,e):i(t,(e.s=-e.s,e))},M.modulo=M.mod=function(e){var t,n=this,s=n.constructor,r=s.precision;if(!(e=new s(e)).s)throw Error(N+"NaN");return n.s?(E=!1,t=P(n,e,0,1).times(e),E=!0,n.minus(t)):h(new s(n),r)},M.naturalExponential=M.exp=function(){return l(this)},M.naturalLogarithm=M.ln=function(){return f(this)},M.negated=M.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e},M.plus=M.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?i(t,e):m(t,(e.s=-e.s,e))},M.precision=M.sd=function(e){var t,n,s,r=this;if(void 0!==e&&e!==!!e&&1!==e&&0!==e)throw Error(O+e);if(t=u(r)+1,n=(s=r.d.length-1)*L+1,s=r.d[s]){for(;s%10==0;s/=10)n--;for(s=r.d[0];s>=10;s/=10)n++}return e&&t>n?t:n},M.squareRoot=M.sqrt=function(){var e,t,n,s,r,i,o,l=this,d=l.constructor;if(l.s<1){if(!l.s)return new d(0);throw Error(N+"NaN")}for(e=u(l),E=!1,0==(r=Math.sqrt(+l))||r==1/0?(((t=a(l.d)).length+e)%2==0&&(t+="0"),r=Math.sqrt(t),e=T((e+1)/2)-(0>e||e%2),r==1/0?t="1e"+e:t=(t=r.toExponential()).slice(0,t.indexOf("e")+1)+e,s=new d(t)):s=new d(r.toString()),r=o=(n=d.precision)+3;;)if(s=(i=s).plus(P(l,i,o+2)).times(.5),a(i.d).slice(0,o)===(t=a(s.d)).slice(0,o)){if(t=t.slice(o-3,o+1),r==o&&"4999"==t){if(h(i,n+1,0),i.times(i).eq(l)){s=i;break}}else if("9999"!=t)break;o+=4}return E=!0,h(s,n)},M.times=M.mul=function(e){var t,n,s,r,i,o,a,l,u,d=this,c=d.constructor,f=d.d,p=(e=new c(e)).d;if(!d.s||!e.s)return new c(0);for(e.s*=d.s,n=d.e+e.e,l=f.length,(u=p.length)>l&&(i=f,f=p,p=i,o=l,l=u,u=o),i=[],s=o=l+u;s--;)i.push(0);for(s=u;--s>=0;){for(t=0,r=l+s;r>s;)a=i[r]+p[s]*f[r-s-1]+t,i[r--]=a%R|0,t=a/R|0;i[r]=(i[r]+t)%R|0}for(;!i[--o];)i.pop();return t?++n:i.shift(),e.d=i,e.e=n,E?h(e,c.precision):e},M.toDecimalPlaces=M.todp=function(e,t){var n=this,s=n.constructor;return n=new s(n),void 0===e?n:(o(e,0,v),void 0===t?t=s.rounding:o(t,0,8),h(n,e+u(n)+1,t))},M.toExponential=function(e,t){var n,s=this,r=s.constructor;return void 0===e?n=g(s,!0):(o(e,0,v),void 0===t?t=r.rounding:o(t,0,8),n=g(s=h(new r(s),e+1,t),!0,e+1)),n},M.toFixed=function(e,t){var n,s,r=this,i=r.constructor;return void 0===e?g(r):(o(e,0,v),void 0===t?t=i.rounding:o(t,0,8),n=g((s=h(new i(r),e+u(r)+1,t)).abs(),!1,e+u(s)+1),r.isneg()&&!r.isZero()?"-"+n:n)},M.toInteger=M.toint=function(){var e=this,t=e.constructor;return h(new t(e),u(e)+1,t.rounding)},M.toNumber=function(){return+this},M.toPower=M.pow=function(e){var t,n,s,r,i,o,a=this,u=a.constructor,d=+(e=new u(e));if(!e.s)return new u(w);if(!(a=new u(a)).s){if(e.s<1)throw Error(N+"Infinity");return a}if(a.eq(w))return a;if(s=u.precision,e.eq(w))return h(a,s);if(o=(t=e.e)>=(n=e.d.length-1),i=a.s,o){if((n=0>d?-d:d)<=k){for(r=new u(w),t=Math.ceil(s/L+4),E=!1;n%2&&y((r=r.times(a)).d,t),0!==(n=T(n/2));)y((a=a.times(a)).d,t);return E=!0,e.s<0?new u(w).div(r):h(r,s)}}else if(0>i)throw Error(N+"NaN");return i=0>i&&1&e.d[Math.max(t,n)]?-1:1,a.s=1,E=!1,r=e.times(f(a,s+12)),E=!0,(r=l(r)).s=i,r},M.toPrecision=function(e,t){var n,s,r=this,i=r.constructor;return void 0===e?s=g(r,(n=u(r))<=i.toExpNeg||n>=i.toExpPos):(o(e,1,v),void 0===t?t=i.rounding:o(t,0,8),s=g(r=h(new i(r),e,t),(n=u(r))>=e||n<=i.toExpNeg,e)),s},M.toSignificantDigits=M.tosd=function(e,t){var n=this.constructor;return void 0===e?(e=n.precision,t=n.rounding):(o(e,1,v),void 0===t?t=n.rounding:o(t,0,8)),h(new n(this),e,t)},M.toString=M.valueOf=M.val=M.toJSON=function(){var e=this,t=u(e),n=e.constructor;return g(e,t<=n.toExpNeg||t>=n.toExpPos)};var P=function(){function e(e,t){var n,s=0,r=e.length;for(e=e.slice();r--;)n=e[r]*t+s,e[r]=n%R|0,s=n/R|0;return s&&e.unshift(s),e}function t(e,t,n,s){var r,i;if(n!=s)i=n>s?1:-1;else for(r=i=0;n>r;r++)if(e[r]!=t[r]){i=e[r]>t[r]?1:-1;break}return i}function n(e,t,n){for(var s=0;n--;)e[n]-=s,s=e[n]<t[n]?1:0,e[n]=s*R+e[n]-t[n];for(;!e[0]&&e.length>1;)e.shift()}return function(s,r,i,o){var a,l,d,c,f,p,m,g,y,b,w,v,x,E,O,S,T,U,_=s.constructor,k=s.s==r.s?1:-1,q=s.d,M=r.d;if(!s.s)return new _(s);if(!r.s)throw Error(N+"Division by zero");for(l=s.e-r.e,T=M.length,O=q.length,g=(m=new _(k)).d=[],d=0;M[d]==(q[d]||0);)++d;if(M[d]>(q[d]||0)&&--l,0>(v=null==i?i=_.precision:o?i+(u(s)-u(r))+1:i))return new _(0);if(v=v/L+2|0,d=0,1==T)for(c=0,M=M[0],v++;(O>d||c)&&v--;d++)x=c*R+(q[d]||0),g[d]=x/M|0,c=x%M|0;else{for((c=R/(M[0]+1)|0)>1&&(M=e(M,c),q=e(q,c),T=M.length,O=q.length),E=T,b=(y=q.slice(0,T)).length;T>b;)y[b++]=0;(U=M.slice()).unshift(0),S=M[0],M[1]>=R/2&&++S;do{c=0,0>(a=t(M,y,T,b))?(w=y[0],T!=b&&(w=w*R+(y[1]||0)),(c=w/S|0)>1?(c>=R&&(c=R-1),1==(a=t(f=e(M,c),y,p=f.length,b=y.length))&&(c--,n(f,p>T?U:M,p))):(0==c&&(a=c=1),f=M.slice()),b>(p=f.length)&&f.unshift(0),n(y,f,b),-1==a&&(1>(a=t(M,y,T,b=y.length))&&(c++,n(y,b>T?U:M,b))),b=y.length):0===a&&(c++,y=[0]),g[d++]=c,a&&y[0]?y[b++]=q[E]||0:(y=[q[E]],b=1)}while((E++<O||void 0!==y[0])&&v--)}return g[0]||g.shift(),m.e=l,h(m,o?i+u(m)+1:i)}}();x=function e(t){function n(e){var t=this;if(!(t instanceof n))return new n(e);if(t.constructor=n,e instanceof n)return t.s=e.s,t.e=e.e,void(t.d=(e=e.d)?e.slice():e);if("number"==typeof e){if(0*e!=0)throw Error(O+e);if(e>0)t.s=1;else{if(!(0>e))return t.s=0,t.e=0,void(t.d=[0]);e=-e,t.s=-1}return e===~~e&&1e7>e?(t.e=0,void(t.d=[e])):p(t,e.toString())}if("string"!=typeof e)throw Error(O+e);if(45===e.charCodeAt(0)?(e=e.slice(1),t.s=-1):t.s=1,!_.test(e))throw Error(O+e);p(t,e)}var s,r,i;if(n.prototype=M,n.ROUND_UP=0,n.ROUND_DOWN=1,n.ROUND_CEIL=2,n.ROUND_FLOOR=3,n.ROUND_HALF_UP=4,n.ROUND_HALF_DOWN=5,n.ROUND_HALF_EVEN=6,n.ROUND_HALF_CEIL=7,n.ROUND_HALF_FLOOR=8,n.clone=e,n.config=n.set=b,void 0===t&&(t={}),t)for(i=["precision","rounding","toExpNeg","toExpPos","LN10"],s=0;s<i.length;)t.hasOwnProperty(r=i[s++])||(t[r]=this[r]);return n.config(t),n}(x),w=new x(1),void 0===(s=function(){return x}.call(t,n,t,e))||(e.exports=s)}()},function(e,t){t.DEFAULT_TEST_SYMBOLS=["bch","dummy","eth","flo","ark","btc","burst","dash","dgb","etc","lsk","ltc","nxt","omni","rise","shift","ubq","waves","xcp","xem","xrp","zec","mock.btc","eth.xhy","waves.xhy","nxt.xhy","omni.xhy","xcp.xhy","xem.xhy"]},function(e,t){let n="http://localhost:1111/";function s(e,t){t||(t=window.location.href),e=e.replace(/[[\]]/g,"\\$&");const n=new RegExp("[?&]"+e.toLowerCase()+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}t.go=function(e,t){return function(){const r=s("symbol"),i=new Hybrix.Interface({XMLHttpRequest:XMLHttpRequest});DEBUG="true"===s("debug"),s("host")&&(n=s("host"));e.runTests(r,i,n,e=>{document.body.innerHTML=t.web(e)},e=>{document.body.innerHTML='<div style="border-style:solid; border-width:1px; border-radius:10px; height:20px;"><div style="text-align:center;color:white;background-color:blue; border-radius:10px; height:20px; width:'+100*e+'%">'+Math.floor(100*e)+"%</div></div>"})}}}]);