
let count = 0;

// get name and valus
function getNameValue(inputType,nameId, val1Id, val2Id){
    const name = document.getElementById(nameId).innerText;
    if(!inputType)
    { 
        const val1 = document.getElementById(val1Id).innerText;
        const val2 = document.getElementById(val2Id).innerText;

        return {
            name, val1, val2
        };
    }
    else{
        const val1 = document.getElementById(val1Id).value;
        const val2 = document.getElementById(val2Id).value;

        return {
            name, val1, val2
        };
    }

    
 
}


// ------------------for triangle with input--------------------------------
document.getElementById("tria-btn").addEventListener("click", function(){

    let info = getNameValue(true, "triangle", "tria-w","tria-l");
    itemName = info.name;
    itemWidth = info.val1;
    itemLength = info.val2;

    const area = 0.5 * itemWidth * itemLength;

    count+=1;
    displayAns(count, itemName, area);
})
// -----------------for ractangle with input--------------------------------
document.getElementById("rect-btn").addEventListener("click", function(){

    let info = getNameValue(inputType=true, "rectangle", "rect-w","rect-l");
    itemName = info.name;
    itemWidth = info.val1;
    itemLength = info.val2;

    const area =  itemWidth * itemLength;

    count+=1;
    displayAns(count, itemName, area);
})
// -------------------for Paraleelogram--------------------------------
document.getElementById("para-btn").addEventListener("click", function(){

    let info = getNameValue(inputType=false,"parallelogram", "para-h", "para-b");
    itemName = info.name;
    itemHeight = info.val1;
    itemBase = info.val2

    const area = itemHeight * itemBase ;
    
    count+=1;
    
    displayAns(count, itemName, area);
    
})


// -------------------for Rhombus--------------------------------
document.getElementById("rhom-btn").addEventListener("click", function(){

    let info = getNameValue(inputType=false,"rhombus", "rhom-d1", "rhom-d2");
    itemName = info.name;
    itemD1 = info.val1;
    itemD2 = info.val2

    const area = 0.5 * itemD1 * itemD2 ;
    
    count+=1;
    
    displayAns(count, itemName, area);
    
})
// -------------------for Pentagon-------------------------------
document.getElementById("penta-btn").addEventListener("click", function(){

    let info = getNameValue(inputType=false,"pentagon", "penta-p", "penta-b");
    itemName = info.name;
    itemPval = info.val1;
    itemBval = info.val2

    const area = 0.5* itemPval * itemBval ;
    
    count+=1;
    
    displayAns(count, itemName, area);
    
})
//--------------------for Ellipse--------------------------------
document.getElementById("elip-btn").addEventListener("click", function(){

    let info = getNameValue(inputType=false,"ellipse", "elip-a", "elip-b");
    itemName = info.name;
    itemValA = info.val1;
    itemValB = info.val2;
    const pi = Math.PI;

    const area = (pi * itemValA * itemValB).toFixed(2) ;
    
    count+=1;
    
    displayAns(count, itemName, area);
    
})




// ---------------display in table----------------------
function displayAns(count, name, area){
    let child = document.createElement("tr");
    child.innerHTML =
    `
    <td> ${count+'.'+name} </td>
    <td> ${area} </td>
    <td> <button class="bg-blue-500 text-white px-1 py-1 rounded font-semibol ">Convert m2</button> </td>
    `;
    console.log(child);
    const parent = document.getElementById("tbody");
    console.log(parent);

    parent.appendChild(child);
}