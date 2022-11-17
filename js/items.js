window.addEventListener("load", function () {

    //dropdown highlight
    let highlight = document.querySelector(".dropdown_highlight")

    let navbar = document.querySelector(".navbar")
    let nav = document.querySelector(".nav")
    let dt = nav.querySelectorAll(".dt")
    let dd = nav.querySelectorAll(".dd")
    let navitems = document.querySelector(".navitems")
    let dropdownlist = nav.querySelector(".dropdownlist")
    let sContainer = document.querySelector(".s-container")
    let titleCheckbox = document.querySelectorAll(".title-area input")
    let filterItem = document.querySelectorAll(".filter-item-list")
    let addBtn = document.querySelectorAll(".add button")
    // console.log(addBtn)

    let itemBox = document.querySelectorAll(".item-box")

    //update cart total value when the webpage refreshes
    // updateCartTotal()

    //show dropdown list
    for (let i = 0; i < dt.length; i++) {

        dt[i].addEventListener("mouseenter", function () {

            highlight.style.width = dt[i].offsetWidth + "px"
            highlight.style.display = "block"
            animate(highlight, this.offsetLeft)

            for (let i = 0; i < dd.length; i++) {
                if (dd[i].style.display = "block") {
                    dd[i].style.display = "none"
                }

            }
            dd[i].style.display = "block"
            dd[i].style.left = i * 210 + "px"




        })

        nav.addEventListener("mouseleave", function () {
            highlight.style.display = "none"
            dd[i].style.display = "none"

        })

        // navitems.addEventListener("mouseenter", function () {

        //     highlight.style.width = "143px";
        //     highlight.style.display = "block"
        //     animate(highlight, this.offsetLeft)
        // })

    }

    //show/hide filter items
    for (let i = 0; i < titleCheckbox.length; i++) {
        titleCheckbox[i].onclick = function () {

            if (titleCheckbox[i].checked) {

                filterItem[i].style.transform = "scaleY(1)";
                filterItem[i].style.height = "100%"

            } else {

                filterItem[i].style.transform = "scaleY(0)";
                filterItem[i].style.height = "0px"

            }

        }
    }





    // shopping cart
    const bagIcon = document.querySelector(".bag")
    const shopCart = document.querySelector(".shopcart")
    let cartList = document.querySelector(".cart-list")

    bagIcon.addEventListener("mouseover", function () {
        cartList.style.display = "block"

    })

    shopCart.addEventListener("mouseleave", function () {

        cartList.style.display = "none"

    })

    //add items to cart


    for (let i = 0; i < addBtn.length; i++) {
        addBtn[i].addEventListener("click", addToCart)
    }
    

    function addToCart(e) {
        let button = e.target
        let productBox = button.parentElement.parentElement.parentElement
        let productName = productBox.querySelector(".product-name").innerText
        let productPrice = productBox.querySelector(".price").innerText
        let productImgSrc = productBox.querySelector(".product-img").src
        addItemToCart(productName, productPrice, productImgSrc)
        

    }

    function addItemToCart(name, price, image) {
        let cartContent = document.querySelector(".cart-content")
        let itemAdded = document.createElement("div")
        itemAdded.classList.add("item-box")
        let cartContentInfo = `<div class="item-box">
        <img src="${image}" alt="" class="product-img">
        <div class="detail-box">
            <div class="product-title">${name}</div>
            <div class="product-price">${price}</div>
        </div>
        <input id="product-quantity" type="number" value="1" min="1">
        <img class="delete-item" src="images/trash-icon.png">

        </div>`
        itemAdded.innerHTML = cartContentInfo
        cartContent.appendChild(itemAdded)
        updateCartTotal()
        itemAdded.querySelector(".delete-item").addEventListener("click",removeItem)
        let itemQtyElems = itemAdded.querySelector("#product-quantity")
       
            itemQtyElems.onchange = function () {
                updateCartTotal()
            
        }

    }

    //delete cart items
    function removeItem(){
        let removeItemButton = document.querySelectorAll(".delete-item")

        for (let i = 0; i < removeItemButton.length; i++) {
            removeItemButton[i].addEventListener("click", function () {
                let cartItems = document.querySelectorAll(".cart-list .item-box")
                let itemQty = cartItems[i].querySelector("#product-quantity").value
                let itemBox = document.querySelectorAll(".item-box")
                itemBox[i].style.display = "none"
                updateCartTotal()
    
            })
        }
    }
   

    //Update cart total 
    function updateCartTotal() {
        let cartItems = document.querySelectorAll(".cart-list .item-box")
        let subtotalPrice = 0
        for (let i = 0; i < cartItems.length; i++) {
            let itemPricesElem = cartItems[i].querySelector(".product-price").innerText
            let itemBox = document.querySelectorAll(".item-box")
            let itemQty = cartItems[i].querySelector("#product-quantity").value
            // console.log(itemQty)
            if (itemBox[i].style.display == "none") {
                itemQty = 0
            }
            // console.log(itemQty)
            let itemPrices = itemPricesElem.substring(1,)
            subtotalPrice += itemPrices * itemQty
            console.log(subtotalPrice)
            let subTotal = document.querySelector(".subtotal")
            subTotal.innerText = "$" + parseFloat(subtotalPrice)
            let delivery = document.querySelector(".delivery")
            if (subtotalPrice < 100 && subtotalPrice !== 0) {
                delivery.innerText = "$10.00"
            } else {
                delivery.innerText = "$0.00"
            }
            let total = document.querySelector(".total")
            console.log(total)
            total.innerText = "$" + (parseFloat(subTotal.innerText.substring(1,)) + parseFloat(delivery.innerText.substring(1,)))

        }
    }
    // let itemQtyElems = document.querySelectorAll("#product-quantity")
    // for (let i = 0; i < itemQtyElems.length; i++) {
    //     itemQtyElems[i].onchange = function () {
    //         updateCartTotal()
    //     }
    // }

    // let delivery = document.querySelector(".delivery")
    // for (let i = 0; i < delivery.length; i++) {
    //     delivery[i].onchange = function () {
    //         updateCartTotal()
    //     }
    // }




    // code to finish
    // let cartItems = document.querySelectorAll(".cart-list .item-box")
    // let itemPricesElem = cartItems[0].querySelector(".product-price").innerText
    //         let itemQty = cartItems[0].querySelector("#product-quantity").value
    //         let itemPrices = itemPricesElem.substring(1,)
    //         let totalPrice = 0;
    //         totalPrice += itemPrices*itemQty
    //         let subTotal = document.querySelector(".subtotal")
    //         subTotal.innerText = "$" + totalPrice
    // console.log(itemPrices)
    // console.log(itemQty)
    // console.log(subTotal.innerText)
})


