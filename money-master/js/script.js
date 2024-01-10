// ---------------- get input value -----------------

function getFieldValue(inputId){
    
    const input = document.getElementById(inputId);
    const inputNumber = parseFloat(input.value);
    return inputNumber;
}

//------------------totalExpence-------------------
function totalExpence(){

    const food = getFieldValue("food-id");
    const rent = getFieldValue("rent-id");
    const cloths = getFieldValue("cloth-id");

    const total = food+rent+cloths;
    return total;
}

// -----------------set the value-------------------
function SetValue(textId, newValue){

    const text = document.getElementById(textId);
    text.innerText = newValue;
}

// ----------------calculate btn event---------------

document.getElementById("calculate-btn").addEventListener("click", function(){

   const incomeValue = getFieldValue("income-id");
   const totalCost = totalExpence();
   const newBalance = incomeValue - totalCost;
   console.log(newBalance);

    SetValue("total-expense", totalCost)
    SetValue("balance", newBalance);

})
// -----------------save btn event -----------------

document.getElementById("save-id").addEventListener("click", function(){


    const percent = getFieldValue("save-percent");
    const income = getFieldValue("income-id");
    const saveAmount = income*(percent/100);

    const balance = document.getElementById("balance");
    const balNumber = parseFloat(balance.innerText);
    const remBalance = balNumber - saveAmount;

    SetValue("save-amt", saveAmount);
    SetValue("rem-bal", remBalance);




})

