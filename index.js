
// plus increament


function increasePhoneCount(){
    const phoneCountElement = document.querySelector("#phone-count");
    const phoneCount=  phoneCountElement.value;
    const newPhoneCount= parseInt(phoneCount)+1;
    phoneCountElement.value = newPhoneCount
    updatePhonePrice()
    
}
function decreasePhoneCount(){
    const phoneCountElement = document.querySelector("#phone-count");
    const phoneCount=  phoneCountElement.value;
    const newPhoneCount= parseFloat(phoneCount)-1;
    phoneCountElement.value = newPhoneCount;
    updatePhonePrice()
    
}
function updatePhonePrice(){
    const phoneCountElement = document.querySelector("#phone-count");
    const phonePrice=  phoneCountElement.value;
    const phonePriceNumber= parseInt(phonePrice) * 1278;
    const totalPhonePrice = document.querySelector("#totalPhonePrice");
    totalPhonePrice.innerText =phonePriceNumber;
    totalAmount()


}

function increaseCasingCount(){
    const increaseCount= document.querySelector("#cassing");
    const increaseValue= increaseCount.value;
    const increaseValueNumber= parseInt(increaseValue)+1;
    increaseCount.value = increaseValueNumber;
    increasevalueUpdate()
}
function decreaseCasingCount(){
    const increaseCount= document.querySelector("#cassing");
    const increaseValue= increaseCount.value;
    const increaseValueNumber= parseInt(increaseValue)-1;
    increaseCount.value = increaseValueNumber;
    
    increasevalueUpdate()
    
}
function increasevalueUpdate(){
    const increaseCount1= document.querySelector("#cassing");
    const increaseValue1= increaseCount1.value;
    const increaseValueNumber1= parseInt(increaseValue1)*59;
   const totalCassingPrice = document.querySelector("#totalCassingPrice");
   totalCassingPrice.innerText = increaseValueNumber1
   totalAmount()
}

function totalAmount(){
    const totalPrice = document.querySelector("#phone-count").value;
    const totalCassing = document.querySelector("#cassing").value;
    const totalPricPhone = parseInt(totalPrice)*1278+parseInt(totalCassing)*59;

    const tax = (totalPricPhone/100*10).toFixed(2);
    const grandAmount = totalPricPhone+parseFloat(tax);

    document.querySelector("#total-price").innerText = totalPricPhone;
    document.querySelector("#tax-amount").innerText = tax;
    document.querySelector("#grand-total").innerText = grandAmount
 

} 