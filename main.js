const tenencia = document.getElementById('tenencia');
const dolarBlue = document.getElementById('dolarBlue');
const btcPrice = document.getElementById('btcPrice');
const apiUrlBtn = "https://api.coingecko.com/api/v3/coins/bitcoin" ;
const apiUrlDolar = "https://api.bluelytics.com.ar/v2/latest";
getDataBtn(),getDataBlue(), onChange('tenencia'); 

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



function onChange(x){
    const target = document.getElementById(x)
    target.addEventListener('change', () => {        
        tenenciaBtc();       
}) 
}



function tenenciaBtc(){    
    let x = tenencia.value * dolarBlue.value * btcPrice.value;
    let finalResult = `$ ${x.toFixed(2)}.-`
    document.getElementById('resultado').placeholder = finalResult;
    
};


function modifyInputs(){
    dolarBlue.removeAttribute('readonly');
    btcPrice.removeAttribute('readonly' );
    dolarBlue.removeAttribute('disabled');
    btcPrice.removeAttribute('disabled');
    dolarBlue.style.boxShadow = '0px 0px 10px 1px white';
    btcPrice.style.boxShadow = '0px 0px 10px 1px white';
    onChange('dolarBlue');
    onChange('btcPrice');
} 




    
 