module.exports=function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=1)}([function(e,t){function s(e){return"string"==typeof e&&e.startsWith("valid")}function n(e,t,s){if(t.hasOwnProperty("factor")){const s=t.factor;return"string"==typeof e&&-1!==e.toString().indexOf(".")&&e.split(".")[1].length===Number(s)}return!1}function a(e){return void 0!==e&&null!==e}t.test=function(e){return"object"==typeof e&&null!==e},t.sample=function(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("address")&&e.hasOwnProperty("transaction")},t.details=function(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("symbol")&&e.hasOwnProperty("name")&&e.hasOwnProperty("fee")&&typeof e.hasOwnProperty("fee")&&e.hasOwnProperty("factor")&&e.hasOwnProperty("contract")&&e.hasOwnProperty("mode")&&e.hasOwnProperty("keygen-base")},t.sampleValid=s,t.sampleBalance=n,t.sampleUnspent=a,t.sampleHistory=function(e){return"object"==typeof e&&null!==e},t.sampleTransaction=function(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("id")&&e.hasOwnProperty("timestamp")&&e.hasOwnProperty("amount")&&e.hasOwnProperty("symbol")&&e.hasOwnProperty("fee")&&e.hasOwnProperty("source")&&e.hasOwnProperty("target")&&e.hasOwnProperty("confirmed")},t.seedValid=s,t.seedBalance=n,t.seedUnspent=a,t.seedSign=function(e){return"string"==typeof e},t.seedSignHash=function(e,t,s){if(s.hasOwnProperty("hash")){const t=s.hash;return e===t||"dynamic"===t&&"00000000"!==e}return!1}},function(e,t,s){const n=s(2),a=s(3).knownIssues,r=s(0),i=1e-5,d=["bch","dummy","eth","flo","ark","btc","burst","dash","dgb","etc","exp","lsk","ltc","nxt","omni","rise","shift","ubq","waves","xcp","xem","xrp","zec","mock.btc","eth.xhy","waves.xhy","nxt.xhy","omni.xhy","xcp.xhy","xem.xhy"],o=e=>({test:{data:e.test,step:"id"},sample:{data:e.sample,step:"id"},details:{data:e.details,step:"id"},sampleValid:{data:e.sampleValid,step:"id"},sampleBalance:{data:e.sampleBalance,step:"id"},sampleUnspent:{data:e.sampleUnspent,step:"id"},sampleHistory:{data:e.sampleHistory,step:"id"},sampleTransaction:{data:e.sampleTransaction,step:"id"},seedValid:{data:e.seedValid,step:"id"},seedBalance:{data:e.seedBalance,step:"id"},seedUnspent:{data:e.seedUnspent,step:"id"},seedSign:{data:e.seedSign,step:"id"},seedSignHash:{data:{data:e.seedSign},step:"hash"}}),l=Object.keys(o({}));function u(e){return{data:[{symbol:e},"addAsset",{sample:{data:{query:"/asset/"+e+"/sample"},step:"rout"},test:{data:{query:"/asset/"+e+"/test"},step:"rout"},details:{data:{query:"/asset/"+e+"/details"},step:"rout"},address:{data:{symbol:e},step:"getAddress"},publicKey:{data:{symbol:e},step:"getPublicKey"}},"parallel",t=>(void 0===t.sample&&(t.sample={}),void 0===t.details&&(t.details={}),void 0===t.test&&(t.test={}),{sample:{data:t.sample,step:"id"},test:{data:t.test,step:"id"},details:{data:t.details,step:"id"},address:{data:t.address,step:"id"},sampleValid:{data:{query:"/asset/"+e+"/validate/"+t.sample.address},step:"rout"},sampleBalance:{data:{query:"/asset/"+e+"/balance/"+t.sample.address},step:"rout"},sampleUnspent:{data:{query:"/asset/"+e+"/unspent/"+t.sample.address+"/"+(Number(i)+Number(t.details.fee))+"/"+t.address+"/"+t.sample.publicKey},step:"rout"},sampleHistory:{data:{query:"/asset/"+e+"/history/"+t.sample.address},step:"rout"},sampleTransaction:{data:{query:"/asset/"+e+"/transaction/"+t.sample.transaction},step:"rout"},seedValid:{data:{query:"/asset/"+e+"/validate/"+t.address},step:"rout"},seedBalance:{data:{query:"/asset/"+e+"/balance/"+t.address},step:"rout"},seedUnspent:{data:{query:"/asset/"+e+"/unspent/"+t.address+"/"+(Number(i)+Number(t.details.fee))+"/"+t.sample.address+"/"+t.publicKey},step:"rout"}}),"parallel",t=>({test:{data:t.test,step:"id"},sample:{data:t.sample,step:"id"},details:{data:t.details,step:"id"},sampleValid:{data:t.sampleValid+" "+t.sample.address,step:"id"},sampleBalance:{data:t.sampleBalance,step:"id"},sampleUnspent:{data:t.sampleUnspent,step:"id"},sampleHistory:{data:t.sampleHistory,step:"id"},sampleTransaction:{data:t.sampleTransaction,step:"id"},seedValid:{data:t.seedValid+" "+t.address,step:"id"},seedBalance:{data:t.seedBalance,step:"id"},seedUnspent:{data:t.seedUnspent,step:"id"},seedSign:{data:{symbol:e,amount:i,target:t.sample.address,validate:!1,unspent:t.test.hasOwnProperty("unspent")?t.test.unspent:t.seedUnspent,time:t.test.time},step:"rawTransaction"}}),"parallel",o,"parallel"],step:"sequential"}}const p=e=>t=>{const s={};let n=0,i=0;for(let d in t)if(s[d]={},e.includes(d)){const e=t[d].details,o=t[d].test;for(let l in t[d]){const u=t[d][l];if(r.hasOwnProperty(l)){const n=r[l](t[d][l],e,o);let p;n||(++i,p=a[d+"_"+l]),s[d][l]={valid:n,known:p,result:u,messages:["TODO"]}}else{const e=a[d+"_"+l];s[d][l]={valid:!1,known:e,result:u,messages:["No validation available"]},++i}++n}}else for(let e of l){const t=a[d+"_"+e];s[d][e]={valid:!1,known:t,result:null,messages:["Asset not available"]},++n,++i}const d={assets:{},total:n,failures:i};return Object.keys(s).sort().forEach(e=>{d.assets[e]=s[e]}),d};t.runTests=function(e,t,s,n,a){const r={};e=e&&"*"!==e?e.split(","):d;for(let t of e)r[t]=u(t);t.sequential(["init",{username:"POMEW4B5XACN3ZCX",password:"TVZS7LODA5CSGP6U"},"session",{host:s},"addHost",r,"parallel",p(e)],n,e=>{console.error(e)},a)},t.xml=n.xml,t.web=n.web,t.json=n.json,t.cli=n.cli},function(e,t,s){s(0);const n=(e,t,s,n,a)=>{const r=[];for(let i in s){const d=s[i],o=d.valid,l=d.known,u=d.result,p=(s.messages,e(t,i,o,l,u,n,a));r.push(p)}return r},a=(e,t,s,n,a,r,i)=>{if(n)return s?(n.link?r.push("[36m"+e+" "+t+"[0m : "+n.message):r.push("[36m"+e+" "+t+"[0m : "+n.message+" [31m [Create issue][0m"),"[36m OK [0m"):(n.link?r.push("[33m"+e+" "+t+"[0m : "+n.message):r.push("[33m"+e+" "+t+"[0m : "+n.message+" [31m [Create issue][0m"),"[33mWARN[0m");if(s)return"[32m OK [0m";{let s;return s=(s="object"==typeof data?JSON.stringify(a):String(a)).replace(/"/g,""),i.push("[31m"+e+" "+t+"[0m : returned "+s+" [31m [Create issue][0m"),"[31mFAIL[0m"}};function r(e,t,s,n){const a=s&&s.message?s.message:"returned "+n;return`https://gitlab.com/hybrix/hybrixd/node/issues/new?issue[description]=${encodeURIComponent(`/label ~"\\* Development Team \\*"\n/milestone %"DEV - asset maintenance - 2020-Q1"\n${a}`)}&issue[title]=${encodeURIComponent(e+" "+t+" "+a)}`}const i=(e,t,s,n,a,i,d)=>{let o;return o=(o="object"==typeof a?JSON.stringify(a):String(a)).replace(/"/g,""),n?s?(n.link?i.push('<b style="color:purple;">'+e+" "+t+'</b> : <a  name="'+e+"_"+t+'" target="_blank" href="'+n.link+'">'+n.message+"</a>"):i.push('<b style="color:purple;">'+e+" "+t+'</b> : <a name="'+e+"_"+t+'">'+n.message+' </a><a style="color:red;"target="_blank" href="'+r(e,t,n,n.message)+'"><b>Create issue</b></a>'),'<td style="text-align:center;background-color:purple" title="'+o+'"><a style="text-decoration:none; width: 100%;height: 100%;display: block;" href="#'+e+"_"+t+'">&nbsp;</a></td>'):(n.link?i.push('<b style="color:orange;">'+e+" "+t+'</b> : <a  name="'+e+"_"+t+'" target="_blank" href="'+n.link+'">'+n.message+"</a>"):i.push('<b style="color:orange;">'+e+" "+t+'</b> : <a name="'+e+"_"+t+'">'+n.message+' </a><a style="color:red;"target="_blank" href="'+r(e,t,n,n.message)+'"><b>Create issue</b></a>'),'<td style="text-align:center;background-color:orange" title="'+o+'"><a style="text-decoration:none; width: 100%;height: 100%;display: block;" href="#'+e+"_"+t+'">&nbsp;</a></td>'):s?'<td style="text-align:center;background-color:green" title="'+o+'">&nbsp;</td>':(d.push('<b style="color:red;">'+e+" "+t+"</b> : returned "+o+' <a  name="'+e+"_"+t+'" style="color:red;"target="_blank" href="'+r(e,t,void 0,o)+'"><b>Create issue</b></a>'),'<td style="text-align:center;background-color:red"  title="'+o+'"><a style="text-decoration:none; width: 100%;height: 100%;display: block;" href="#'+e+"_"+t+'">&nbsp;</a></td>')},d=(e,t,s,n,a,r,i)=>{let d;d=(d="object"==typeof a?JSON.stringify(a):String(a)).replace(/"/g,'\\"');let o=`<testcase id="${e+"_"+t}" name="${e+" "+t}" time="0.001">`;return s||(o+=`<failure message="${d}" type="ERROR"></failure>`),o+="</testcase>"};t.xml=(e=>{const t=[],s=[];let a="";for(let r in e.assets)a=n(d,r,e.assets[r],t,s).join("");return a='<?xml version="1.0" encoding="UTF-8" ?><testsuites id="hybrix" name="hybrix" tests="'+e.total+'" failures="'+e.failures+'" time="0.001"><testsuite id="testsuite.hybrix" name="hybrix" tests="'+e.total+'" failures="'+e.failures+'" time="0.001">'+a,a+="</testsuite></testsuites>"}),t.json=(e=>JSON.stringify(e)),t.cli=(e=>{const t=[],s=[];let r="\n";r+="   #   SAMPLE                                    GENERATED                    \n",r+="      ┌────┬──────┬─────┬────┬──────┬──────┬────┬────┬────┬──────┬──────┬────┬────┐\n",r+="      │Test│Detail│Sampl│Vald│Balnce│Unspnt│Hist│Tran│Vald│Balnce│Unspnt│Sign│Hash│\n";for(let i in e.assets){r+="      ├────┼──────┼─────┼────┼──────┼──────┼────┼────┼────┼──────┼──────┼────┼────┤\n",r+=i.substr(0,5)+"     ".substr(0,5-i.length)+" │";const d=n(a,i,e.assets[i],t,s);r+=d[0]+"│",r+=" "+d[1]+" │",r+=d[2]+" │",r+=d[3]+"│",r+=" "+d[4]+" │",r+=" "+d[5]+" │",r+=d[6]+"│",r+=d[7]+"│",r+=d[8]+"│",r+=" "+d[9]+" │",r+=" "+d[10]+" │",r+=d[11]+"│",r+=d[12]+"│",r+="\n"}r+="      └────┴──────┴─────┴────┴──────┴──────┴────┴────┴────┴──────┴──────┴────┴────┘\n",r+="\n",r+="New Issues:\n",s.sort();for(let e=0;e<s.length;++e)r+=" - "+s[e]+"\n";r+="\n",r+="Known Issues:\n",t.sort();for(let e=0;e<t.length;++e)r+=" - "+t[e]+"\n";return r+="\n",r+="      SUCCESS RATE: "+Math.floor(100*((e.total-e.failures)/e.total||0))+"%\n"}),t.web=(e=>{const t=[],s=[];let a='\n<style>\n:target {\n background-color: yellow;\n}\n</style>\n<table><tr><td>Symbol</td><td colspan="2"></td><td colspan="7" style="text-align:center;">Sample</td><td colspan="5"  style="text-align:center;">Generated</td></tr>';a+="<tr><td></td><td>Test</td><td>Details</td><td>Sample</td><td>Valid</td><td>Balance</td><td>Unspent</td>",a+="<td>History</td>",a+="<td>Transaction</td>",a+="<td>Valid</td><td>Balance</td><td>Unspent</td>",a+="<td>Sign</td><td>Hash</td></tr>";for(let r in e.assets)a+="<tr>",a+="<td>"+r+"</td>",a+=n(i,r,e.assets[r],t,s).join(""),a+="</tr>";a+="</table>",a+="<h3>New Issues</h3>",a+="<ul>",s.sort();for(let e=0;e<s.length;++e)a+="<li>"+s[e]+"</li>";a+="</ul>",a+='<h3><a href="https://gitlab.com/groups/hybrix/-/issues?milestone_title=Coin+support+%3A+Test+Issues" target="_blank">Known Issues</a></h3>',a+="<ul>",t.sort();for(let e=0;e<t.length;++e)a+="<li>"+t[e]+"</li>";return a+="</ul>",a+="<h1>"+(e.total-e.failures)/e.total*100+"%</h1>"})},function(e,t){const s={},n="https://gitlab.com/hybrix/hybrixd/node/issues/";[["bch_seedSign","Not yet functioning. Perhaps funds missing for test","1033"],["bch_seedSignHash","Not yet functioning. Perhaps funds missing for test","1034"],["bch_sampleBalance","returned undefined","995"],["bch_sampleHistory","returned undefined","996"],["bch_sampleTransaction","returned undefined","997"],["bch_sampleUnspent","returned undefined","998"],["bch_seedBalance","returned undefined","1016"],["bch_seedUnspent","returned undefined","999"],["bch_sampleValid","returned undefined","1026"],["btc_seedSignHash","Signing still holds a dynamic componement","1035"],["burst_seedUnspent","Not yet functioning. Perhaps funds missing for test","1038"],["burst_seedSign","Not yet functioning. Perhaps funds missing for test","1036"],["burst_seedSignHash","Not yet functioning. Perhaps funds missing for test / Signing still holds a dynamic componement","1037"],["dash_seedSign","Unstable host. Should work","1039"],["dash_seedSignHash","Unstable host. Should work","1040"],["dash_seedBalance","returned undefined","1018"],["dash_seedUnspent","returned undefined","1022"],["dash_sampleTransaction","Malfunction",""],["dash_sampleHistory","Unstable host. Should work","1060"],["dash_sampleBalance","returned undefined","1021"],["dash_sampleUnspent","returned undefined","1025"],["dgb_sampleHistory","Not yet functioning","1041"],["dgb_seedSign","Not yet functioning. Perhaps funds missing for test","1042"],["dgb_seedSignHash","Not yet functioning. Perhaps funds missing for test","1043"],["dgb_sampleUnspent","returned undefined","1000"],["dgb_seedUnspent","returned undefined","1001"],["etc_sampleHistory","Not yet functioning","1023"],["etc_sampleBalance","Not yet functioning","1024"],["etc_seedBalance","returned undefined","699"],["eth.xhy_sampleHistory","Eth token history not yet supported","701"],["eth.xhy_sampleBalance","returned undefined","1002"],["eth.xhy_seedBalance","returned undefined","1003"],["exp_sampleHistory","Not yet functioning","1044"],["exp_seedSignHash","returned 49AFC302","1004"],["flo_seedSign","Not yet functioning. Perhaps funds missing for test","1045"],["flo_seedSignHash","Not yet functioning. Perhaps funds missing for test","1046"],["flo_seedUnspent","returned undefined","1005"],["flo_sampleTransaction","returned undefined","1056"],["ltc_sampleHistory","returned undefined","1006"],["ltc_sampleBalance","returned undefined","1057"],["ltc_sampleUnspent","returned undefined","1058"],["ltc_seedBalance","returned undefined","1027"],["ltc_seedSign","returned undefined","1028"],["ltc_seedSignHash","returned undefined","1029"],["ltc_seedUnspent","returned undefined","1030"],["ltc_sampleTransaction","Not yet functioning","1061"],["mock.btc_sampleTransaction","returned unknown transaction2","1007"],["nxt_seedSignHash","Signing still holds a dynamic componement",""],["nxt_sampleHistory","returned valid","1017"],["nxt.xhy_seedSignHash","Signing still holds a dynamic componement",""],["nxt.xhy_seedSign","returned null","1008"],["omni_seedSignHash","Not yet functioning. Perhaps funds missing for test","1047"],["omni_sampleHistory","returned math calculation error","1009"],["omni.xhy_seedSignHash","Not yet functioning. Perhaps funds missing for test","1048"],["omni.xhy_sampleHistory","returned math calculation error","1010"],["ubq_sampleHistory","Not yet functioning","697"],["ubq_seedSignHash","returned 1149D33D","1011"],["rise_sampleTransaction","Not yet functioning","885"],["rise_sampleHistory","returned undefined","1059"],["shift_sampleTransaction","Not yet functioning","885"],["xcp_seedSignHash","Signing still holds a dynamic componement","1049"],["xcp_sampleTransaction","Missing data for source,dest,amount, fee","705"],["xcp_sampleHistory","returned undefined","1019"],["xcp.xhy_sampleTransaction","Missing data for source,dest,amount, fee","705"],["xcp.xhy_sampleHistory","returned undefined","1054"],["xcp.xhy_sampleBalance","returned undefined","1055"],["xcp.xhy_seedSignHash","Signing still holds a dynamic componement","1050"],["xem_sampleHistory","returned undefined","1012"],["xem.xhy_sampleHistory","returned undefined","1013"],["xrp_seedSignHash","Signing still holds a dynamic componement","1051"],["xrp_sampleHistory","returned undefined","1014"],["zec_seedSign","Not yet functioning. Perhaps funds missing for test","1052"],["zec_seedSignHash","Not yet functioning. Perhaps funds missing for test","1053"],["zec_sampleHistory","Unstable","702"]].map(function(e){s[e[0]]={message:e[1],link:""===e[2]?"":n+e[2]}}),t.knownIssues=s}]);