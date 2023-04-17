import { menuArray } from "./data.js"

function getMenu(){
    let menu =""
    menuArray.forEach(function(item){
        menu += `
            <div class="menu-item">
                <div class="item-emoji">${item.emoji}</div>
                <div class="item-description">
                    <div class="item-name">${item.name}</div>
                    <div class="item-ingredients">${item.ingredients}</div>
                    <div class="item-price">$${item.price}</div>
                </div>
                <div class="button-container">
                    <button class="add-item-btn" data-${item.id}="${item.name}">+</button>
                </div>
            </div>
            `
    })
    return menu, item.name
}

function render(){
    document.getElementById("menu").innerHTML = getMenu()
}

document.addEventListener("click", function(event){
    if (event.target.dataset.id === "pizza"){
        addPizza(event.target.dataset.id)
    }
    else if (event.target.dataset.id === "burger"){
        addBurger(event.target.dataset.id)
    }
    else if (event.target.dataset.id === "beer"){
        addBeer(event.target.dataset.id)
    }
})

function addPizza(pizzaId){
    let menu = `
            <div class="menu-item">
                <div class="item-emoji">${item.emoji}</div>
                <div class="item-description">
                    <div class="item-name">${item.name}</div>
                    <div class="item-ingredients">${item.ingredients}</div>
                    <div class="item-price">$${item.price}</div>
                </div>
                <div class="button-container">
                    <button class="add-item-btn" data-${item.id}="${item.name}">+</button>
                </div>
            </div>
            `
}


render()

