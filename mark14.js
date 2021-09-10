const intialPrice = document.querySelector('#Intial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const submitBtn = document.querySelector('#submit-btn');
const outputBox =document.querySelector('#output-box');


submitBtn.addEventListener('click', function submitHandler(){
    let ip = Number(intialPrice.value);
    let qty = Number(stocksQuantity.value);
    let curr = Number(currentPrice.value);

    calcuateProfiteAndLoss(ip, qty , curr);
})

function calcuateProfiteAndLoss(intial, quantity,current) {
    if (intial > current) {
        let loss = (intial - current) * quantity;
        let lossPercentage = (loss/intial) * 100;

        outputBox.innerText =   `hey the loss is ${loss} and the percentage is ${lossPercentage}%`

    }else if(current > intial) {
        let profit =(current -intial)*quantity;
        let profitPercentage = (profit / intial)*100;
      outputBox.innerText = `hey the profit is ${profit} and the percentage is ${profitPercentage}%`
    }else {
        outputBox.innerText= `no pain no gain and no gain no pain`;
    }
}