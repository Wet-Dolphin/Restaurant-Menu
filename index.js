import { menuArray } from "./data.js"

let shoppingCart = []
let cartCount = 0
let total = 0
let totalDiv = document.getElementById("total")
let menuHtml = document.getElementById("menu")
let cartDiv = document.getElementById("cart")
let cartItemsHtml = document.getElementById("items")



function renderMenu(){
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
                    <button class="add-item-btn" id="${item.id}">+</button>
                </div>
            </div>
            `
    })
    return menu
}

function getItem(selectedId){
    let selectedItem = menuArray.filter(function(item){
        return item.id === selectedId
    })[0]
    shoppingCart.push(selectedItem)
    total += selectedItem.price
}

function renderCart(){
    let cart = ""
    shoppingCart.forEach(function(item){
        cart += `
            <div class="cart-item">
                <div id="item-container">
                    <div class="item-name">${item.name}</div>
                    <button class="remove-btn" data-remove="${item.id}">Remove</button>
                </div
                <div class="item-price">$${item.price}</div>
            </div>
            `
    })
    return cart
}

document.addEventListener("click", function(e){

    if (e.target.id === "pizza"){
        if (cartCount === 0){
            cartDiv.classList.toggle("hidden")
        }
        getItem(e.target.id)
        cartCount += 1
    }
    else if (e.target.id === "hamburger"){
        if (cartCount === 0){
            cartDiv.classList.toggle("hidden")
        }
        getItem(e.target.id)
        cartCount += 1
    }
    else if (e.target.id === "beer"){
        if (cartCount === 0){
            cartDiv.classList.toggle("hidden")
        }
        getItem(e.target.id)
        cartCount += 1
    }
    else if (e.target.dataset.remove){
        removeItem(e.target.dataset.remove)
        cartCount -= 1
        if (cartCount === 0){
            cartDiv.classList.toggle("hidden")
        }
    }

    render()
})

function removeItem(targetId){
    let newShoppingCart = shoppingCart.filter(function(item){
        return item.id != targetId
    })
    let priceDeduct = shoppingCart.filter(function(item){
        return item.id === targetId
    })[0]

    total -= priceDeduct.price
    shoppingCart = newShoppingCart
    
    renderCart()
}


function render(){
    menuHtml.innerHTML = renderMenu()
    cartItemsHtml.innerHTML = renderCart()
    totalDiv.innerHTML = `Total:  $${total}`
}

render()