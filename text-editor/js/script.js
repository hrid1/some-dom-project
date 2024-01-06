
// bold section
document.getElementById('bold-id').addEventListener('click', function(){
            
    let inputStr = getInputString();
    if(hr){
        inputStr.style.fontWeight = "bold";
    }
    else{
        inputStr.style.fontWeight = "normal"
    }
   
})

// italic section


document.getElementById('italic-id').addEventListener('click', function(){

    let inputStr = getInputString();
    if(hr){
        inputStr.style.fontStyle = "italic";
        hr=0;
    }
    else{
        inputStr.style.fontStyle = "normal";
        hr=1;
    }
})

// underline section
let underLine = 1;
document.getElementById('underline-id').addEventListener('click', function(){
    let inputStr = getInputString();

    if(underLine){
        inputStr.style.textDecoration = "underline"; 
        underLine = 0;
    }
    else{
        inputStr.style.textDecoration = "none"; 
        underLine = 1;
    }
    
})