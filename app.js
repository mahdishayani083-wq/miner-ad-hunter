const sampleAds=[
{title:"فروش دستگاه ماینر WhatsMiner M30S",model:"M30S",status:"کارکرده",price:125000000,currency:"تومان",city:"تهران"},
{title:"ماینر M30S+ سالم و آماده کار",model:"M30S+",status:"کارکرده",price:138000000,currency:"تومان",city:"مشهد"},
{title:"دستگاه M30S++ بدون قیمت",model:"M30S++",status:"کارکرده",price:null,currency:"تومان",city:"اصفهان"},
{title:"ماینر نو M30S++",model:"M30S++",status:"نو",price:1650000000,currency:"ریال",city:"تبریز"},
{title:"فروش فوری M30S",model:"M30S",status:"کارکرده",price:0,currency:"تومان",city:"کرج"},
{title:"WhatsMiner M30S+ تمیز",model:"M30S+",status:"نو",price:145000000,currency:"تومان",city:"شیراز"}
];
const $=id=>document.getElementById(id);
function money(ad){if(ad.price===null||ad.price===0)return "استعلام شود";return ad.price.toLocaleString("fa-IR")+" "+ad.currency}
function render(){const q=$("search").value.trim().toLocaleLowerCase();const model=$("model").value,status=$("status").value,currency=$("currency").value;
const rows=sampleAds.filter(a=>(!q||(a.title+" "+a.city).toLocaleLowerCase().includes(q))&&(!model||a.model===model)&&(!status||a.status===status)&&(!currency||a.currency===currency));
$("total").textContent=rows.length.toLocaleString("fa-IR");$("priced").textContent=rows.filter(a=>a.price!==null&&a.price!==0).length.toLocaleString("fa-IR");$("unpriced").textContent=rows.filter(a=>a.price===null||a.price===0).length.toLocaleString("fa-IR");
$("ads").innerHTML=rows.length?rows.map(a=>"<tr><td>"+a.title+"</td><td>"+a.model+"</td><td>"+a.status+"</td><td>"+money(a)+"</td><td>"+a.city+"</td></tr>").join(""):'<tr><td colspan="5">موردی پیدا نشد.</td></tr>'}
["search","model","status","currency"].forEach(id=>$(id).addEventListener(id==="search"?"input":"change",render));render();