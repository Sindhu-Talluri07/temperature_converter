const Celsius=document.querySelector("#Celsius"),
Faranheit=document.querySelector("#Faranheit");

window.addEventListener("load",()=>Celsius.focus());
Celsius.addEventListener("input",()=>{
    Faranheit.value=((Celsius.value*9)/5+32).toFixed(2);
    if(!Celsius.value) Faranheit.value="";
});
Faranheit.addEventListener("input",()=>{
    Celsius.value=(((Faranheit.value-32)*5)/9).toFixed(2);
    if(!Faranheit.value) Celsius.value="";
});

