console.log("This is connected!")

// random-number



document.getElementById("gen-btn").addEventListener('click',function(){
    console.log("pin clicked");

    const randomNumber = (Math.random()+1)*1000;
    const fourDigite = Math.floor(randomNumber);
    
    document.getElementById("random-number").value = fourDigite;

})



   
document.getElementById("calculator").addEventListener("click", function(event){
        const inputValue = event.target.innerText;
        const typeNumber = document.getElementById("input-number");
      //  console.log(inputValue);
        if(isNaN(inputValue)){

            if(inputValue === 'C'){
                typeNumber.value = '';
            }
            else if(inputValue === '<'){
                let myText = typeNumber.value;
                let myNewText = myText.slice(0, -1);
                typeNumber.value = myNewText;
            }
            // else if(inputValue === "Submit"){
            //     realPin = document.getElementById("random-number");

            //     if (realPin.value == typeNumber.value){
            //         console.log("Got it");
            //     }
            //     else{
            //         console.log("Pin doesn't match");
            //     }
            //}
            
        }
        else{
           
            typeNumber.value += inputValue;
            console.log(typeNumber.value);
        }
    
    })

   //-------------------- submit -------------------
   
document.getElementById("submit-btn").addEventListener("click", function(){
    const originalPin = document.getElementById("random-number");
    const userinput = document.getElementById("input-number");
    if (originalPin.value == userinput.value){
        console.log("Got it");
    }
    else{
        console.log("soryy!");
    }
})



