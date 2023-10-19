window.addEventListener("load",function(){

    let carousel = document.querySelector(".carousel")
    let carousel_img = document.querySelector(".carousel_img")
    
    let magnify = document.querySelector(".magnify")
    // let main = document.querySelector(".main")
    
    //add image to magnifying window
    
    let img1 = document.querySelector(".img1")
    let img2 = document.querySelector(".img2")
    let img3 = document.querySelector(".img3")
    let img4 = document.querySelector(".img4")
    let ul = carousel_img.querySelector("ul")
    let img5 = ul.lastElementChild
    
    

    let mask1 = img1.querySelector(".mask")
    let mask2 = img2.querySelector(".mask")
    let mask3 = img3.querySelector(".mask")
    let mask4 = img4.querySelector(".mask")
    let mask5 = img5.querySelector(".mask")



    
    // img1 magnify
    //create image in magnifying window
    let mag_img1 = document.createElement("img")
    mag_img1.setAttribute("src","images/carousel1.png")
    mag_img1.setAttribute("width","1500")
    mag_img1.setAttribute("position", "absolute")
    
    img1.addEventListener("mouseover",function(){
        clearMagImg()
        magnify.appendChild(mag_img1)
        mask1.style.display = "block"
        magnify.style.display ="block"
        
    })
    img1.addEventListener("mouseout",function(){
        mask1.style.display = "none"
        magnify.style.display ="none"
    })
    img1.addEventListener("mousemove",function(e){
        //distance from cursor to the left/top of img1
        let x = e.pageX - 60
        let y = e.pageY - carousel.offsetTop
        let maskX = x-140
        let maskY = y-100

        let maskXMax = carousel_img.offsetWidth - mask1.offsetWidth
        let maskYMax = carousel_img.offsetHeight - mask1.offsetHeight
        
        if(maskX<=0){
            maskX=0
            mag_img1.style.left = 0 +"px"
        }else if(maskX >= maskXMax){
            maskX = maskXMax
            mag_img1.style.left = -3* maskXMax +"px"
        }else{
            mask1.style.left = maskX  + "px"
            mag_img1.style.left = -3* maskX +"px"
        }

        if(maskY <=0){
            maskY=0
            mag_img1.style.top = 0 +"px"
        }else if(maskY >= maskYMax){
            maskY = maskYMax
            mag_img1.style.top = -3*maskYMax +"px"
        }else{
            mask1.style.top = maskY + "px"
            mag_img1.style.top = -3*maskY +"px"
        }
    
        
    })
    

        
    
    

    // img2 magnify
    let mag_img2 = document.createElement("img")
    mag_img2.setAttribute("src","images/carousel2.png")
    mag_img2.setAttribute("width","1500")
    mag_img2.setAttribute("position", "absolute")
    
    img2.addEventListener("mouseover",function(){
        clearMagImg()
        magnify.appendChild(mag_img2)
        mask2.style.display = "block"
        magnify.style.display ="block"
        
    })
    img2.addEventListener("mouseout",function(){
        mask2.style.display = "none"
        magnify.style.display ="none"
    })
    img2.addEventListener("mousemove",function(e){
        //distance from cursor to the left/top of img1
        let x = e.pageX - 60
        let y = e.pageY - carousel.offsetTop
        let maskX = x-140
        let maskY = y-100

        let maskXMax = carousel_img.offsetWidth - mask2.offsetWidth
        let maskYMax = carousel_img.offsetHeight - mask2.offsetHeight
        
        if(maskX<=0){
            maskX=0
            mag_img2.style.left = 0 +"px"
        }else if(maskX >= maskXMax){
            maskX = maskXMax
            mag_img2.style.left = -3* maskXMax +"px"
        }else{
            mask2.style.left = maskX  +carousel_img.offsetWidth+ "px"
            mag_img2.style.left = -3* maskX +"px"
        }

        if(maskY <=0){
            maskY=0
            mag_img2.style.top = 0 +"px"
        }else if(maskY >= maskYMax){
            maskY = maskYMax
            mag_img2.style.top = -3*maskYMax +"px"
        }else{
            mask2.style.top = maskY + "px"
            mag_img2.style.top = -3*maskY +"px"
        }
    
        
    })
    
   
   
    
    // img3 magnify
    let mag_img3 = document.createElement("img")
    mag_img3.setAttribute("src","images/carousel3.png")
    mag_img3.setAttribute("width","1500")
    mag_img3.setAttribute("position", "absolute")
    
    img3.addEventListener("mouseover",function(){
        clearMagImg()
        magnify.appendChild(mag_img3)
        mask3.style.display = "block"
        magnify.style.display ="block"
        
    })
    img3.addEventListener("mouseout",function(){
        mask3.style.display = "none"
        magnify.style.display ="none"
    })
    img3.addEventListener("mousemove",function(e){
        //distance from cursor to the left/top of img1
        let x = e.pageX - 60
        let y = e.pageY - carousel.offsetTop
        let maskX = x-140
        let maskY = y-100

        let maskXMax = carousel_img.offsetWidth - mask3.offsetWidth
        let maskYMax = carousel_img.offsetHeight - mask3.offsetHeight
        
        if(maskX<=0){
            maskX=0
            mag_img3.style.left = 0 +"px"
        }else if(maskX >= maskXMax){
            maskX = maskXMax
            mag_img3.style.left = -3* maskXMax +"px"
        }else{
            //carousel_img.offsetWidth *2 -- the third pic is 2 pics 
            //apart from the first one, so its distance to its origin should be
            //set to 2 times of carousel_img.offsetWidth plus maskX
            mask3.style.left = maskX  + 2*carousel_img.offsetWidth+ "px"
            mag_img3.style.left = -3* maskX +"px"
        }

        if(maskY <=0){
            maskY=0
            mag_img3.style.top = 0 +"px"
        }else if(maskY >= maskYMax){
            maskY = maskYMax
            mag_img3.style.top = -3*maskYMax +"px"
        }else{
            mask3.style.top = maskY + "px"
            mag_img3.style.top = -3*maskY +"px"
        }
    
        
    })
    
    
    // img4 magnify
    let mag_img4 = document.createElement("img")
    mag_img4.setAttribute("src","images/carousel4.png")
    mag_img4.setAttribute("width","1500")
    mag_img4.setAttribute("position", "absolute")
    
    img4.addEventListener("mouseover",function(){
        clearMagImg()
        magnify.appendChild(mag_img4)
        mask4.style.display = "block"
        magnify.style.display ="block"
        
    })
    img4.addEventListener("mouseout",function(){
        mask4.style.display = "none"
        magnify.style.display ="none"
    })
    img4.addEventListener("mousemove",function(e){
        //distance from cursor to the left/top of img1
        let x = e.pageX - 60
        let y = e.pageY - carousel.offsetTop
        let maskX = x-140
        let maskY = y-100

        let maskXMax = carousel_img.offsetWidth - mask4.offsetWidth
        let maskYMax = carousel_img.offsetHeight - mask4.offsetHeight
        
        if(maskX<=0){
            maskX=0
            mag_img4.style.left = 0 +"px"
        }else if(maskX >= maskXMax){
            maskX = maskXMax
            mag_img4.style.left = -3* maskXMax +"px"
        }else{
            mask4.style.left = maskX  + 3*carousel_img.offsetWidth+ "px"
            mag_img4.style.left = -3* maskX +"px"
        }

        if(maskY <=0){
            maskY=0
            mag_img4.style.top = 0 +"px"
        }else if(maskY >= maskYMax){
            maskY = maskYMax
            mag_img4.style.top = -3*maskYMax +"px"
        }else{
            mask4.style.top = maskY + "px"
            mag_img4.style.top = -3*maskY +"px"
        }
    
        
    })

        
    let mag_img5 = document.createElement("img")
    mag_img5.setAttribute("src","images/carousel1.png")
    mag_img5.setAttribute("width","1500")
    mag_img5.setAttribute("position", "absolute")
    
    img5.addEventListener("mouseover",function(){
        clearMagImg()
        magnify.appendChild(mag_img5)
        mask5.style.display = "block"
        magnify.style.display ="block"
        
    })
    img5.addEventListener("mouseout",function(){
        mask5.style.display = "none"
        magnify.style.display ="none"
    })
    img5.addEventListener("mousemove",function(e){
        //distance from cursor to the left/top of img1
        let x = e.pageX - 60
        let y = e.pageY - carousel.offsetTop
        let maskX = x-140
        let maskY = y-100

        let maskXMax = carousel_img.offsetWidth - mask5.offsetWidth
        let maskYMax = carousel_img.offsetHeight - mask5.offsetHeight
        
        if(maskX<=0){
            maskX=0
            mag_img5.style.left = 0 +"px"
        }else if(maskX >= maskXMax){
            maskX = maskXMax
            mag_img5.style.left = -3* maskXMax +"px"
        }else{
            mask5.style.left = maskX  + 4*carousel_img.offsetWidth+ "px"
            mag_img5.style.left = -3* maskX +"px"
        }

        if(maskY <=0){
            maskY=0
            mag_img5.style.top = 0 +"px"
        }else if(maskY >= maskYMax){
            maskY = maskYMax
            mag_img5.style.top = -3*maskYMax +"px"
        }else{
            mask5.style.top = maskY + "px"
            mag_img5.style.top = -3*maskY +"px"
        }
    
        
    })

    

    

    
   

    function clearMagImg(){
        while (magnify.firstChild) {
            magnify.removeChild(magnify.firstChild);
        }
    }
    
})