(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),l=n.n(o);n(13),n(14);const i=async(e,t)=>{try{const r=await(async()=>{try{const t=await fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b4431777018d4b3fb78f72e1081a14a5&symbols=JPY");if(!t.ok)throw new Error("API request failed");const n=await t.json();return Number(n.rates.JPY)}catch(e){throw console.error(e),new Error("Error fetching the exchange rate.")}})();if(!r)throw new Error("Rate is undefined or invalid.");const a=100,o=49,l=.044,i=(t+o)/(1-l)/r,c=(e+o)/(1-l)/r*(1+.15*Math.max(0,(r-a)/a)),s=c+i;return console.log(c),console.log(i),[parseFloat(s.toFixed(2)),r]}catch(n){throw console.error("Error in calculatePriceWithCurrencyRates:",n),n}},c={container:{fontFamily:"'Arial', sans-serif",maxWidth:"600px",margin:"0 auto",padding:"20px",textAlign:"center",backgroundColor:"#FFFFFF",borderRadius:"10px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},title:{fontSize:"35px",color:"#B53737",marginBottom:"20px",fontWeight:"bold",fontFamily:"Poppins, sans-serif"},inputContainer:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",marginBottom:"20px"},label:{fontSize:"16px",color:"#555"},inputBox:{width:"100%",maxWidth:"300px",padding:"10px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"16px",marginTop:"5px"},button:{padding:"10px 20px",backgroundColor:"#5bb450",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"16px",transition:"background-color 0.3s"},resultBox:{marginTop:"20px",padding:"10px",backgroundColor:"#e6ffe6",borderRadius:"8px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)"},errorBox:{marginTop:"20px",padding:"10px",backgroundColor:"#ffe6e6",borderRadius:"8px",color:"#d9534f"},buttonHover:{backgroundColor:"#0056b3"}};var s=()=>{const[e,t]=Object(r.useState)(""),[n,o]=Object(r.useState)(""),[l,s]=Object(r.useState)(null),[u,p]=Object(r.useState)(null),[d,b]=Object(r.useState)("");return a.a.createElement("div",null,a.a.createElement("div",{style:c.container},a.a.createElement("h1",{style:c.title},"\u30ab\u30cd\u30cf\u30c1\u7c73\u56fd\u4fa1\u683c\u8a08\u7b97\u6a5f"),a.a.createElement("div",{style:c.inputContainer},a.a.createElement("label",{style:c.label},"\u9001\u6599\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044:",a.a.createElement("input",{type:"number",value:n,onChange:e=>o(e.target.value),placeholder:"\u4f8b: 4400",style:c.inputBox}),a.a.createElement("span",{style:c.inputLabel},a.a.createElement("b",null,"JPY"))),a.a.createElement("label",{style:c.label},"\u5024\u6bb5\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044:",a.a.createElement("input",{type:"number",value:e,onChange:e=>t(e.target.value),placeholder:"\u4f8b: 44000",style:c.inputBox}),a.a.createElement("span",{style:c.inputLabel},a.a.createElement("b",null,"JPY"))),a.a.createElement("button",{onClick:async()=>{p(null),s(null);try{if(!e.trim()||isNaN(Number(e)))return void p("Please enter a valid number for the fixed fee.");const t=await i(Number(e),Number(n));s(t[0]),b(t[1]),console.log(d)}catch(u){p(u.message||"An error occurred.")}},style:c.button},"\u8a08\u7b97")),null!==l&&a.a.createElement("div",{style:c.resultBox},a.a.createElement("h2",null,"\u65b0\u3057\u3044\u5024\u6bb5: $",l),a.a.createElement("h2",null,"(1 USD = \xa5",d,")")),u&&a.a.createElement("div",{style:c.errorBox},a.a.createElement("p",null,u))))};var u=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(s,null))};var p=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then(t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:o,getTTFB:l}=t;n(e),r(e),a(e),o(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null))),p()},4:function(e,t,n){e.exports=n(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.c48206da.chunk.js.map