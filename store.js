let btnDanger = document.getElementsByClassName('btn-danger')
for(let i = 0; i < btnDanger.length; i++){
    let cartRow = btnDanger[i]
    cartRow.addEventListener('click', removeCartItem)
}

let quantityInput = document.getElementsByClassName('cart-quantity-input')
for(let i = 0; i < quantityInput.length; i++){
    let quantity = quantityInput[i]
    quantity.addEventListener('change', inputChange)
}

let cartAdd = document.getElementsByClassName('shop-item-button')
for(let i = 0; i < cartAdd.length; i++){
    let btnAdd = cartAdd[i]
    btnAdd.addEventListener('click', addCartItem)
}





function removeCartItem(e){
    let target = e.target
    target.parentElement.parentElement.remove()
    updateTotal()
}

function updateTotal(){
    let total = 0
    let priceElement = document.getElementsByClassName('cart-items')[0].getElementsByClassName('cart-price')
    let quantityElement = document.getElementsByClassName('cart-quantity-input')
    for(let i = 0; i < quantityElement.length; i++){
        let price = priceElement[i].innerText.replace('$','')
        let quantity = quantityElement[i].value
        total += price * quantity
    }
    
    total = Math.round(100 * total) / 100
    let cartTotalPrice = document.getElementsByClassName('cart-total-price')[0]
    cartTotalPrice.innerText = '$' + total
}

function inputChange(e){
    let quantity = e.target.value
    if(quantity <= 0){
        e.target.value = 1
    }
    updateTotal()
}

function addCartItem(e){
    let cartRow = document.getElementsByClassName('cart-items')[0]
    let newCart = document.createElement('div')
    let src = e.target.parentElement.parentElement.getElementsByTagName('img')[0].src
    let title = e.target.parentElement.parentElement.getElementsByClassName('shop-item-title')[0].innerText
    let price = e.target.parentElement.parentElement.getElementsByClassName('shop-item-price')[0].innerText
    // console.log(title)
    let titleAll = document.getElementsByClassName('cart-item-title')
    for(let i = 0; i < titleAll.length; i++){
        let cartTitle = titleAll[i].innerText
        if(cartTitle == title){
            alert('existed')
            return
        }
    }
    
    cartRow.append(newCart)
    newCart.innerHTML = `<div class="cart-row">
                            <div class="cart-item cart-column">
                                <img class="cart-item-image" src=${src} width="100" height="100">
                                <span class="cart-item-title">${title}</span>
                            </div>
                            <span class="cart-price cart-column">${price}</span>
                            <div class="cart-quantity cart-column">
                                <input class="cart-quantity-input" type="number" value="1">
                                <button class="btn btn-danger" type="button">REMOVE</button>
                            </div>
                        </div>`
    updateTotal()
    let btnDanger = document.getElementsByClassName('btn-danger')
    for(let i = 0; i < btnDanger.length; i++){
        let cartRow = btnDanger[i]
        cartRow.addEventListener('click', removeCartItem)
    }
    let quantityInput = document.getElementsByClassName('cart-quantity-input')
    for(let i = 0; i < quantityInput.length; i++){
        let quantity = quantityInput[i]
        quantity.addEventListener('change', inputChange)
    }
}