const lis = document.querySelectorAll(".trending-container li"),
ps = document.querySelectorAll(".trending-container li p")

function movedir(e,obj){
    let obj_w = obj.offsetWidth, 
        obj_h = obj.offsetHeight,
        obj_l = obj.offsetLeft+obj.offsetParent.offsetLeft,
        obj_t = obj.offsetTop+obj.offsetParent.offsetTop,
        // originX = obj_l + obj_w / 2,
        // originY = obj_t + obj_h/ 2,
        // mouseX =  originX-e.pageX,
        // mouseY = originY-e.pageY ,
        scrollTop = document.body.scrollTop,
        scrollLeft = document.body.scrollLeft,
        diffTop=obj_t-scrollTop,
        diffLeft=obj_l-scrollLeft,
        eX = e.pageX-scrollLeft,
        eY=e.pageY-scrollTop,
        mouseX=(eX-diffLeft-obj_w/2)*(obj_w>obj_h?(obj_h/obj_w):1),
        mouseY=(eY-diffTop-obj_h/2)*(obj_h>obj_w?(obj_w/obj_h):1),
        deg = Math.atan2(mouseY,mouseX) * (180 / Math.PI),
        moveAngle = Math.round((deg + 180) / 90) % 4,
        direct = ["right","down","left","up"]
        
        console.log(moveAngle)


    return direct[moveAngle]


}
// window.addEventListener("mousemove",function(e){
//     // console.log(e.pageX) //5
//     console.log(e.pageY)
// })


function mouseEvent(angle,obj,move){ //move - in or out
    let w = obj.offsetWidth,
        h = obj.offsetHeight
        
    let p = obj.querySelector("p")

    p.style.transition = "0s"

    if(move=="in"){
        switch(angle){
            case "up":
                if(p.offsetLeft==0 && p.offsetTop==0) break
                p.style.left = 0
                p.style.top = h + "px"
                setTimeout(()=>{
                    p.style.left = 0
                    p.style.top = 0
                    p.style.transition = ".2s"
                },50)
                break;
            case "right":
                if(p.offsetLeft==0 && p.offsetTop==0) break
                p.style.left = -w + "px"
                p.style.top = 0
                setTimeout(()=>{
                    p.style.left = 0
                    p.style.top = 0
                    p.style.transition = ".2s"
                },50)
                break;
            case "down":
                if(p.offsetLeft==0 && p.offsetTop==0) break
                p.style.left = 0 
                p.style.top = -h + "px"
                setTimeout(()=>{
                    p.style.left = 0
                    p.style.top = 0
                    p.style.transition = ".2s"
                },50)
                break;
            case "left":
                if(p.offsetLeft==0 && p.offsetTop==0) break
                p.style.left = w + "px"
                p.style.top = 0
                setTimeout(()=>{
                    p.style.left = 0
                    p.style.top = 0
                    p.style.transition = ".2s"
                },50)
                break;

        }
    }else if(move=="out"){
        switch(angle){
            case "up":
                setTimeout(()=>{
                    p.style.left = 0
                    p.style.top = h + "px"
                    p.style.transition = ".2s"
                    p.style.transitionDelay = ".1s"
                },50)
                break;
            case "right":
                setTimeout(()=>{
                    p.style.left = -w + "px"
                    p.style.top = 0
                    p.style.transition = ".2s"
                    p.style.transitionDelay = ".1s"
                },50)
                break;
            case "down":
                setTimeout(()=>{
                    p.style.left = 0
                    p.style.top = -h + "px"
                    p.style.transition = ".2s"
                    p.style.transitionDelay = ".1s"
                },50)
                break;
            case "left":
                setTimeout(()=>{
                    p.style.left = w + "px"
                    p.style.top = 0
                    p.style.transition = ".2s"
                    p.style.transitionDelay = ".1s"
                },50)
                break;

    }



    }}

lis.forEach(li =>{
    li.addEventListener('mouseenter',function(e){
        e = e||window.event
        let angle = movedir(e,this)
        mouseEvent(angle,this,'in')

    })
    li.addEventListener('mouseleave',function(e){
        e = e||window.event
        let angle = movedir(e,this)
        mouseEvent(angle,this,'out')

    })
})