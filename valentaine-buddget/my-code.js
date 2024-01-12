
function totalAmount(itemPriceId, itemQuantityId){

        const item = document.getElementById(itemPriceId);
        const itemPrice = parseFloat(item.innerText);

        const itemQuantity = document.getElementById(itemQuantityId);
        const itemQuantityNumber = parseFloat(itemQuantity.value);
        itemQuantity.value = "";
        
        totalPrice = itemPrice * itemQuantityNumber;
        return totalPrice;
}

// -------------set-every-item-total-price------------

function setItemPrice(itemId, price){
    const product = document.getElementById(itemId);
    product.innerText = price;
}

// ------------get-every-item-total-price-----------
function getItemPrice(itemId){
    const price = document.getElementById(itemId);
    const priceNumber = parseFloat(price.innerText);
    return priceNumber;
}

//---------------Update-total-price-----------------
function updateTotalPrice(totalId, itemPrice){

    const totalPrice = document.getElementById(totalId);
    const totalPriceNum = parseFloat(totalPrice.innerText);
    const NewPrice = totalPriceNum + itemPrice;

    setItemPrice(totalId, NewPrice);
}
//---------------------------------------------------------
document.getElementById("kitkat-buy-btn").addEventListener('click', function(){
    kitkatTotalPrice = totalAmount("kitkat-price", "kitkat-quantity");
    setItemPrice("chocolate", kitkatTotalPrice); 

    updateTotalPrice("total", kitkatTotalPrice);   
})

document.getElementById("rose-buy-btn").addEventListener('click', function(){
    roseTotalPrice = totalAmount("rose-price", "rose-quantity");
    setItemPrice("rose", roseTotalPrice);

    updateTotalPrice("total", roseTotalPrice);
})
document.getElementById("diary-buy-btn").addEventListener('click', function(){
    diaryTotalPrice = totalAmount("diary-price", "diary-quantity");
    setItemPrice("diary", diaryTotalPrice);

    updateTotalPrice("total", diaryTotalPrice);
})

function handlePromoCode(){
    const promoCode = document.getElementById("promo-code");
    const promoCodeValue = promoCode.value;
    console.log(promoCodeValue);

    const oldPrice = getItemPrice('total');
    console.log(oldPrice);

    if(promoCodeValue == "101"){
        const discount = oldPrice * 0.1
        const newPrice = oldPrice - discount
        setItemPrice("all-total", newPrice);

    }
    else{
        alert("Wrong PromoCode !!!")
    }
}