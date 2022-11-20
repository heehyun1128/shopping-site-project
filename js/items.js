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
        // let itemAdded = document.createElement("div")

        // itemAdded.classList.add("item-box")
        let cartContentInfo = `
               
                    <img src="${image}" alt="" class="product-img">
                    <div class="detail-box">
                        <div class="product-title">${name}</div>
                        <div class="product-price">${price}</div>
                    </div>
                    <input id="product-quantity" type="number" value="1" min="1">
                    <img class="delete-item" src="images/trash-icon.png">
                
                `
        function createItem() {
            let itemAdded = document.createElement("div")

            itemAdded.classList.add("item-box")
            itemAdded.innerHTML = cartContentInfo
            cartContent.appendChild(itemAdded)
            updateCartTotal()
            itemAdded.querySelector(".delete-item").addEventListener("click", removeItem)
            let itemQtyElems = itemAdded.querySelector("#product-quantity")
            itemQtyElems.onchange = function () {
                updateCartTotal()
            }
        }

        if (!cartContent.hasChildNodes()) {

            createItem()
        } else {
            let itemBox = document.querySelectorAll(".item-box")
            let itemExists = false;
            let index = 0
            for (let i = 0; i < itemBox.length; i++) {
                if (itemBox[i].querySelector("img").src == `${image}`) {
                    itemExists = true
                    index = i
                    break
                } else {
                    itemExists = false
                }
            }
            if (itemExists == true) {
                let qty = parseInt(itemBox[index].querySelector("#product-quantity").value)

                qty += 1
                itemBox[index].querySelector("#product-quantity").value = qty
                updateCartTotal()
            } else {
                createItem()
            }
        }
    }

    //delete cart items
    function removeItem() {
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

            let subTotal = document.querySelector(".subtotal")
            subTotal.innerText = "$" + parseFloat(subtotalPrice)
            let delivery = document.querySelector(".delivery")
            if (subtotalPrice < 100 && subtotalPrice !== 0) {
                delivery.innerText = "$10.00"
            } else {
                delivery.innerText = "$0.00"
            }
            let total = document.querySelector(".total")

            total.innerText = "$" + (parseFloat(subTotal.innerText.substring(1,)) + parseFloat(delivery.innerText.substring(1,)))

        }
    }

    //get price filter element


    // let filterPriceMin = document.querySelectorAll('.fp-min')
    // let filterPriceMax = document.querySelectorAll('.fp-max')
    let productBox = document.querySelectorAll(".product-box")
    let filterPriceBox = document.querySelectorAll(".filter-price .left")
    for (let i = 0; i < filterPriceBox.length; i++) {
        filterPriceBox[i].addEventListener("change", function () {

            if (!filterPriceBox[i].checked) {
                for (let i = 0; i < filterPriceBox.length; i++) {
                    productBox[i].style.display = "block"
                }
            } else {
                if (this.checked) {

                    let filterPriceMin = this.nextElementSibling.innerText.substr(1,)
                    let filterPriceMax = this.nextElementSibling.nextElementSibling.innerText.substr(1,)
                    // console.log(this.nextElementSibling.innerText.substr(1,))
                    // console.log(this.nextElementSibling.nextElementSibling.innerText.substr(1,))
                    comparePrice(filterPriceMin, filterPriceMax)
                }

            }
        })
    }



    function comparePrice(min, max) {

        if (min == "") {
            min = 0

        }

        if (max == "") {
            max = "99999999999999999"
        }

        for (let i = 0; i < productBox.length; i++) {
            let productPrice = productBox[i].querySelector(".price")
            let itemPrice = parseFloat(productPrice.innerText.substr(1,))

            if (itemPrice >= parseInt(min) && itemPrice < parseInt(max)) {
                productBox[i].style.display = "block"

            } else {
                productBox[i].style.display = "none"

            }
        }
    }





    //check if item description matches filter info

    let filterTypeBox = document.querySelectorAll(".filter-type .left")
    let filterBrandBox = document.querySelectorAll(".filter-brand .left")
    let filterGenderBox = document.querySelectorAll(".filter-gender .left")
    let filterSizeBox = document.querySelectorAll(".filter-size .left")
    let filterColorBox = document.querySelectorAll(".filter-color .left")
    let filterMaterialBox = document.querySelectorAll(".filter-material .left")
    let filterSaleBox = document.querySelectorAll(".filter-sale .left")
    let filterClearanceBox = document.querySelectorAll(".filter-clearance .left")


    let productType = document.querySelectorAll(".product-box .type")
    let productBrand = document.querySelectorAll(".product-box .brand")
    let productGender = document.querySelectorAll(".product-box .gender")
    let productSize = document.querySelectorAll(".product-box .size")
    let productColor = document.querySelectorAll(".product-box .color")
    let productMaterial = document.querySelectorAll(".product-box .material")
    let productSale = document.querySelectorAll(".product-box .sale")
    let productClearance = document.querySelectorAll(".product-box .clearance")






   

    //add eventlistener to filterBoxes
    filterBoxesClicked(filterTypeBox, productType)
    filterBoxesClicked(filterBrandBox, productBrand)
    filterBoxesClicked(filterGenderBox, productGender)
    filterBoxesClicked(filterSizeBox, productSize)
    filterBoxesClicked(filterColorBox, productColor)
    filterBoxesClicked(filterMaterialBox, productMaterial)
    filterBoxesClicked(filterSaleBox, productSale)
    filterBoxesClicked(filterClearanceBox, productClearance)

    function filterBoxesClicked(filterBox, filterName) {
        for (let i = 0; i < filterBox.length; i++) {
            filterBox[i].addEventListener("change", function () {

                if (!filterBox[i].checked) {
                    for (let i = 0; i < productBox.length; i++) {
                        productBox[i].style.display = "block"
                        console.log(productBox[i])
                    }
                } else {
                    if (this.checked) {
                    
                        for (let i = 0; i < filterBox.length; i++) {
                            filterBox[i].checked = false
                            this.checked = true
                            
                            
                        }
                        
                        
                        let filterType = this.nextElementSibling.innerText
                        filterMatch(filterType, filterName)

                    }

                }
            })
        }
    }

    function filterMatch(filterItem, filterName) {
       
        // console.log(productBox.length)
        for (let i = 0; i < productBox.length; i++) {
            console.log(filterName[i])
            let itemType = filterName[i].innerText

            if (itemType == filterItem) {
                productBox[i].style.display = "block"

            } else {
                productBox[i].style.display = "none"

            }
        }
    }






})

