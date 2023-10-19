window.addEventListener("load", function () {
    let arrowL = document.querySelector(".arrow-l")
    let arrowR = document.querySelector(".arrow-r")
    let carousel = document.querySelector(".carousel")
    carousel.addEventListener("mouseenter", function () {
        arrowL.style.display = "block"
        arrowR.style.display = "block"
        //stop timer
        clearInterval(carousel_timer)
        //remove timer
        timer = null
    })

    carousel.addEventListener("mouseleave", function () {
        arrowL.style.display = "none";
        arrowR.style.display = "none";
        carousel_timer = this.setInterval(function () {
            arrowR.click()
        }, 2000)
    })

    // generate small circles
    let carousel_img = document.querySelector(".carousel_img")
    let ul = carousel_img.querySelector("ul")


    let ol = carousel.querySelector(".circle")

    let imgWidth = carousel.offsetWidth
    for (let i = 0; i < ul.children.length; i++) {
        //generate li
        let li = document.createElement("li")
        li.setAttribute("index", i)
        //append li to ol
        ol.appendChild(li)
        //add EventListener to li
        li.addEventListener("click", function () {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ""
            }
            this.className = "current"

            let index = this.getAttribute("index")
            if (index == ul.children.length) {
                num = 0
                circleIndex = 0
            } else {
                num = index
                circleIndex = index
            }

            // let imgWidth = carousel.offsetWidth

            animate(ul, -index * imgWidth)
        })
    }
    //make first li white
    ol.children[0].className = "current";

    //clone the fist image and put it at the end of the img list
    let firstImg = ul.children[0].cloneNode(true)
    ul.appendChild(firstImg)
    // firstImg.classList.add("img5")
    // console.log(firstImg.classList)

    let num = 0
    let circleIndex = 0;
    let flag = true;
    //click the right arrow to go to the next picture
    arrowR.addEventListener("click", function () {
        if (flag) {
            flag = false
            //When reach the last pic (clone of the first pic),show the first pic
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++
            animate(ul, -num * imgWidth, function () {
                flag = true
            })
            //use circleIndex to control the display of the small circles
            circleIndex++
            if (circleIndex == ol.children.length) {
                circleIndex = 0;
            }
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ""
            }
            ol.children[circleIndex].className = "current"
        }
    })

    //click the left arrow to go to the previous picture
    arrowL.addEventListener("click", function () {
        //When reach the last pic (clone of the first pic),show the first pic
        if (flag) {
            flag = false
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * imgWidth + "px";

            }
            num--
            animate(ul, -num * imgWidth, function () {
                flag = true //when animation is done,trigger callback function and set flag to true
            })
            //use circleIndex to control the css style of the small circles
            circleIndex--
            if (circleIndex < 0) {
                circleIndex = ol.children.length - 1;
            }
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ""
            }
            ol.children[circleIndex].className = "current"
        }
    })

    //carousel autoplay
    let carousel_timer = setInterval(function () {
        arrowR.click()
    }, 3000)

    //dropdown highlight
    let highlight = document.querySelector(".dropdown_highlight")

    let navbar = document.querySelector(".navbar")
    let nav = document.querySelector(".nav")
    let dt = nav.querySelectorAll(".dt")
    let dd = nav.querySelectorAll(".dd")
    let navitems = document.querySelector(".navitems")
    let dropdowndt = navitems.querySelector(".dt")
    let dropdownlist = nav.querySelector(".dropdownlist")
    


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

//BACK TO TOP MODULE
    let goBack = document.querySelector(".go-back")
    window.addEventListener("scroll",function(){
        if(window.scrollY>carousel.offsetTop){
            goBack.style.display = "block"
        }else{
            goBack.style.display = "none"
        }
    })
    
    goBack.addEventListener("click", function () {
        BackToTop(window,0)
        // window.scroll(0,0)
    })
})