let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");

const relogio = setInterval(function time(){
    var date = new Date();

    let h = date.getHours();
    let min = date.getMinutes();
    let ss = date.getSeconds();

   if( h < 10) h = '0' + h;  

   if( min < 10) min = '0' + min;  

   if( ss < 10) ss = '0' + ss;  
        
    horas.innerText = h;
    minutos.innerText = min;
    segundos.innerText = ss;

    
    
})


