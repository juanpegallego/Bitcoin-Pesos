const tenencia = document.getElementById('tenencia');
const dolarBlue = document.getElementById('dolarBlue');
const btcPrice = document.getElementById('btcPrice');
const apiUrlBtn = "https://api.coingecko.com/api/v3/coins/bitcoin" ;
const apiUrlDolar = "https://api.bluelytics.com.ar/v2/latest";
getDataBtn(),getDataBlue(),app();

function getDataBtn(){               
    fetch(apiUrlBtn)
        .then(response => {
            return response.json()
        })
        .then(data => {        
            btcPrice.value = data.market_data.current_price.usd ;        
        })
};
function getDataBlue(){               
    fetch(apiUrlDolar)
        .then(response => {
            return response.json()
        })
        .then(data => {        
            dolarBlue.value = data.blue.value_avg ;        
        })
};



function app(){
    document.getElementById('start').addEventListener('click', (e) => {
        console.log('starting')
        e.preventDefault();
        tenenciaBtc();
       
    })
} 




function tenenciaBtc(){
    
    let x= tenencia.value * dolarBlue.value * btcPrice.value;
    document.getElementById('resultado').innerHTML = "$" + x.toFixed(2) + ".-";
    
};


 




    
 