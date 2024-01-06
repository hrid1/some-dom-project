console.log('helo console')


document.getElementById('btn-apply').addEventListener('click',function(){
    const coupon = document.getElementById('coupon');
    let couponValue = coupon.value;
    coupon.value = '';
    let price = document.getElementById('price');
    const priceNum = parseFloat(price.innerText);
    const discount = priceNum*(20/100);
    const discountPrice = priceNum - discount;
    if(couponValue === 'jk20'){
        price.innerText = discountPrice;
        console.log(couponValue, discountPrice);
    }
    else{
        alert("sorry discount");
    }
})