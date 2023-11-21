window.addEventListener("load", function () {

    //dropdown highlight
    let highlight = document.querySelector(".dropdown_highlight")

    let navbar = document.querySelector(".navbar")
    
    let nav = document.querySelector(".nav")
    let dt = nav.querySelectorAll(".dt")
    let dd = nav.querySelectorAll(".dd")
    let navitems = document.querySelector(".navitems")
    let dropdowndt = navitems.querySelector(".dt")
    let dropdownlist = nav.querySelector(".dropdownlist")
    let dropdownlistdd = dropdownlist.querySelector('.dd')
    let sContainer = document.querySelector(".s-container")
    let titleCheckbox = document.querySelectorAll(".title-area input")
    let filterItem = document.querySelectorAll(".filter-item-list")
    let addBtn = document.querySelectorAll(".add button")
    // console.log(addBtn)
    // console.log(dropdownlistdd)

    let itemBox = document.querySelectorAll(".item-box")

    let favBtns = document.querySelectorAll(".fav button")
    

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
            // dd[i].style.left = i * 319 + "px"

            dd[i].style.left = i * dt[i].offsetWidth + "px"


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

        //function to create new item in cart
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
                // updateTotalCount()
            }
        }

        //update cart item info
        let qty = 0
        if (!cartContent.hasChildNodes()) {

            createItem()
        } else {
            let itemBox = document.querySelectorAll(".item-box")
            let itemExists = false;
            let index = 0

            for (let i = 0; i < itemBox.length; i++) {
                if (itemBox[i].querySelector("img").src == `${image}` && itemBox[i].querySelector(".product-title").innerText == `${name}`) {
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
                // updateTotalCount()
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
                // itemBox[i].style.display = "none"
                //use .remove() instead of display="none"
                itemBox[i].remove()
                updateCartTotal()


            })
        }
    }


    //Update cart total
    function updateCartTotal() {
        let cartItems = document.querySelectorAll(".cart-list .item-box")
        // console.log(cartItems.length)
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

        //update cart total item count
        let count = 0
        for (let i = 0; i < cartItems.length; i++) {
            let itemQty = cartItems[i].querySelector("#product-quantity").value
            count += parseInt(itemQty)
            // console.log(cartItems.length)
        }
        let cartCount = document.querySelector(".shopcart .count")
        cartCount.innerText = count
    }




    //get price filter element


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
                        // console.log(productBox[i])
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
            // console.log(filterName[i])
            let itemType = filterName[i].innerText

            if (itemType == filterItem) {
                productBox[i].style.display = "block"

            } else {
                productBox[i].style.display = "none"

            }
        }
    }


    //functions to sort items
    let lowToHigh = document.querySelector(".low-to-high")
    let highToLow = document.querySelector(".high-to-low")
    let saleFirst = document.querySelector(".sale-first")
    let aToZ = document.querySelector(".a-to-z")
    let newest = document.querySelector(".newest")
    let dropdownItems = document.querySelectorAll(".dropdown-content div")


    for (i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].addEventListener("hover", function () {
            dropdownItems[i].style.backgroundColor = "#f1f1f1"
        })

    }



    let oldShopContent = document.createElement("div")
    oldShopContent.classList.add("shop-content")

    let shopContent = document.querySelector(".shop-content")
    for (let i = 0; i < productBox.length; i++) {
        shopContent.appendChild(productBox[i])
        oldShopContent.innerHTML = shopContent.innerHTML
    }



    let flag1
    let flag2
    let flag3
    let flag4
    
    flag1 = true
    lowToHigh.addEventListener("click", function () {
        flag2 = true
        flag3 = true
        flag4 = true
        for (i = 0; i < dropdownItems.length; i++) {
            dropdownItems[i].style.backgroundColor = "#f1f1f1"
            // console.log(dropdownItems[i])
        }
        lowToHigh.style.backgroundColor = "rgb(99, 99, 99, .5)"
        let price = document.querySelectorAll(".price")
        let arr = []
        if (flag1) {
            flag1 = false
            shopContent.innerHTML = ""
            for (let i = 0; i < productBox.length; i++) {
                if (price[i]) {
                    arr.push(price[i].innerText.substr(1,));
                }
              
                arr.sort()
            }
            for (let i = 0; i < arr.length; i++) {

                for (let j = 0; j < productBox.length; j++) {
                    if (productBox[j].querySelector(".price").innerText.substr(1,) == arr[i]) {
                        shopContent.appendChild(productBox[j])

                        break
                    }
                }
            }
        } else {
            shopContent.innerHTML = oldShopContent.innerHTML
            flag1 = true
            lowToHigh.style.backgroundColor = "#f1f1f1"
            lowToHigh.addEventListener("mouseenter", function () {
                lowToHigh.style.backgroundColor = "rgb(99, 99, 99, .5)"
            })
        }

    })


    flag2 = true
    highToLow.addEventListener("click", function () {
        flag1 = true
        flag3 = true
        flag4 = true
        for (i = 0; i < dropdownItems.length; i++) {
            dropdownItems[i].style.backgroundColor = "#f1f1f1"

        }
        highToLow.style.backgroundColor = "rgb(99, 99, 99, .5)"
        let price = document.querySelectorAll(".price")
        let arr = []
        if (flag2) {
            flag2 = false
            shopContent.innerHTML = ""
            for (let i = 0; i < productBox.length; i++) {
                if (price[i]) {
                    arr.push(price[i].innerText.substr(1,));
                }
                arr.sort(function (a, b) {
                    return b - a;
                })
            }
            for (let i = 0; i < arr.length; i++) {

                for (let j = 0; j < productBox.length; j++) {
                    if (productBox[j].querySelector(".price").innerText.substr(1,) == arr[i]) {
                        shopContent.appendChild(productBox[j])

                        break
                    }
                }
            }
        } else {
            shopContent.innerHTML = oldShopContent.innerHTML
            flag2 = true
            highToLow.style.backgroundColor = "#f1f1f1"
            highToLow.addEventListener("mouseenter", function () {
                highToLow.style.backgroundColor = "rgb(99, 99, 99, .5)"
            })
        }

    })



    flag3 = true
    aToZ.addEventListener("click", function () {
        flag1 = true
        flag2 = true
        flag4 = true
        for (i = 0; i < dropdownItems.length; i++) {
            dropdownItems[i].style.backgroundColor = "#f1f1f1"

        }
        aToZ.style.backgroundColor = "rgb(99, 99, 99, .5)"
        let brand = document.querySelectorAll(".brand")
        let arr = []
        if (flag3) {
            flag3 = false
            shopContent.innerHTML = ""
            for (let i = 0; i < productBox.length; i++) {
                arr.push(brand[i].innerText)
                arr.sort()
            }
            for (let i = 0; i < arr.length; i++) {

                for (let j = 0; j < productBox.length; j++) {
                    if (productBox[j].querySelector(".brand").innerText == arr[i]) {
                        shopContent.appendChild(productBox[j])

                    }
                }
            }
        } else {
            shopContent.innerHTML = oldShopContent.innerHTML
            flag3 = true
            aToZ.style.backgroundColor = "#f1f1f1"
            aToZ.addEventListener("mouseenter", function () {
                aToZ.style.backgroundColor = "rgb(99, 99, 99, .5)"
            })
        }

    })

    //SALE FIRST FUNCTION

    flag4 = true
    saleFirst.addEventListener("click", function () {
        flag1 = true
        flag3 = true
        flag2 = true
        for (i = 0; i < dropdownItems.length; i++) {
            dropdownItems[i].style.backgroundColor = "#f1f1f1"

        }
        saleFirst.style.backgroundColor = "rgb(99, 99, 99, .5)"
        let sale = document.querySelectorAll(".sale")
        let arr = []
        if (flag4) {
            flag4 = false
            shopContent.innerHTML = ""
            for (let i = 0; i < productBox.length; i++) {
                if(sale[i]){
                    
                }
                arr.sort()
            }
            for (let i = 0; i < arr.length; i++) {

                for (let j = 0; j < productBox.length; j++) {
                    if (productBox[j].querySelector(".sale").innerText == arr[i]) {
                        shopContent.appendChild(productBox[j])

                    }
                }
            }
        } else {
            shopContent.innerHTML = oldShopContent.innerHTML
            flag4 = true
            saleFirst.style.backgroundColor = "#f1f1f1"
            saleFirst.addEventListener("mouseenter", function () {
                saleFirst.style.backgroundColor = "rgb(99, 99, 99, .5)"
            })
        }

    })
const likeContentArea=document.querySelector(".like-content")
favBtns.forEach(favBtn=>{
    favBtn.onclick = ()=>{
        const favImg = favBtn.parentElement.parentElement.querySelector("img")
        const favImgSrc = favImg.src
        // console.log(favImgSrc)

        const name=favBtn.parentElement.parentElement.parentElement.querySelector(".text").querySelector(".product-name").innerText
        const price=favBtn.parentElement.parentElement.parentElement.querySelector(".text").querySelector(".price").innerText
        
       
        const favItemDiv = document.createElement("div")
        favItemDiv.classList.add("fav-div-style")
        
        let cartContentInfo = `
        
        <img src="${favImgSrc}" alt="" class="product-img" style="width:150px; border-radius:8px" >
      
        <div class="product-title" style="font-size:14px">${name}</div>
        <div class="product-price">${price}</div>
        
        `
        favItemDiv.innerHTML = cartContentInfo
        likeContentArea.appendChild(favItemDiv)
    }
})


})




