(() => {
"use strict";
function valid(n){return Number.isSafeInteger(n)&&n>0;}
function step(n){if(!valid(n))throw Error("正の整数を入力してください。");return n%2===0?n/2:3*n+1;}
function sequence(start,limit){if(!valid(start))throw Error("初期値は1以上の整数にしてください。");if(!Number.isSafeInteger(limit)||limit<1)throw Error("最大ステップ数は1以上の整数にしてください。");let a=[start],n=start;for(let i=0;i<limit&&n!==1;i++){n=step(n);if(!Number.isSafeInteger(n))throw Error("数値が安全な整数範囲を超えました。");a.push(n);}return a;}
function calc(n,limit){const s=sequence(n,limit),one=s[s.length-1]===1;return {start:n,sequence:s,steps:one?s.length-1:null,maximum:Math.max(...s),reachesOne:one};}
function limit(){const n=Number(document.querySelector("#maxSteps").value);if(!Number.isSafeInteger(n)||n<1)throw Error("最大ステップ数を正しく入力してください。");return n;}
function render(r){document.querySelector("#summary").innerHTML=`<div class="metric"><small>初期値</small><strong>${r.start}</strong></div><div class="metric"><small>停止時間</small><strong>${r.steps===null?"未到達":r.steps}</strong></div><div class="metric"><small>最大値</small><strong>${r.maximum}</strong></div><div class="metric"><small>1到達</small><strong>${r.reachesOne?"はい":"いいえ"}</strong></div>`;document.querySelector("#output").textContent=r.sequence.join(" → ");}
document.querySelector("#calculate").onclick=()=>{try{render(calc(Number(document.querySelector("#number").value),limit()));}catch(e){document.querySelector("#summary").textContent="";document.querySelector("#output").textContent="エラー: "+e.message;}};
document.querySelector("#clear").onclick=()=>{document.querySelector("#summary").textContent="";document.querySelector("#output").textContent="ここに計算結果が表示されます。";};
document.querySelector("#batchCalculate").onclick=()=>{const t=document.querySelector("#batchResults");t.innerHTML="";try{const xs=document.querySelector("#batch").value.split(",").map(x=>Number(x.trim())).filter(Number.isFinite),m=limit();if(!xs.length)throw Error("計算する整数を入力してください。");for(const n of xs){const r=calc(n,m),row=document.createElement("tr");row.innerHTML=`<td>${r.start}</td><td>${r.steps===null?"未到達":r.steps}</td><td>${r.maximum}</td><td>${r.reachesOne?"はい":"いいえ"}</td>`;t.appendChild(row);}}catch(e){t.innerHTML=`<tr><td colspan="4">エラー: ${e.message}</td></tr>`;}};
})();
