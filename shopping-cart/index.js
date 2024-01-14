let slNo = 0;


document.getElementById("coffe-btn").addEventListener("click", function(){
    
   const productName = document.getElementById("coffe-name").innerText;
   const productPrice = document.getElementById("coffe-price").innerText;
   const productQuantity = document.getElementById("coffe-quantity").innerText;
   const productTotalPrice = parseFloat(productPrice*productQuantity);
    
   console.log(productTotalPrice);
   slNo+=1;
   

    setDataTable(slNo, productName, productPrice, productQuantity, productTotalPrice);

})

// 
document.getElementById("vue-btn").addEventListener("click", function(){
    const productName = document.getElementById("vue-name").innerText;
    const productPrice = document.getElementById("vue-price").value ;
    const productQuantity = document.getElementById("vue-quantity").value;
    const productTotal = parseFloat(productPrice)+parseFloat(productQuantity);
    slNo+=1;

    setDataTable(slNo, productName, productPrice, productQuantity, productTotal);
})

// set a row in the table
function setDataTable(itemnNo, ItemName, ItemPrice, ItemQuantity, Total){

    const newRow = document.createElement("tr");
    newRow.innerHTML =
     `
        <td> ${itemnNo} </td>
        <td> ${ItemName} </td>
        <td> ${ItemPrice}</td>
        <td> ${ItemQuantity}</td>
        <td> ${Total}</td>
    `;

    document.getElementById("table-id").appendChild(newRow);
}