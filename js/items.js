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
    let addIcon = document.querySelectorAll(".add-icon")
    let addedNum = document.querySelectorAll(".image-box input")
    let itemBox = document.querySelectorAll(".item-box")


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

    //delete cart items
    let removeItemButton = document.querySelectorAll(".delete-item")

    for (let i = 0; i < removeItemButton.length; i++) {
        removeItemButton[i].addEventListener("click", function () {
            itemBox[i].style.display = "none"

        })
    }

    //Update cart total 
    function updateCartTotal(){
        let cartItems = document.querySelectorAll(".cart-list .item-box")

        for(let i=0;i<cartItems.length;i++){
            let itemPrices = cartItems[i].querySelector(".product-price")
        }
    }
    //code to finish
    let cartItems = document.querySelectorAll(".cart-list .item-box")
    console.log(cartItems)
    console.log(cartItems[0])
})


