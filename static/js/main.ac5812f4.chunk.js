(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(3),l=r.n(o);r(13),r(14);const i=async e=>{try{const r=await(async()=>{try{const t=await fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b4431777018d4b3fb78f72e1081a14a5&symbols=JPY");if(!t.ok)throw new Error("API request failed");const r=await t.json();return Number(r.rates.JPY)}catch(e){throw console.error(e),new Error("Error fetching the exchange rate.")}})();if(!r)throw new Error("Rate is undefined or invalid.");const n=100,a=(e+49)/(1-.044)/r*(1+.1*Math.max(0,(r-n)/n));return[parseFloat(a.toFixed(2)),r]}catch(t){throw console.error("Error in calculatePriceWithCurrencyRates:",t),t}},c={container:{fontFamily:"'Arial', sans-serif",maxWidth:"600px",margin:"0 auto",padding:"20px",textAlign:"center",backgroundColor:"#FFFFFF",borderRadius:"10px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},title:{fontSize:"35px",color:"#2B3BFF",marginBottom:"20px",fontWeight:"bold",fontFamily:"Poppins, sans-serif"},inputContainer:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",marginBottom:"20px"},label:{fontSize:"16px",color:"#555"},inputBox:{width:"100%",maxWidth:"300px",padding:"10px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"16px",marginTop:"5px"},button:{padding:"10px 20px",backgroundColor:"#5bb450",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"16px",transition:"background-color 0.3s"},resultBox:{marginTop:"20px",padding:"10px",backgroundColor:"#e6ffe6",borderRadius:"8px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)"},errorBox:{marginTop:"20px",padding:"10px",backgroundColor:"#ffe6e6",borderRadius:"8px",color:"#d9534f"},buttonHover:{backgroundColor:"#0056b3"}};var s=()=>{const[e,t]=Object(n.useState)(""),[r,o]=Object(n.useState)(null),[l,s]=Object(n.useState)(null),[u,p]=Object(n.useState)("");return a.a.createElement("div",null,a.a.createElement("div",{style:c.container},a.a.createElement("h1",{style:c.title},"Currency Conversion Calculator"),a.a.createElement("div",{style:c.inputContainer},a.a.createElement("label",{style:c.label},"\u5024\u6bb5\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044:",a.a.createElement("input",{type:"number",value:e,onChange:e=>t(e.target.value),placeholder:"\u4f8b: 44000",style:c.inputBox}),a.a.createElement("span",{style:c.inputLabel},a.a.createElement("b",null,"JPY"))),a.a.createElement("button",{onClick:async()=>{s(null),o(null);try{if(!e.trim()||isNaN(Number(e)))return void s("Please enter a valid number for the fixed fee.");const t=await i(Number(e));o(t[0]),p(t[1]),console.log(u)}catch(l){s(l.message||"An error occurred.")}},style:c.button},"Calculate")),null!==r&&a.a.createElement("div",{style:c.resultBox},a.a.createElement("h2",null,"\u65b0\u3057\u3044\u5024\u6bb5: $",r),a.a.createElement("h2",null,"1 USD = \xa5",u)),l&&a.a.createElement("div",{style:c.errorBox},a.a.createElement("p",null,l))))};var u=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(s,null))};var p=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then(t=>{let{getCLS:r,getFID:n,getFCP:a,getLCP:o,getTTFB:l}=t;r(e),n(e),a(e),o(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null))),p()},4:function(e,t,r){e.exports=r(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.ac5812f4.chunk.js.map