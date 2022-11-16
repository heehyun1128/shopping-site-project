window.addEventListener("load", function () {
    let items = document.querySelectorAll(".item")
    let titles = document.querySelectorAll(".item .title")
    let details = document.querySelectorAll(".item .detail")
    let recTxt = document.querySelector(".rec-txt")
    let rTitle = recTxt.querySelector(".r-title")
    let rDetail = recTxt.querySelector(".r-detail")

//     function addActive(){
//         items.forEach(item => {
//             item.classList.remove("active")
//         })
//         this.classList.add("active")
//     }

//     items.forEach(item =>{
//         item.addEventListener("mouseover",addActive)

//     })
//   for(i=0;i<items.length;i++){
//         let index = i
//         items[i].addEventListener("mouseover",function(){

//             rTitle.innerText = titles[index].innerText
//             rDetail.innerText = details[index].innerText



//         })
//     }



  

    for (i = 0; i < items.length; i++) {
        let flag = true
        let index = i
        
            items[i].addEventListener("mouseover", function () {


                if(flag){
                    flag=false
                    items.forEach(item => {
                        item.classList.remove("active")
                    })
                    this.classList.add("active")
                    rTitle.innerText = titles[index].innerText
                    rDetail.innerText = details[index].innerText
                }

                setTimeout(()=>{flag = true},0)
                
            })
           

        }

   

})