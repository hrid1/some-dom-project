

fetch('./fruits.json')
.then(res => res.json())
.then(data => displyFruits(data))

const displyFruits = fruits => {

    const fruitsContainer = document.getElementById('fruits-container');

 

    fruits.forEach(fruit => {

        const {name, id , price, image} = fruit;
        console.log(name);



        const fruitInfo = document.createElement('div');
        
       fruitInfo.innerHTML =  `
        <div class="card w-80  bg-green-950 shadow-xl my-2">
            <figure class="bg-white"><img src="${image}" alt="Shoes" class="w-4/5 h-72" /></figure>
            <div class="card-body">
              <h2 class="card-title">${name}</h2>
              <p>Price: $<span>${price}</span></p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary" onclick="TestClick(${name})">Add To Cart</button>
              </div>
            </div>
          </div>
        
        `
        fruitsContainer.appendChild(fruitInfo);
        

        
    });


}

function TestClick(id) {
    console.log(id)
    
}


    // const addToCart = itemId => {
    //     console.log(itemId);
    // }